"use client";

import { useParams } from 'next/navigation';
import { getTranslation, Locale } from '@/lib/translations';
import { useState, useEffect } from 'react';

export function useTranslation() {
  const params = useParams();
  // Default to 'en' for initial render to avoid hydration mismatch
  const [locale, setLocale] = useState<Locale>('en');
  
  // Set the actual locale from params after initial render
  useEffect(() => {
    setLocale((params?.locale as Locale) || 'en');
  }, [params?.locale]);

  function t(key: string): string {
    return getTranslation(locale, key);
  }

  return {
    t,
    locale
  };
}
