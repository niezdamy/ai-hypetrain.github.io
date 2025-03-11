"use client"

import { useParams, usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useTranslation } from '@/hooks/use-translation'
import { Locale } from '@/lib/translations'

export function LanguageSwitcher() {
  const { locale } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  
  // Available locales
  const locales: Locale[] = ['en', 'pl']
  
  // Get the path without the locale
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/')
    // Remove the first segment (locale)
    segments.splice(1, 1)
    return segments.join('/')
  }
  
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return
    
    // Construct new path with the new locale
    const newPath = `/${newLocale}${getPathWithoutLocale()}`
    router.push(newPath)
  }
  
  return (
    <div className="flex items-center space-x-1">
      {locales.map((loc) => (
        <Button 
          key={loc}
          variant={loc === locale ? "default" : "outline"} 
          size="sm" 
          onClick={() => switchLocale(loc)}
          className="text-xs px-2 py-1 h-8"
        >
          {loc.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}
