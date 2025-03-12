import React from 'react'
import { getTranslations } from 'next-intl/server'
import { BlogPostCard } from '@/components/blog-post-card'
import { getPosts, type Post } from '@/lib/posts'

export default async function BlogPage() {
  const t = await getTranslations('Blog')
  const commonT = await getTranslations()
  const posts = await getPosts()
  
  // Create a mapping for translated posts
  const postMapping: Record<string, string> = {
    'getting-started-with-ai-tools': 'post1',
    'cost-analysis-chatgpt-vs-claude': 'post2',
    'building-ai-powered-website': 'post3'
  }
  
  // Create translated versions of the posts
  const translatedPosts = posts.map(post => {
    const postKey = postMapping[post.slug]
    if (postKey) {
      try {
        return {
          ...post,
          title: commonT(`blogPosts.${postKey}.title`),
          excerpt: commonT(`blogPosts.${postKey}.excerpt`)
        }
      } catch (error) {
        console.error('Translation not found for post:', post.slug)
      }
    }
    return post
  })

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {translatedPosts.map((post: Post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
