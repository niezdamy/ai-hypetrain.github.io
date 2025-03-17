'use client'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectItem {
  id: string
  title: string
  state: string
  labels: string[]
  createdAt: string
  url: string
  body?: string
}

interface GitHubProjectBoardProps {
  projectUrl: string;
  repositoryName?: string;
  ownerName?: string;
}

export function GitHubProjectBoard({ 
  projectUrl, 
  repositoryName = 'ai-hypetrain.github.io', 
  ownerName = 'niezdamy' 
}: GitHubProjectBoardProps) {
  const t = useTranslations('ideas')
  const [items, setItems] = useState<Record<string, ProjectItem[]>>({
    'To Do': [],
    'In Progress': [],
    'Done': [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // NOTE: The actual GitHub Projects v2 API requires authentication via GraphQL.
    // As a workaround, we can use the public Issues API and then simulate project status
    // based on issue metadata (labels, state, etc.)
    
    const fetchGitHubIssues = async () => {
      try {
        setLoading(true)
        
        // Fetch issues from the public GitHub API
        const issuesResponse = await fetch(`https://api.github.com/repos/${ownerName}/${repositoryName}/issues?state=all&per_page=100`)
        
        if (!issuesResponse.ok) {
          throw new Error(`Failed to fetch issues: ${issuesResponse.status}`)
        }
        
        const issues = await issuesResponse.json()
        
        // Log the first issue to see its structure
        if (issues.length > 0) {
          console.log('Sample issue structure:', issues[0])
        }
        
        // Initialize our categories
        const categorizedItems: Record<string, ProjectItem[]> = {
          'To Do': [],
          'In Progress': [],
          'Done': []
        }
        
        // Process each issue and categorize it
        issues.forEach((issue: any) => {
          // Skip pull requests - we only want issues
          if (issue.pull_request) {
            return
          }
          
          // Determine category based on issue state and labels
          let category = 'To Do' // Default category
          
          if (issue.state === 'closed') {
            category = 'Done'
          } else {
            // Look for labels that might indicate in-progress status
            const inProgressIndicators = ['in progress', 'wip', 'working', 'started']
            
            // Check for in-progress labels
            const hasInProgressLabel = issue.labels.some((label: any) => 
              inProgressIndicators.some(indicator => 
                label.name.toLowerCase().includes(indicator)
              )
            )
            
            // Check for assignees - if assigned, it might be in progress
            const hasAssignees = issue.assignees && issue.assignees.length > 0
            
            if (hasInProgressLabel || hasAssignees) {
              category = 'In Progress'
            }
          }
          
          // Convert issue to our ProjectItem format
          const projectItem: ProjectItem = {
            id: issue.number.toString(),
            title: issue.title,
            state: issue.state,
            labels: issue.labels.map((label: any) => label.name),
            createdAt: issue.created_at,
            url: issue.html_url,
            body: issue.body
          }
          
          categorizedItems[category].push(projectItem)
        })
        
        // Sort items in each category by date (newest first)
        Object.keys(categorizedItems).forEach(category => {
          categorizedItems[category].sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          })
        })
        
        // Update state with the categorized issues
        setItems(categorizedItems)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub issues:', error)
        setError('Failed to load project data')
        setLoading(false)
        
        // Fall back to mock data if we can't fetch real issues
        showMockData()
      }
    }
    
    // Fallback function to show mock data if API fails
    const showMockData = () => {
      const mockData: Record<string, ProjectItem[]> = {
        'To Do': [
          {
            id: '1',
            title: 'Add more AI tools to cost comparison',
            state: 'open',
            labels: ['enhancement', 'ai-tools'],
            createdAt: '2025-03-10T10:00:00Z',
            url: 'https://github.com/niezdamy/ai-hypetrain.github.io/issues/1',
            body: 'We should add more AI tools to our cost comparison tracker, including newer models from Anthropic and OpenAI.'
          },
          {
            id: '2',
            title: 'Create a section for prompt engineering tips',
            state: 'open',
            labels: ['content', 'learning'],
            createdAt: '2025-03-12T14:30:00Z',
            url: 'https://github.com/niezdamy/ai-hypetrain.github.io/issues/2',
            body: 'Add a resource section with prompt engineering tips and best practices.'
          },
        ],
        'In Progress': [
          {
            id: '3',
            title: 'Improve dark mode accessibility',
            state: 'open',
            labels: ['enhancement', 'ui/ux', 'accessibility'],
            createdAt: '2025-03-05T09:15:00Z',
            url: 'https://github.com/niezdamy/ai-hypetrain.github.io/issues/3',
            body: 'The dark mode has some contrast issues that need to be fixed for better accessibility.'
          },
        ],
        'Done': [
          {
            id: '4',
            title: 'Add favicon to the website',
            state: 'closed',
            labels: ['enhancement', 'ui/ux'],
            createdAt: '2025-03-01T11:45:00Z',
            url: 'https://github.com/niezdamy/ai-hypetrain.github.io/issues/4',
            body: 'Create and add a favicon representing the AI Hypetrain theme.'
          },
          {
            id: '5',
            title: 'Make subscription form work with static site',
            state: 'closed',
            labels: ['bug', 'ui/ux'],
            createdAt: '2025-02-25T16:20:00Z',
            url: 'https://github.com/niezdamy/ai-hypetrain.github.io/issues/5',
            body: 'Fix the subscription form to display properly in the static site version.'
          },
        ],
      }
      
      setItems(mockData)
      setLoading(false)
    }
    
    fetchGitHubIssues()
    
  }, [projectUrl])

  // Format date to readable string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date)
  }

  // Render a label with appropriate styling
  const renderLabel = (label: string) => {
    const getColorForLabel = (label: string) => {
      const colorMap: Record<string, string> = {
        'enhancement': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        'bug': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        'content': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        'ui/ux': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        'learning': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        'ai-tools': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
        'accessibility': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      }
      
      return colorMap[label] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
    
    return (
      <span 
        key={label} 
        className={`inline-block px-2 py-1 text-xs font-medium rounded mr-2 mb-2 ${getColorForLabel(label)}`}
      >
        {label}
      </span>
    )
  }

  // Render project item card
  const renderCard = (item: ProjectItem) => (
    <Card key={item.id} className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{item.title}</CardTitle>
        <CardDescription className="text-xs">
          {t('createdOn')}: {formatDate(item.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-wrap">
          {item.labels.map(label => renderLabel(label))}
        </div>
        {item.body && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
            {item.body}
          </p>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          <ExternalLink className="h-3 w-3 mr-1" /> 
          {t('viewOnGitHub')}
        </a>
      </CardFooter>
    </Card>
  )

  // Loading state display
  const renderSkeletonCards = () => (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <Card key={i} className="mb-4">
          <CardHeader className="pb-2">
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-3 w-1/3" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="h-16 w-full mt-3" />
          </CardContent>
          <CardFooter className="pt-0">
            <Skeleton className="h-4 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  if (error) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <div className="text-destructive mb-2">
          <span className="text-lg">⚠️</span> {error}
        </div>
        <p className="text-sm text-muted-foreground">
          {t('errorMessage')}
        </p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
        >
          <Github className="h-4 w-4 mr-1" /> {t('viewDirectly')}
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-medium">{t('boardTitle')}</h2>
        <a
          href="https://github.com/users/niezdamy/projects/3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          <Github className="h-4 w-4 mr-1" /> {t('viewOnGitHub')}
        </a>
      </div>

      <div className="p-4">
        <Tabs defaultValue="To Do">
          <TabsList className="mb-4">
            {Object.keys(items).map(status => (
              <TabsTrigger key={status} value={status} className="flex-1">
                {t(status.toLowerCase().replace(' ', ''))}
                <span className="ml-1 text-xs bg-muted rounded-full px-2 py-0.5">
                  {items[status].length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(items).map(([status, statusItems]) => (
            <TabsContent key={status} value={status} className="mt-0">
              {loading ? (
                renderSkeletonCards()
              ) : statusItems.length > 0 ? (
                <div className="space-y-4">
                  {statusItems.map(renderCard)}
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  {t('noItems')}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
