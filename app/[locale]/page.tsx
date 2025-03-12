"use client"

import type React from "react"

import { Link } from "@/navigation"
import { ArrowRight, Clock, DollarSign, PiggyBank } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog-post-card"
import { StatsCounter } from "@/components/stats-counter"
import { type Post } from "@/lib/posts"

export default function Home() {
  const t = useTranslations();
  
  // Sample blog posts data
  const blogPosts: (Post & { timeSpent: string; cost: string; income: string; imageUrl: string })[] = [
    {
      id: "1",
      title: "Exploring GPT-4's Capabilities for Content Creation",
      excerpt: "A deep dive into using GPT-4 for generating blog content and how it compares to previous models.",
      date: "2023-11-15",
      content: "Full content of the post...",
      slug: "exploring-gpt4-capabilities",
      timeSpent: "8 hours",
      cost: "$20",
      income: "$0",
      imageUrl: "/images/gpt4-content.svg",
    },
    {
      id: "2",
      title: "Building a Custom ChatBot with Anthropic's Claude",
      excerpt: "How I built a specialized customer service chatbot using Claude and integrated it with my website.",
      date: "2023-12-02",
      content: "Full content of the post...",
      slug: "building-custom-chatbot-claude",
      timeSpent: "12 hours",
      cost: "$35",
      income: "$150",
      imageUrl: "/images/claude-chatbot.svg",
    },
    {
      id: "3",
      title: "Image Generation with Midjourney: A Month-Long Experiment",
      excerpt: "My experience using Midjourney for a month to create marketing materials and the results it produced.",
      date: "2024-01-10",
      content: "Full content of the post...",
      slug: "image-generation-midjourney",
      timeSpent: "20 hours",
      cost: "$50",
      income: "$300",
      imageUrl: "/images/midjourney-experiment.svg",
    },
  ]

  // Calculate totals for the counter
  const totalHours = blogPosts.reduce((sum, post) => {
    const hours = Number.parseInt(post.timeSpent.split(" ")[0])
    return sum + hours
  }, 0)

  const totalCost = blogPosts.reduce((sum, post) => {
    const cost = Number.parseInt(post.cost.replace("$", ""))
    return sum + cost
  }, 0)

  const totalIncome = blogPosts.reduce((sum, post) => {
    const income = Number.parseInt(post.income.replace("$", ""))
    return sum + income
  }, 0)

  // Function to scroll to posts section
  const scrollToPosts = () => {
    const element = document.getElementById("latest-posts")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">{t('hero.title')}</h1>
          <p className="mt-3 text-xl text-muted-foreground sm:mt-5">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#latest-posts" onClick={(e) => {
                  e.preventDefault();
                  scrollToPosts();
                }}>
                {t('hero.cta')} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('stats.title')}</h2>
          <StatsCounter
            totalTime={t('stats.totalTime', { totalHours, projectCount: blogPosts.length })}
            totalHours={totalHours}
            totalCost={t('stats.totalCost')}
            totalCostValue={totalCost}
            totalIncome={t('stats.totalIncome')}
            totalIncomeValue={totalIncome}
          />
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('latestPosts.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                {t('latestPosts.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {t('about.description1')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t('about.description2')}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.timeTracking.title')}</h3>
              <p className="text-muted-foreground">{t('about.timeTracking.description')}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <DollarSign className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.costAnalysis.title')}</h3>
              <p className="text-muted-foreground">{t('about.costAnalysis.description')}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <PiggyBank className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('about.revenueReports.title')}</h3>
              <p className="text-muted-foreground">{t('about.revenueReports.description')}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-medium mb-4">{t('about.cta.text')}</p>
            <Button asChild>
              <Link href="/contact">
                {t('about.cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
