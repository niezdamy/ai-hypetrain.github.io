import { Link } from "@/navigation"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"

export function SiteFooter() {
  const t = useTranslations();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              AI Hypetrain
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">{t('footer.socialLinks.twitter')}</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">{t('footer.socialLinks.github')}</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">{t('footer.socialLinks.linkedin')}</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">{t('footer.navigation')}</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  {t('navigation.blog')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="/costs" className="text-sm text-muted-foreground hover:text-foreground">
                  {t('navigation.costs')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">{t('footer.subscribe')}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t('footer.subscribeText')}</p>
            <div className="mt-3 flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm cursor-not-allowed opacity-70"
                disabled
              />
              <button
                type="button"
                className="rounded-md bg-primary/60 px-3 py-2 text-sm font-medium text-primary-foreground cursor-not-allowed"
                disabled
                title={t('footer.staticSiteMessage') || 'Coming soon'}
              >
                {t('footer.subscribeButton')}
              </button>
              <p className="text-xs text-muted-foreground italic">
                {t('footer.staticSiteMessage') || 'Subscriptions are disabled in this static site version.'}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Hypetrain. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

