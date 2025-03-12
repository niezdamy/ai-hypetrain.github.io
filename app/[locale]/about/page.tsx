import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Clock, DollarSign, PiggyBank } from "lucide-react"
import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProjectTimeline } from "@/components/project-timeline"

export default async function AboutPage() {
  const t = await getTranslations()

  // Sample projects data with start dates - in a real app, this would come from a database or API
  const projects = [
    {
      id: 1,
      title: "Exploring GPT-4's Capabilities for Content Creation",
      startDate: "2023-10-15",
      endDate: "2023-11-15",
      timeSpent: "8 hours",
      cost: "$20",
      income: "$0",
      category: "Content Generation",
      description:
        "A month-long experiment using GPT-4 for various content creation tasks, comparing its capabilities to previous models.",
    },
    {
      id: 2,
      title: "Building a Custom ChatBot with Anthropic's Claude",
      startDate: "2023-11-20",
      endDate: "2023-12-02",
      timeSpent: "12 hours",
      cost: "$35",
      income: "$150",
      category: "Chatbot Development",
      description:
        "Implementing a specialized customer service chatbot using Claude and integrating it with a client's e-commerce website.",
    },
    {
      id: 3,
      title: "Image Generation with Midjourney: A Month-Long Experiment",
      startDate: "2023-12-10",
      endDate: "2024-01-10",
      timeSpent: "20 hours",
      cost: "$50",
      income: "$300",
      category: "Image Generation",
      description:
        "Experimenting with Midjourney for creating marketing materials for clients, focusing on social media graphics and product visualization.",
    },
    {
      id: 4,
      title: "Fine-tuning LLMs for Specialized Industry Knowledge",
      startDate: "2023-12-25",
      endDate: "2024-01-25",
      timeSpent: "40 hours",
      cost: "$200",
      income: "$0",
      category: "Model Fine-tuning",
      description:
        "Fine-tuning a language model for the healthcare industry to improve its domain-specific knowledge and response accuracy.",
    },
    {
      id: 5,
      title: "AI-Powered Code Generation: A Developer's Perspective",
      startDate: "2024-01-24",
      endDate: "2024-02-08",
      timeSpent: "15 hours",
      cost: "$30",
      income: "$0",
      category: "Development Tools",
      description:
        "Testing various code generation tools and evaluating their effectiveness for real-world software development projects.",
    },
    {
      id: 6,
      title: "Creating a Voice Assistant with Whisper and ElevenLabs",
      startDate: "2024-02-01",
      endDate: "2024-02-20",
      timeSpent: "25 hours",
      cost: "$75",
      income: "$200",
      category: "Voice Technology",
      description:
        "Building a custom voice assistant by combining OpenAI's Whisper for transcription and ElevenLabs for voice synthesis.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t('about.title')}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src="/placeholder.svg?height=256&width=256" alt="Profile" fill className="object-cover" />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">{t('about.greeting')}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('about.description1')}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.description2')}
              </p>

              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">{t('footer.socialLinks.twitter')}</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">{t('footer.socialLinks.github')}</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">{t('footer.socialLinks.linkedin')}</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:contact@aihypetrain.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">{t('about.email')}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('about.expertise.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{t('about.expertise.development.title')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">React</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">Node.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">Python</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{t('about.expertise.ai.title')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">LLMs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">{t('about.expertise.ai.imageGen')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">{t('about.expertise.ai.voiceAi')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{t('about.expertise.devops.title')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">Docker</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">AWS</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-primary h-4 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="ml-2 min-w-[4rem] text-right">CI/CD</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">{t('about.timeline.title')}</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            {t('about.timeline.description')}
          </p>

          <ProjectTimeline projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.text')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('about.cta.description')}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              {t('about.cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
