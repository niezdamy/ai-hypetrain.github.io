import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "AI Hypetrain - Documenting AI Experiments",
  description:
    "A personal blog documenting experiences with AI tools, including time spent, costs, and income generated.",
  metadataBase: new URL(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ai-hypetrain.github.io'),
  generator: 'Next.js',
  applicationName: 'AI Hypetrain',
  referrer: 'origin-when-cross-origin',
  keywords: ['AI', 'artificial intelligence', 'experiments', 'costs', 'tools', 'GPT', 'Claude', 'Midjourney'],
  authors: [{ name: 'AI Hypetrain Author' }],
  creator: 'AI Hypetrain',
  publisher: 'AI Hypetrain',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href="https://ai-hypetrain.github.io" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Hypetrain",
              "url": "https://ai-hypetrain.github.io",
              "description": "A personal blog documenting experiences with AI tools, including time spent, costs, and income generated.",
              "inLanguage": ["en", "pl"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ai-hypetrain.github.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}