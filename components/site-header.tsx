import { Link } from "@/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "next-intl"

export function SiteHeader() {
  const t = useTranslations('navigation')
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">AI Hypetrain</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t('home')}
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              {t('blog')}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              {t('about')}
            </Link>
            <Link href="/costs" className="text-sm font-medium transition-colors hover:text-primary">
              {t('costs')}
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
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  {t('home')}
                </Link>
                <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                  {t('blog')}
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  {t('about')}
                </Link>
                <Link href="/costs" className="text-sm font-medium transition-colors hover:text-primary">
                  {t('costs')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

