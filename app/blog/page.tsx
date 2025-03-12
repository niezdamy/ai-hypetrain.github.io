import type { Metadata } from "next"
import { BlogPostCard } from "@/components/blog-post-card"
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blog | AI Hypetrain",
  description: "Explore all AI experiments and projects",
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }];
}

export const dynamic = 'force-static';

export default async function BlogPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  // Sample blog posts data (expanded from home page)
  const blogPosts = [
    {
      id: "1",
      title: "Exploring GPT-4's Capabilities for Content Creation",
      excerpt: "A deep dive into using GPT-4 for generating blog content and how it compares to previous models.",
      date: "2023-11-15",
      timeSpent: "8 hours",
      cost: "$20",
      income: "$0",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "exploring-gpt-4s-capabilities-for-content-creation",
      content: ""
    },
    {
      id: "2",
      title: "Building a Custom ChatBot with Anthropic's Claude",
      excerpt: "How I built a specialized customer service chatbot using Claude and integrated it with my website.",
      date: "2023-12-02",
      timeSpent: "12 hours",
      cost: "$35",
      income: "$150",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "building-a-custom-chatbot-with-anthropics-claude",
      content: ""
    },
    {
      id: "3",
      title: "Image Generation with Midjourney: A Month-Long Experiment",
      excerpt: "My experience using Midjourney for a month to create marketing materials and the results it produced.",
      date: "2024-01-10",
      timeSpent: "20 hours",
      cost: "$50",
      income: "$300",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "image-generation-with-midjourney-a-month-long-experiment",
      content: ""
    },
    {
      id: "4",
      title: "Fine-tuning LLMs for Specialized Industry Knowledge",
      excerpt: "My journey fine-tuning a language model for the healthcare industry and the challenges I faced.",
      date: "2024-01-25",
      timeSpent: "40 hours",
      cost: "$200",
      income: "$0",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "fine-tuning-llms-for-specialized-industry-knowledge",
      content: ""
    },
    {
      id: "5",
      title: "AI-Powered Code Generation: A Developer's Perspective",
      excerpt: "Testing various code generation tools and evaluating their effectiveness for real-world projects.",
      date: "2024-02-08",
      timeSpent: "15 hours",
      cost: "$30",
      income: "$0",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "ai-powered-code-generation-a-developers-perspective",
      content: ""
    },
    {
      id: "6",
      title: "Creating a Voice Assistant with Whisper and ElevenLabs",
      excerpt:
        "Building a custom voice assistant by combining OpenAI's Whisper for transcription and ElevenLabs for voice synthesis.",
      date: "2024-02-20",
      timeSpent: "25 hours",
      cost: "$75",
      income: "$200",
      imageUrl: "/placeholder.svg?height=200&width=400",
      slug: "creating-a-voice-assistant-with-whisper-and-elevenlabs",
      content: ""
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">All AI Experiments</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Browse through all my documented AI projects and experiments
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

