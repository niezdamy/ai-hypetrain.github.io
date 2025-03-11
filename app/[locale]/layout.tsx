import React from 'react'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/navigation';
import { Inter } from "next/font/google"
import "../globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/google-analytics"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}/index.json`)).default;
  } catch (error) {
    notFound();
  }
}

const inter = Inter({ subsets: ["latin"] })

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="relative min-h-screen flex flex-col">
              <SiteHeader />
              <main className="flex-grow">{children}</main>
              <SiteFooter />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <GoogleAnalytics measurementId="G-PC9RJ9QKCS" />
      </body>
    </html>
  )
}
