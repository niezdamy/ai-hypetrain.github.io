"use client";

import { useParams } from 'next/navigation';
import { getTranslation, Locale } from '@/lib/translations';

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';

  function t(key: string): string {
    return getTranslation(locale, key);
  }

  return {
    t,
    locale
  };
}
