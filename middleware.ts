import createMiddleware from 'next-intl/middleware';

// Specify the locales directly in the middleware
const locales = ['en', 'pl'];
const defaultLocale = 'en';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to use when visiting a non-localized route
  defaultLocale,
  // Use 'as-needed' for locale prefixing
  localePrefix: 'as-needed'
});

export const config = {
  // Match all paths, including the root path
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};
