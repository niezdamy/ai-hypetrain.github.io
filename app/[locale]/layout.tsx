import React from 'react'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateStaticParams() {
  // Define all locales that should be supported
  // Add or remove locales as needed for your application
  return [
    { locale: 'en' },
    { locale: 'pl' }
  ]
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <>{children}</>
  )
}
