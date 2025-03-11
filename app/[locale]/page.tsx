"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Clock, DollarSign, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog-post-card"
import { StatsCounter } from "@/components/stats-counter"
import { useTranslation } from "@/hooks/use-translation"

export default function LocalizedHome() {
  const { t, locale } = useTranslation()
  
  // Sample blog posts data with translations
  const blogPosts = [
    {
      id: 1,
      title: locale === 'pl' ? 'Badanie możliwości GPT-4 do tworzenia treści' : "Exploring GPT-4's Capabilities for Content Creation",
      excerpt: locale === 'pl' ? 'Szczegółowa analiza wykorzystania GPT-4 do generowania treści blogowych i porównanie z poprzednimi modelami.' : "A deep dive into using GPT-4 for generating blog content and how it compares to previous models.",
      date: "2023-11-15",
      timeSpent: locale === 'pl' ? "8 godzin" : "8 hours",
      cost: "$20",
      income: "$0",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: locale === 'pl' ? 'Budowanie niestandardowego ChatBota z Claude Anthropic' : "Building a Custom ChatBot with Anthropic's Claude",
      excerpt: locale === 'pl' ? 'Jak zbudowałem specjalistycznego chatbota obsługi klienta przy użyciu Claude i zintegrowałem go z moją witryną.' : "How I built a specialized customer service chatbot using Claude and integrated it with my website.",
      date: "2023-12-02",
      timeSpent: locale === 'pl' ? "12 godzin" : "12 hours",
      cost: "$35",
      income: "$150",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: locale === 'pl' ? 'Generowanie obrazów z Midjourney: Miesięczny eksperyment' : "Image Generation with Midjourney: A Month-Long Experiment",
      excerpt: locale === 'pl' ? 'Moje doświadczenie z korzystaniem z Midjourney przez miesiąc do tworzenia materiałów marketingowych i uzyskane rezultaty.' : "My experience using Midjourney for a month to create marketing materials and the results it produced.",
      date: "2024-01-10",
      timeSpent: locale === 'pl' ? "20 godzin" : "20 hours",
      cost: "$50",
      income: "$300",
      imageUrl: "/placeholder.svg?height=200&width=400",
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
  const scrollToPosts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">{t('home.heroTitle')}</h1>
          <p className="mt-3 text-xl text-muted-foreground sm:mt-5">
            {t('home.heroSubtitle')}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#latest-posts" onClick={scrollToPosts}>
                {t('home.explorePosts')} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('home.myAiJourney')}</h2>
          <StatsCounter
            totalTime={`${totalHours} ${t('home.hoursAcrossProjects')}`}
            totalHours={totalHours}
            totalCost={t('home.investedInAiTools')}
            totalCostValue={totalCost}
            totalIncome={t('home.generatedFromAiImplementations')}
            totalIncomeValue={totalIncome}
          />
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('home.latestExperiments')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href={`/ai-hypetrain.github.io/${locale}/blog`}>
                {t('common.viewAllPosts')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.aboutMe')}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {t('about.aboutText')}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('blog.timeSpent')}</h3>
              <p className="text-muted-foreground">{t('about.transparencyText')}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <DollarSign className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('blog.cost')}</h3>
              <p className="text-muted-foreground">{t('about.experimentationText')}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <PiggyBank className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{t('blog.income')}</h3>
              <p className="text-muted-foreground">{t('about.educationText')}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-medium mb-4">{t('common.letsWorkTogether')}</p>
            <Button asChild>
              <Link href={`/ai-hypetrain.github.io/${locale}/contact`}>
                {t('common.contact')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
