export interface Cost {
  id: string;
  date: string;
  name: string;
  amount: string;
  comment: string;
  type: string; // Type of transaction (monthly, tokens, one-time, etc.)
  satisfactionLevel: number; // 1-5 stars
  relatedPostSlug?: string; // Optional link to a related blog post
}

// Real costs data based on user's input
// Using localStorage to persist costs between sessions when possible
let costs: Cost[] = [
  {
    id: "1",
    date: "2025-03-26",
    name: "Windsurf Subscription",
    amount: "$15",
    comment: "Subscription for Windsurf IDE to enable AI-assisted coding with access to various models like GPT-4o, Claude 3.7 Sonnet, DeepSeek R1, and more.",
    type: "One-time purchase",
    satisfactionLevel: 4,
    relatedPostSlug: "building-website-with-ai-code-assistant"
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
export async function getTotalCost(): Promise<{ total: number; currency: string; timeSpent: number; moneyEarned: number }> {
  const total = costs.reduce((sum, cost) => {
    const amount = parseFloat(cost.amount.replace(/[^0-9.]/g, ''));
    return sum + amount;
  }, 0);
  
  // Return real data as specified by user
  return { 
    total, 
    currency: '$', 
    timeSpent: costs.reduce((sum, cost) => sum + cost.timeSpent, 0), // Calculate total time spent
    moneyEarned: costs.reduce((sum, cost) => sum + cost.moneyEarned, 0) // Calculate total money earned
  };
}

// Function to get average satisfaction level
export async function getAverageSatisfaction(): Promise<number> {
  const sum = costs.reduce((sum, cost) => sum + cost.satisfactionLevel, 0);
  return sum / costs.length;
}
