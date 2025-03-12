import React from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Clock, DollarSign, PiggyBank } from 'lucide-react'
import { getPost, getPosts } from '@/lib/posts'

interface BlogPostPageProps {
  params: {
    slug: string
    locale: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  const locales = ['en', 'pl'] // From next-intl.config.js
  
  const paths = []
  for (const locale of locales) {
    for (const post of posts) {
      paths.push({
        locale,
        slug: post.slug
      })
    }
  }

  return paths
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Set the locale for this request - enables static rendering
  setRequestLocale(params.locale)
  
  const t = await getTranslations()
  const blogT = await getTranslations('Blog')
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }
  
  // Get the translated post content based on the slug
  let translatedTitle = post.title
  let translatedExcerpt = post.excerpt
  let translatedContent = post.content
  
  // Map the slug to the corresponding post in translations
  const postMapping: Record<string, string> = {
    'getting-started-with-ai-tools': 'post1',
    'cost-analysis-chatgpt-vs-claude': 'post2',
    'building-ai-powered-website': 'post3'
  }
  
  const postKey = postMapping[params.slug] as string | undefined
  
  if (postKey) {
    try {
      translatedTitle = t(`blogPosts.${postKey}.title`)
      translatedExcerpt = t(`blogPosts.${postKey}.excerpt`)
      translatedContent = t(`blogPosts.${postKey}.content`)
    } catch (error) {
      console.error('Translation not found for post:', params.slug)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="mr-1 h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1 className="text-4xl font-bold mb-4">{translatedTitle}</h1>
          <p className="text-xl text-muted-foreground">{translatedExcerpt}</p>
        </div>

        {post.coverImage && (
          <div className="relative h-[400px] w-full mb-8">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover rounded-lg" 
            />
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          {post.timeSpent && (
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">{t('blogPost.timeSpent')}</div>
              <div className="font-bold">{post.timeSpent}</div>
            </div>
          )}
          
          {post.cost && (
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <DollarSign className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">{t('blogPost.cost')}</div>
              <div className="font-bold">{post.cost}</div>
            </div>
          )}
          
          {post.income && (
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <PiggyBank className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">{t('blogPost.income')}</div>
              <div className="font-bold">{post.income}</div>
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: translatedContent }} />
        </div>
      </div>
    </div>
  )
}
