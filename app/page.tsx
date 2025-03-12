import { redirect } from 'next/navigation'
import { defaultLocale } from '@/navigation'

export default function Home() {
  // Redirect from the root page to the default locale
  redirect(`/${defaultLocale}`);
}

