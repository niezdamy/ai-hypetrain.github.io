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
}

// Sample posts data
const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with AI Tools',
    date: '2023-06-15',
    excerpt: 'My first experience with various AI tools and what I learned from them.',
    content: 'This is the full content of the post...',
    slug: 'getting-started-with-ai-tools',
    coverImage: '/images/ai-tools.jpg',
    tags: ['AI', 'Beginners', 'Tools']
  },
  {
    id: '2',
    title: 'Cost Analysis: ChatGPT vs Claude',
    date: '2023-07-22',
    excerpt: 'A detailed comparison of costs between OpenAI\'s ChatGPT and Anthropic\'s Claude.',
    content: 'This is the full content of the post...',
    slug: 'cost-analysis-chatgpt-vs-claude',
    coverImage: '/images/cost-analysis.jpg',
    tags: ['Cost', 'ChatGPT', 'Claude', 'Comparison']
  },
  {
    id: '3',
    title: 'Building an AI-Powered Website',
    date: '2023-08-10',
    excerpt: 'How I used AI to help design and develop this website.',
    content: 'This is the full content of the post...',
    slug: 'building-ai-powered-website',
    coverImage: '/images/ai-website.jpg',
    tags: ['Web Development', 'AI', 'Design']
  }
];

// Function to get all posts
export async function getPosts(): Promise<Post[]> {
  // In a real application, this would fetch from an API or database
  return posts;
}

// Function to get a single post by ID
export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(post => post.id === id);
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug);
}
