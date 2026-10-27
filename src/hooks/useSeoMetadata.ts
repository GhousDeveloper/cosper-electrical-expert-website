import { useEffect } from 'react';

export interface SeoMetadataOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  author?: string;
  keywords?: string[];
  jsonLd?: Record<string, unknown>;
}

export function useSeoMetadata(options: SeoMetadataOptions) {
  useEffect(() => {
    // 1. Update Title
    document.title = options.title;

    // Helper to safely get or create meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', options.description);

    if (options.keywords && options.keywords.length > 0) {
      setMetaTag('name', 'keywords', options.keywords.join(', '));
    }

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', options.title);
    setMetaTag('property', 'og:description', options.description);
    setMetaTag('property', 'og:type', options.ogType || 'website');
    setMetaTag('property', 'og:site_name', 'Cospert Electrical Services');

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const currentUrl = options.canonicalPath
      ? `${origin}${options.canonicalPath}`
      : typeof window !== 'undefined'
      ? window.location.href
      : '';

    setMetaTag('property', 'og:url', currentUrl);

    if (options.image) {
      const fullImageUrl = options.image.startsWith('http')
        ? options.image
        : `${origin}${options.image}`;
      setMetaTag('property', 'og:image', fullImageUrl);
      setMetaTag('name', 'twitter:image', fullImageUrl);
    }

    if (options.publishedTime) {
      setMetaTag('property', 'article:published_time', options.publishedTime);
    }
    if (options.author) {
      setMetaTag('property', 'article:author', options.author);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', options.title);
    setMetaTag('name', 'twitter:description', options.description);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. Schema.org JSON-LD Structured Data
    if (options.jsonLd) {
      let scriptTag = document.getElementById('schema-structured-data') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'schema-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(options.jsonLd, null, 2);
    }

    return () => {
      // Optional cleanup on unmount
    };
  }, [
    options.title,
    options.description,
    options.canonicalPath,
    options.ogType,
    options.image,
    options.publishedTime,
    options.author,
    options.keywords,
    options.jsonLd,
  ]);
}
