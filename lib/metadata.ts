interface SeoConfig {
  siteName: string;
  description: {
    en: string;
    pl: string;
  };
  url: string;
  twitterHandle: string;
  defaultLocale: string;
  locales: string[];
}

export const seoConfig: SeoConfig = {
  siteName: 'AI Hypetrain',
  description: {
    en: 'A personal blog documenting experiences with AI tools, including time spent, costs, and income generated.',
    pl: 'Blog dokumentujący doświadczenia z narzędziami AI, w tym poświęcony czas, koszty i wygenerowane przychody.',
  },
  url: 'https://ai-hypetrain.github.io',
  twitterHandle: '@yourhandle', // Update with your actual Twitter handle if applicable
  defaultLocale: 'en',
  locales: ['en', 'pl'],
};

// Functions to generate SEO metadata
export function generateMetadata(locale: string, 
                               pageName: string, 
                               customDescription?: string, 
                               customImage?: string) {
  const description = customDescription || seoConfig.description[locale as keyof typeof seoConfig.description];
  const title = `${pageName} | ${seoConfig.siteName}`;
  const url = `${seoConfig.url}/${locale}`;
  const ogImage = customImage || `${seoConfig.url}/images/og-image.png`;

  return {
    metadataBase: new URL(seoConfig.url),
    title,
    description,
    openGraph: {
      type: 'website',
      locale,
      url,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seoConfig.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${seoConfig.url}/en`,
        pl: `${seoConfig.url}/pl`,
      },
    },
  };
}

// Function to generate blog post specific metadata
export function generateBlogMetadata(locale: string, 
                                   title: string, 
                                   description: string, 
                                   slug: string,
                                   publishDate: string,
                                   imageUrl?: string) {
  const pageUrl = `${seoConfig.url}/${locale}/blog/${slug}`;
  const ogImage = imageUrl || `${seoConfig.url}/images/og-image.png`;
  
  return {
    metadataBase: new URL(seoConfig.url),
    title: `${title} | ${seoConfig.siteName}`,
    description,
    openGraph: {
      type: 'article',
      locale,
      url: pageUrl,
      title,
      description,
      siteName: seoConfig.siteName,
      publishedTime: publishDate,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${seoConfig.url}/en/blog/${slug}`,
        pl: `${seoConfig.url}/pl/blog/${slug}`,
      },
    },
  };
}
