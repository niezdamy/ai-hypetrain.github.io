import React from 'react'
import { getTranslations } from 'next-intl/server'
import { BlogPostCard } from '@/components/blog-post-card'
import { getPosts, type Post } from '@/lib/posts'

export default async function BlogPage() {
  const t = await getTranslations('Blog')
  const posts = await getPosts()

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
