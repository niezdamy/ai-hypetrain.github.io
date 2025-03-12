import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// Match these values with middleware.ts
const locales = ['en', 'pl'];
const defaultLocale = 'en';

export { locales, defaultLocale };

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix: 'as-needed' });
