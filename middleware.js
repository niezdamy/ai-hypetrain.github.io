import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Define public file regex
const PUBLIC_FILE = /\.(.*)$/;

// Supported locales
const locales = ['en', 'pl'];

export function middleware(request) {
  // Skip public files and Next.js internals
  if (PUBLIC_FILE.test(request.nextUrl.pathname) || request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // Use Negotiator to get languages from headers
  const negotiator = new Negotiator({ headers: Object.fromEntries(request.headers) });
  const languages = negotiator.languages();
  const locale = matchLocale(languages, locales, 'en');

  // Update the request URL locale
  request.nextUrl.locale = locale;
  return NextResponse.next();
}

export const config = {
  matcher: [ '/((?!api|_next/static|_next/image|favicon.ico).*)', '/ai-hypetrain.github.io/((?!api|_next/static|_next/image|favicon.ico).*)' ]
};
