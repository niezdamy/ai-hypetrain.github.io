export interface Cost {
  id: string;
  date: string;
  name: string;
  amount: string;
  comment: string;
  satisfactionLevel: number; // 1-5 stars
  relatedPostSlug?: string; // Optional link to a related blog post
}

// Sample costs data
// Using localStorage to persist costs between sessions when possible
let costs: Cost[] = [
  {
    id: "1",
    date: "2023-10-15",
    name: "ChatGPT Plus Subscription",
    amount: "$20",
    comment: "Monthly subscription for ChatGPT Plus. Access to GPT-4 and plugins.",
    satisfactionLevel: 4,
    relatedPostSlug: "exploring-gpt4-capabilities"
  },
  {
    id: "2",
    date: "2023-11-02",
    name: "Anthropic Claude Pro",
    amount: "$20",
    comment: "Monthly subscription for Claude Pro. Used for building a customer service chatbot.",
    satisfactionLevel: 5,
    relatedPostSlug: "building-custom-chatbot-claude"
  },
  {
    id: "3",
    date: "2023-11-10",
    name: "Midjourney Subscription",
    amount: "$10",
    comment: "Basic plan for Midjourney. Used for generating marketing images.",
    satisfactionLevel: 3,
    relatedPostSlug: "image-generation-midjourney"
  },
  {
    id: "4",
    date: "2023-12-15",
    name: "ChatGPT Plus Subscription",
    amount: "$20",
    comment: "Second month of ChatGPT Plus. Still finding it very useful.",
    satisfactionLevel: 4
  },
  {
    id: "5",
    date: "2024-01-05",
    name: "Windsurf IDE Pro",
    amount: "$29",
    comment: "Amazing IDE that integrates AI assistants directly into the coding workflow.",
    satisfactionLevel: 5,
    relatedPostSlug: "building-ai-powered-website"
  },
  {
    id: "6",
    date: "2024-01-10",
    name: "Midjourney Standard Plan",
    amount: "$30",
    comment: "Upgraded to standard plan for faster generations and better quality.",
    satisfactionLevel: 4,
    relatedPostSlug: "image-generation-midjourney"
  },
  {
    id: "7",
    date: "2024-02-01",
    name: "Anthropic Claude Pro",
    amount: "$20",
    comment: "Renewed subscription for ongoing chatbot development.",
    satisfactionLevel: 4,
    relatedPostSlug: "building-custom-chatbot-claude"
  },
  {
    id: "8",
    date: "2024-02-15",
    name: "ChatGPT Plus Subscription",
    amount: "$20",
    comment: "Continuing to use for content creation and coding assistance.",
    satisfactionLevel: 4,
    relatedPostSlug: "exploring-gpt4-capabilities"
  }
];

// Load costs from localStorage if available (client-side only)
function tryLoadCostsFromStorage() {
  if (typeof window !== 'undefined') {
    try {
      const storedCosts = localStorage.getItem('ai-hypetrain-costs');
      if (storedCosts) {
        costs = JSON.parse(storedCosts);
      }
    } catch (error) {
      console.error('Failed to load costs from localStorage:', error);
    }
  }
}

// Save costs to localStorage (client-side only)
function trySaveCostsToStorage() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('ai-hypetrain-costs', JSON.stringify(costs));
    } catch (error) {
      console.error('Failed to save costs to localStorage:', error);
    }
  }
}

// Initialize on module load
tryLoadCostsFromStorage();

// Function to get all costs
export async function getCosts(): Promise<Cost[]> {
  // In a real application, you might fetch this from an API or database
  tryLoadCostsFromStorage(); // Refresh from storage if available
  return costs;
}

// Function to get a single cost by ID
export async function getCostById(id: string): Promise<Cost | undefined> {
  tryLoadCostsFromStorage(); // Refresh from storage if available
  return costs.find(cost => cost.id === id);
}

// Function to add a new cost
export async function addCost(cost: Omit<Cost, 'id'>): Promise<Cost> {
  // Generate a unique ID
  const newCost: Cost = {
    ...cost,
    id: Date.now().toString(),
  };
  
  costs = [newCost, ...costs];
  trySaveCostsToStorage();
  return newCost;
}

// Function to delete a cost by ID
export async function deleteCost(id: string): Promise<boolean> {
  const initialLength = costs.length;
  costs = costs.filter(cost => cost.id !== id);
  
  const deleted = costs.length < initialLength;
  if (deleted) {
    trySaveCostsToStorage();
  }
  
  return deleted;
}

// Function to calculate total cost
export async function getTotalCost(): Promise<{ total: number; currency: string }> {
  const total = costs.reduce((sum, cost) => {
    const amount = parseFloat(cost.amount.replace(/[^0-9.]/g, ''));
    return sum + amount;
  }, 0);
  
  // Assuming all costs are in the same currency (USD)
  return { total, currency: '$' };
}

// Function to get average satisfaction level
export async function getAverageSatisfaction(): Promise<number> {
  const sum = costs.reduce((sum, cost) => sum + cost.satisfactionLevel, 0);
  return sum / costs.length;
}
