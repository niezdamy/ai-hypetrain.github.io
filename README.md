# AI Hypetrain - AI Tools Cost Tracking & Experiments

A multilingual website that documents experiences with AI tools, including time spent, financial costs, and satisfaction ratings. Featuring a comprehensive costs summary with an interactive data table.

**Live site: [https://niezdamy.github.io/ai-hypetrain.github.io/](https://niezdamy.github.io/ai-hypetrain.github.io/)**

![AI Hypetrain Screenshot](/public/screenshot.png)

## Features

- 📝 Blog posts documenting AI experiments and projects
- 💰 Interactive costs summary with sortable and filterable data table
- ⏱️ Time investment tracking for each AI project
- 🌐 Internationalization support (English and Polish)
- 🌓 Dark/light mode toggle
- 📊 Statistics counter showing overall metrics
- 📱 Fully responsive design
- 🎨 Clean and modern UI with Shadcn components

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with Shadcn UI components
- **Internationalization**: next-intl for seamless localization
- **Data Table**: TanStack React Table for interactive data features
- **UI Components**: 
  - Sortable columns
  - Search functionality
  - Pagination with selectable page sizes
  - Column visibility toggle
  - Dark/light mode theming

## Costs Data Table Features

- Sort by date, name, amount, or satisfaction level
- Filter costs by name with search functionality
- Paginate with selectable page sizes (5, 10, 15, 20, 25, 50 items)
- Row numbers in the first column
- Toggle column visibility
- Full localization of all UI elements including comments

## Project Structure

- `/app/[locale]` - Localized route structure for all pages
- `/components/costs` - Cost table components
- `/lib/costs.ts` - Data models and sample data
- `/messages` - Localization messages

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/niezdamy/ai-hypetrain.github.io.git
cd ai-hypetrain.github.io

