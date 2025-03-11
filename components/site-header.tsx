"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/hooks/use-translation"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const { t, locale } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/ai-hypetrain.github.io" className="flex items-center space-x-2">
            <span className="font-bold text-xl">AI Hypetrain</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={`/ai-hypetrain.github.io/${locale}`} className="text-sm font-medium transition-colors hover:text-primary">
              {t('common.home')}
            </Link>
            <Link href={`/ai-hypetrain.github.io/${locale}/blog`} className="text-sm font-medium transition-colors hover:text-primary">
              {t('common.blog')}
            </Link>
            <Link href={`/ai-hypetrain.github.io/${locale}/about`} className="text-sm font-medium transition-colors hover:text-primary">
              {t('common.about')}
            </Link>
            <Link href={`/ai-hypetrain.github.io/${locale}/contact`} className="text-sm font-medium transition-colors hover:text-primary">
              {t('common.contact')}
            </Link>
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href={`/ai-hypetrain.github.io/${locale}`} className="text-sm font-medium transition-colors hover:text-primary">
                  {t('common.home')}
                </Link>
                <Link href={`/ai-hypetrain.github.io/${locale}/blog`} className="text-sm font-medium transition-colors hover:text-primary">
                  {t('common.blog')}
                </Link>
                <Link href={`/ai-hypetrain.github.io/${locale}/about`} className="text-sm font-medium transition-colors hover:text-primary">
                  {t('common.about')}
                </Link>
                <Link href={`/ai-hypetrain.github.io/${locale}/contact`} className="text-sm font-medium transition-colors hover:text-primary">
                  {t('common.contact')}
                </Link>
                <div className="pt-4">
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

