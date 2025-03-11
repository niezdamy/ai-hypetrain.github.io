"use client"

import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useTranslation } from '@/hooks/use-translation'
import { Locale } from '@/lib/translations'

export function LanguageSwitcher() {
  const { locale } = useTranslation()
  const pathname = usePathname()
  
  // Available locales
  const locales: Locale[] = ['en', 'pl']
  
  // Get the path without the locale, but keeping the basePath
  const getPathWithoutLocale = () => {
    // The basePath is defined in next.config.mjs
    const basePath = '/ai-hypetrain.github.io'
    const segments = pathname.split('/')
    
    // Handle case when pathname is just the basePath + locale
    if (segments.length <= 3) {
      return ''
    }

    // Remove the locale segment (which is at position 2 after the basePath)
    segments.splice(2, 1)
    return segments.join('/')
  }
  
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return
    
    // The basePath is defined in next.config.mjs
    const basePath = '/ai-hypetrain.github.io'
    
    // Construct new path with the basePath and new locale
    const pathWithoutLocale = getPathWithoutLocale()
    const newPath = pathWithoutLocale ? `${basePath}/${newLocale}${pathWithoutLocale}` : `${basePath}/${newLocale}`
    
    // Use direct location change instead of router to ensure it works with static exports
    if (typeof window !== 'undefined') {
      window.location.href = newPath
    }
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
