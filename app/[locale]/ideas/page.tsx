import React from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { GitHubProjectBoard } from '@/components/github-project-board'

export default async function IdeasPage({ params: { locale } }: { params: { locale: string } }) {
  // Set the locale for this request - enables static rendering
  setRequestLocale(locale)
  
  const t = await getTranslations()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t('ideas.title')}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('ideas.subtitle')}
          </p>
        </div>
      </section>

      {/* GitHub Project Board Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GitHubProjectBoard 
            projectUrl="https://github.com/niezdamy/ai-hypetrain.github.io" 
            repositoryName="ai-hypetrain.github.io"
            ownerName="niezdamy"
          />
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">{t('ideas.submitIdea')}</p>
            <a 
              href="https://github.com/niezdamy/ai-hypetrain.github.io/issues/new?title=New%20Idea:&labels=idea&template=idea.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('ideas.submitButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
