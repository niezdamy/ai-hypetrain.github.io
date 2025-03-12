import { redirect } from 'next/navigation';

export const metadata = {
  title: "About | AI Hypetrain",
  description: "Learn about the person behind AI Hypetrain and my journey with AI tools and technologies",
};

export default function AboutPage() {
  // Redirect to the localized version using the default locale from next-intl.config.js
  redirect('/en/about');
}
