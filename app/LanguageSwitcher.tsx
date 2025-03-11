'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  // Extract locale segment: /ai-hypetrain.github.io/{locale}/...
  const currentLocale = pathSegments[2] || 'en';
  const locales = ['en', 'pl'];
  const basePath = '/ai-hypetrain.github.io';

  const getLocalePath = (lng: string) => {
    const rest = pathSegments.slice(3).join('/');
    return `${basePath}/${lng}${rest ? '/' + rest : ''}`;
  };

  return (
    <div className="flex items-center space-x-3">
      {locales.map((lng) => (
        <Link
          key={lng}
          href={getLocalePath(lng)}
          className={`px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${currentLocale === lng ? 'font-bold bg-gray-300 dark:bg-gray-800' : 'font-normal'}`}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
