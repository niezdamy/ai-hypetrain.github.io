import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "AI Hypetrain - Documenting AI Experiments",
  description:
    "A personal blog documenting experiences with AI tools, including time spent, costs, and income generated.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}