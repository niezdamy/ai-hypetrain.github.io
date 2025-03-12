import React from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function KontaktPage({ params: { locale } }: { params: { locale: string } }) {
  // Set the locale for this request - enables static rendering
  setRequestLocale(locale)
  
  const t = await getTranslations('contact')

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">{t('description')}</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">{t('nameLabel')}</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
                placeholder={t('namePlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{t('emailLabel')}</label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
                placeholder={t('emailPlaceholder')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">{t('subjectLabel')}</label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
              placeholder={t('subjectPlaceholder')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">{t('messageLabel')}</label>
            <textarea
              id="message"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
              placeholder={t('messagePlaceholder')}
              rows={6}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {t('submitButton')}
          </button>
        </form>
      </div>
    </div>
  )
}
