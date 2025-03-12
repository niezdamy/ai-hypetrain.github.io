import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { HeroSection } from "@/components/hero-section"
import { LatestPostsSection } from "@/components/latest-posts-section"
import { AboutSection } from "@/components/about-section"
import { StatsCounterSection } from "@/components/stats-section"
import { type Post } from "@/lib/posts"
import { getAssetPath } from "@/lib/utils"

export default function Home({ params: { locale } }: { params: { locale: string }}) {
  // Enable static rendering
  setRequestLocale(locale);
  
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
      imageUrl: getAssetPath("/images/gpt4-content.svg"),
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
      imageUrl: getAssetPath("/images/claude-chatbot.svg"),
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
      imageUrl: getAssetPath("/images/midjourney-experiment.svg"),
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        title={t('hero.title')} 
        subtitle={t('hero.subtitle')} 
        ctaText={t('hero.cta')}
      />

      {/* Stats Counter Section */}
      <StatsCounterSection
        title={t('stats.title')}
        totalTime={t('stats.totalTime', { totalHours, projectCount: blogPosts.length })}
        totalHours={totalHours}
        totalCost={t('stats.totalCost')}
        totalCostValue={totalCost}
        totalIncome={t('stats.totalIncome')}
        totalIncomeValue={totalIncome}
      />

      {/* Latest Posts Section */}
      <LatestPostsSection 
        title={t('latestPosts.title')}
        viewAllText={t('latestPosts.viewAll')}
        locale={locale}
        blogPosts={blogPosts}
      />

      {/* About Section */}
      <AboutSection
        title={t('about.title')}
        description1={t('about.description1')}
        description2={t('about.description2')}
        timeTrackingTitle={t('about.timeTracking.title')}
        timeTrackingDescription={t('about.timeTracking.description')}
        costAnalysisTitle={t('about.costAnalysis.title')}
        costAnalysisDescription={t('about.costAnalysis.description')}
        revenueReportsTitle={t('about.revenueReports.title')}
        revenueReportsDescription={t('about.revenueReports.description')}
        ctaText={t('about.cta.text')}
        ctaButtonText={t('about.cta.button')}
        contactPath="/contact"
        locale={locale}
      />
    </div>
  )
}
