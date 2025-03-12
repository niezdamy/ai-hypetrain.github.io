import { redirect } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from '../i18n';

export const metadata = {
  title: "Blog | AI Hypetrain",
  description: "Explore all AI experiments and projects",
};

export default async function BlogPage() {
  // Redirect to the localized version using the default locale from next-intl.config.js
  redirect('/en/blog');
}

