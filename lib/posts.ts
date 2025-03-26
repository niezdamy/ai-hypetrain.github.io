// Define the Post type
export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  timeSpent?: string;
  cost?: string;
  income?: string;
  imageUrl?: string;
}

// Real blog post data
const posts: Post[] = [
  {
    id: '1',
    title: 'Building Website with AI Code Assistant',
    date: '2025-03-26',
    excerpt: 'My experience using AI assistants to build this Next.js website, including the challenges with translations and dual language support.',
    content: `# Building Website with AI Code Assistant

Building this website turned out to be an interesting journey that took more time than I initially expected. As someone who wanted to explore the capabilities of AI code assistants, I decided to go all-in and use them to build my AI Hypetrain site from scratch.

## The Tools I Used

1. **V0** - I started with V0 to scaffold the initial Next.js project. It gave me a good foundation with a modern tech stack.

2. **Windsurf IDE** - For the actual coding, I used Windsurf which gave me access to multiple AI models:
   - Gemini 2.0 Flash
   - DeepSeek R1
   - GPT-4o
   - GPT-4o-mini
   - Claude 3.7 Sonnet

## The Challenges

While the coding assistance was generally helpful, I encountered several challenges:

### Dual Language Support

By far the most problematic aspect was implementing dual language support (English and Polish). The AI models often struggled with:

- Properly implementing next-intl for internationalization
- Maintaining consistent translation keys
- Handling locale-specific routing

After experimenting with various models, I found that Claude 3.7 Sonnet gave the best results for translation work. It seemed to have a better understanding of internationalization patterns and the Next.js framework's conventions.

### Time Investment

In total, I spent approximately 18 hours building this site. A significant portion of that time was spent correcting issues with the translations and ensuring the dual language support worked correctly.

## The Costs

My only direct expense was $15 for the Windsurf subscription. This gave me access to all the AI models I needed for development.

## Was It Worth It?

Despite taking longer than expected, building this site with AI assistance was a valuable learning experience. I gained insights into:

- The strengths and limitations of various AI models
- The current state of AI code generation
- Where human expertise is still essential (especially for complex architectural decisions)

If you're interested in exploring more, check out my [GitHub repository](https://github.com/niezdamy/ai-hypetrain.github.io) where you can see all the code and the history of how this project evolved.

Overall, I'm satisfied with the result and look forward to continuing to track AI tools and their costs on this platform!`,
    slug: 'building-website-with-ai-code-assistant',
    coverImage: '/images/ai-website.svg',
    tags: ['Web Development', 'AI', 'Next.js', 'Internationalization'],
    timeSpent: '18h',
    cost: '$15',
    income: '$0'
  }
];

// Function to get all posts
export async function getPosts(): Promise<Post[]> {
  // In a real application, this would fetch from an API or database
  return posts;
}

// Function to get a single post by slug
export async function getPost(slug: string): Promise<Post | undefined> {
  // In a real application, this would fetch from an API or database
  return posts.find(post => post.slug === slug);
}

// Function to get a single post by ID
export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(post => post.id === id);
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug);
}
