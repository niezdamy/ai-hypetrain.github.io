'use client';

interface BlogSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  images: string[];
  url: string;
  siteName: string;
}

export function BlogPostSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  images,
  url,
  siteName,
}: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: images,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${url}/images/og-image.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
