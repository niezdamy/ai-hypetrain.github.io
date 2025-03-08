import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, DollarSign, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CommentSection } from "@/components/comment-section"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = Number.parseInt(params.id)

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Exploring GPT-4's Capabilities for Content Creation",
      date: "2023-11-15",
      timeSpent: "8 hours",
      cost: "$20",
      income: "$0",
      imageUrl: "/placeholder.svg?height=400&width=800",
      content: `
        <p>When OpenAI released GPT-4, I was eager to test its capabilities for content creation and compare it to previous models I've worked with. This post documents my month-long experiment using GPT-4 for various content creation tasks.</p>
        
        <h2>The Experiment Setup</h2>
        <p>I designed a series of content creation tasks that would test GPT-4's abilities across different domains:</p>
        <ul>
          <li>Technical blog posts about cloud infrastructure</li>
          <li>Creative short stories in different genres</li>
          <li>Marketing copy for fictional products</li>
          <li>Email templates for business communication</li>
        </ul>
        
        <p>For each task, I created detailed prompts and evaluated the outputs based on accuracy, creativity, coherence, and how much editing was required.</p>
        
        <h2>Results and Observations</h2>
        
        <h3>Technical Content</h3>
        <p>GPT-4 showed significant improvements in technical accuracy compared to GPT-3.5. When writing about cloud infrastructure, it made fewer factual errors and demonstrated a better understanding of complex technical concepts. However, I still needed to fact-check specific technical details, especially for newer technologies or services.</p>
        
        <h3>Creative Writing</h3>
        <p>In creative writing tasks, GPT-4 demonstrated an impressive ability to maintain consistent tone, character development, and plot coherence. The stories it generated required minimal editing and often contained creative elements I wouldn't have thought of myself.</p>
        
        <h3>Marketing Copy</h3>
        <p>For marketing materials, GPT-4 excelled at generating compelling copy that highlighted product benefits effectively. It was able to adapt to different brand voices and target audiences when specified in the prompt.</p>
        
        <h2>Cost-Benefit Analysis</h2>
        <p>While the API costs were higher than using GPT-3.5, the reduction in editing time and improved quality made it worthwhile for my workflow. I estimate that using GPT-4 saved me approximately 15-20 hours of work over the course of the month compared to writing everything from scratch.</p>
        
        <h2>Limitations and Challenges</h2>
        <p>Despite its improvements, GPT-4 still has limitations. It occasionally hallucinated facts in technical content, requiring careful review. The model also sometimes struggled with very specific industry jargon unless explicitly guided.</p>
        
        <h2>Conclusion</h2>
        <p>GPT-4 represents a significant step forward for AI-assisted content creation. For my workflow, it proved to be a valuable tool that enhanced productivity while maintaining quality. The key to success was learning how to craft effective prompts and implementing a robust review process for the generated content.</p>
        
        <p>In future experiments, I plan to explore fine-tuning options to make the model even more aligned with specific content needs.</p>
      `,
    },
    {
      id: 2,
      title: "Building a Custom ChatBot with Anthropic's Claude",
      date: "2023-12-02",
      timeSpent: "12 hours",
      cost: "$35",
      income: "$150",
      imageUrl: "/placeholder.svg?height=400&width=800",
      content: `
        <p>After hearing positive reviews about Anthropic's Claude AI, I decided to build a specialized customer service chatbot using their API and integrate it with a client's website. This post details the process, challenges, and results of this project.</p>
        
        <h2>Project Requirements</h2>
        <p>My client, a small e-commerce business selling handcrafted jewelry, needed a chatbot that could:</p>
        <ul>
          <li>Answer common questions about products, shipping, and returns</li>
          <li>Help customers find products based on their preferences</li>
          <li>Collect customer information for custom order requests</li>
          <li>Maintain a conversational, friendly tone aligned with their brand</li>
        </ul>
        
        <h2>Why Claude?</h2>
        <p>I chose Claude for this project because of its strong performance in maintaining context over longer conversations and its nuanced understanding of instructions. The client also appreciated Claude's focus on harmlessness and helpful responses.</p>
        
        <h2>Implementation Process</h2>
        
        <h3>Step 1: Data Collection and Preparation</h3>
        <p>I worked with the client to gather information about their products, policies, and common customer questions. This included creating a comprehensive FAQ document and product database that could be referenced in the system prompt.</p>
        
        <h3>Step 2: API Integration</h3>
        <p>I used Anthropic's API to create the chatbot backend, implementing a context management system that would allow the bot to remember important details from earlier in the conversation. The integration was straightforward, with good documentation making the process smooth.</p>
        
        <h3>Step 3: Frontend Development</h3>
        <p>I created a chat interface that matched the client's website design, with features like typing indicators and message history. The interface was built using React and styled to seamlessly blend with the existing site.</p>
        
        <h3>Step 4: Testing and Refinement</h3>
        <p>I conducted extensive testing with various customer scenarios and refined the system prompt based on the results. This iterative process was crucial for improving the chatbot's accuracy and helpfulness.</p>
        
        <h2>Results</h2>
        <p>After deploying the chatbot, the client saw several positive outcomes:</p>
        <ul>
          <li>50% reduction in basic customer service inquiries handled by staff</li>
          <li>Increased engagement on the website, with users spending 30% more time browsing products</li>
          <li>15% increase in conversion rate for visitors who interacted with the chatbot</li>
        </ul>
        
        <h2>Challenges Faced</h2>
        <p>The main challenges included:</p>
        <ul>
          <li>Ensuring the chatbot didn't provide information about products that were out of stock (solved by implementing a real-time inventory check)</li>
          <li>Managing conversation context within token limits</li>
          <li>Training the client's team to monitor and maintain the chatbot</li>
        </ul>
        
        <h2>Financial Breakdown</h2>
        <p>The project cost approximately $35 in API usage during development and testing. I charged the client $150 for the implementation, with an ongoing maintenance agreement. The client estimates the chatbot will save them approximately $200 per month in customer service time.</p>
        
        <h2>Conclusion</h2>
        <p>Building a custom chatbot with Claude proved to be a cost-effective solution for enhancing customer service for a small e-commerce business. The quality of Claude's responses and its ability to maintain context made it well-suited for this application.</p>
        
        <p>For future improvements, I'm considering implementing a hybrid approach that can hand off complex inquiries to human agents when necessary.</p>
      `,
    },
    {
      id: 3,
      title: "Image Generation with Midjourney: A Month-Long Experiment",
      date: "2024-01-10",
      timeSpent: "20 hours",
      cost: "$50",
      income: "$300",
      imageUrl: "/placeholder.svg?height=400&width=800",
      content: `
        <p>For the past month, I've been experimenting with Midjourney for creating marketing materials for clients. This post shares my experience, techniques I've learned, and the financial results of this experiment.</p>
        
        <h2>The Experiment</h2>
        <p>I set out to determine whether Midjourney could effectively replace some of my graphic design work for creating marketing visuals. I focused on three types of content:</p>
        <ul>
          <li>Social media graphics</li>
          <li>Product visualization</li>
          <li>Website hero images</li>
        </ul>
        
        <h2>Learning Process</h2>
        
        <h3>Week 1: Basics and Prompt Engineering</h3>
        <p>I spent the first week learning Midjourney's parameters and how to craft effective prompts. I discovered that being specific about style, lighting, and composition yielded the best results. I created a personal "prompt cookbook" with templates that consistently produced good results.</p>
        
        <h3>Week 2: Client Project Implementation</h3>
        <p>I began using Midjourney for a small client project - creating social media graphics for a local coffee shop. The client was impressed with the unique artistic style we could achieve, which would have been costly to commission from an illustrator.</p>
        
        <h3>Week 3: Advanced Techniques</h3>
        <p>I explored more advanced features like image blending, reference images, and style mixing. These techniques allowed for much more control over the output and helped maintain brand consistency across multiple images.</p>
        
        <h3>Week 4: Workflow Integration</h3>
        <p>In the final week, I focused on integrating Midjourney into my existing design workflow. I developed a process where I would generate base images with Midjourney and then refine them in Photoshop for final touches and text overlay.</p>
        
        <h2>Results</h2>
        
        <h3>Quality Assessment</h3>
        <p>Midjourney excelled at creating atmospheric, artistic images that would be time-consuming to create manually. It struggled with text integration and precise layouts, which still required traditional design tools.</p>
        
        <h3>Time Efficiency</h3>
        <p>For certain types of graphics, Midjourney reduced my production time by 60-70%. However, the time saved was partially offset by the time spent crafting and refining prompts, especially for complex requests.</p>
        
        <h3>Client Satisfaction</h3>
        <p>Clients were generally impressed with the unique visual styles we could achieve. The novelty factor of AI-generated imagery was also a selling point for some clients who wanted to appear innovative.</p>
        
        <h2>Financial Breakdown</h2>
        <p>I spent $50 on Midjourney's subscription for the month. During this period, I completed three client projects using Midjourney as the primary image generation tool, earning $300 in total. This represents a 6x return on investment, not counting my time.</p>
        
        <h2>Limitations and Challenges</h2>
        <ul>
          <li>Inconsistency between images in a series (solved partially by using reference images)</li>
          <li>Difficulty with specific brand colors (required post-processing)</li>
          <li>Occasional unexpected results requiring multiple generation attempts</li>
          <li>Copyright and ownership questions from clients</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Midjourney has earned a permanent place in my creative toolkit. While it won't replace traditional design skills, it serves as a powerful ideation tool and can handle certain types of image creation tasks very effectively.</p>
        
        <p>For designers considering Midjourney, I recommend starting with a clear understanding of its strengths and limitations. It's best used as part of a hybrid workflow rather than a complete replacement for design software.</p>
        
        <p>In future experiments, I plan to explore combining Midjourney with other AI tools like DALL-E and Stable Diffusion to leverage the strengths of each platform.</p>
      `,
    },
  ]

  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    notFound()
  }

  // Sample comments for this post
  const initialComments = [
    {
      id: 1,
      author: "Tech Enthusiast",
      authorInitials: "TE",
      content: "Great analysis! Have you tried comparing it with other AI models like Claude or Llama?",
      date: new Date(2024, 0, 15),
    },
    {
      id: 2,
      author: "Sarah Miller",
      authorInitials: "SM",
      content:
        "This breakdown of costs vs. benefits is exactly what I needed. I've been on the fence about using these tools professionally.",
      date: new Date(2024, 0, 20),
    },
  ]

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Button variant="outline" size="sm" asChild className="mb-4 bg-background/80 hover:bg-background">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{post.title}</h1>
            <div className="flex items-center mt-4 text-white/90">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={post.date} className="text-sm">
                {post.date}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Experiment Stats */}
        <div className="bg-muted p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-primary mr-2" />
            <div>
              <p className="text-sm text-muted-foreground">Time Invested</p>
              <p className="font-medium">{post.timeSpent}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-primary mr-2" />
            <div>
              <p className="text-sm text-muted-foreground">Total Cost</p>
              <p className="font-medium">{post.cost}</p>
            </div>
          </div>
          <div className="flex items-center">
            <PiggyBank className="h-5 w-5 text-primary mr-2" />
            <div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
              <p className="font-medium">{post.income}</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-8" />

        {/* Post Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Share
            </Button>
            <Button variant="outline" size="sm">
              Bookmark
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16">
          <CommentSection postId={postId} initialComments={postId === 1 ? initialComments : []} />
        </div>
      </div>
    </article>
  )
}

