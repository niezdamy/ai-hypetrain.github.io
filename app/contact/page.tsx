import type { Metadata } from "next"
import { Bot, Code, Cpu, Database, LineChart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedProcess } from "@/components/animated-process"

export const metadata: Metadata = {
  title: "Contact | AI Hypetrain",
  description: "Get in touch for AI implementation services and consulting",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's Build Your AI Solution
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Turn AI experimentation into business value with expert implementation
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">How I Can Help</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            With hands-on experience implementing various AI tools and technologies, I can help you navigate the AI
            landscape and implement solutions that deliver real business value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom AI Chatbots</h3>
                <p className="text-muted-foreground">
                  Implement specialized chatbots using GPT-4, Claude, or other LLMs tailored to your business needs and
                  integrated with your existing systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Analysis & Insights</h3>
                <p className="text-muted-foreground">
                  Leverage AI to extract meaningful insights from your data, automate reporting, and build predictive
                  models for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Development</h3>
                <p className="text-muted-foreground">
                  Accelerate your development process with AI pair programming, code generation, and automated testing
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Content Generation</h3>
                <p className="text-muted-foreground">
                  Implement AI solutions for creating marketing content, product descriptions, blog posts, and other
                  text-based assets at scale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate AI capabilities into your existing applications, websites, and business
                  processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">ROI Assessment</h3>
                <p className="text-muted-foreground">
                  Evaluate the potential return on investment for AI implementations in your business with transparent
                  cost and benefit analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">My Implementation Process</h2>

          <AnimatedProcess />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Ready to explore how AI can transform your business? Fill out the form below and I'll get back to you within
            24 hours.
          </p>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service of Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbot">Custom AI Chatbots</SelectItem>
                      <SelectItem value="data">Data Analysis & Insights</SelectItem>
                      <SelectItem value="development">AI-Powered Development</SelectItem>
                      <SelectItem value="content">Content Generation</SelectItem>
                      <SelectItem value="integration">AI Integration</SelectItem>
                      <SelectItem value="roi">ROI Assessment</SelectItem>
                      <SelectItem value="other">Other (please specify)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project and how you're looking to implement AI..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">$1,000 - $5,000</SelectItem>
                      <SelectItem value="medium">$5,000 - $10,000</SelectItem>
                      <SelectItem value="large">$10,000 - $25,000</SelectItem>
                      <SelectItem value="enterprise">$25,000+</SelectItem>
                      <SelectItem value="undecided">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-muted-foreground">E-commerce Director</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The custom chatbot implementation has transformed our customer service. We've seen a 40% reduction in
                  support tickets and significantly improved customer satisfaction."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold text-primary">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The AI content generation system has revolutionized our content strategy. We're now producing 3x more
                  content with consistent quality and brand voice."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold text-primary">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Robert Johnson</h4>
                    <p className="text-sm text-muted-foreground">CTO, Tech Startup</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The AI integration into our development workflow has accelerated our product development cycle by
                  30%. The ROI has been exceptional."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

