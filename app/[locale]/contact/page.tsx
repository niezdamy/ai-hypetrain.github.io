import React from 'react'
import { getTranslations } from 'next-intl/server'

import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }];
}

export default async function ContactPage({
  params: { locale }
}: {
  params: { locale: 'en' | 'pl' }
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations()

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">{t('contact.title')}</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">{t('contact.description')}</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">{t('contact.nameLabel')}</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{t('contact.emailLabel')}</label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">{t('contact.subjectLabel')}</label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
              placeholder={t('contact.subjectPlaceholder')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">{t('contact.messageLabel')}</label>
            <textarea
              id="message"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950"
              placeholder={t('contact.messagePlaceholder')}
              rows={6}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {t('contact.submitButton')}
          </button>
        </form>
      </div>
    </div>
  )
}
