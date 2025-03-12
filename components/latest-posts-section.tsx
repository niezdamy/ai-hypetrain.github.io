"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "@/components/ui/button";
import { type Post } from "@/lib/posts";

type LatestPostsSectionProps = {
  title: string;
  viewAllText: string;
  locale: string;
  blogPosts: (Post & { timeSpent: string; cost: string; income: string; imageUrl: string })[];
};

export function LatestPostsSection({ title, viewAllText, locale, blogPosts }: LatestPostsSectionProps) {
  return (
    <section id="latest-posts" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link href={`/${locale}/blog`} locale={locale}>
            <Button variant="outline">
              {viewAllText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
