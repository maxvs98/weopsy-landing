import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import SEO_THUMBNAIL from '@/assets/seo-thumbnail.webp';
import { DEFAULT_LOCALE_CODE, LocaleCode } from '@/i18n/constants';

export function getCanonicalUrl(url: string, locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE_CODE) return url;
  return `${url}${locale}`;
}

interface CreateMetadataOptions {
  locale: LocaleCode;
  canonical?: string;
  title?: string;
}

const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN ?? 'https://localhost:3000';

export async function createMetadata(options: CreateMetadataOptions): Promise<Metadata> {
  const { locale, title, canonical = '/' } = options;

  const t = await getTranslations({ locale: locale, namespace: 'metadata' });

  const finalTitle = title ? `${t('title')} - ${title}` : t('defaultTitle');

  const defaultMetadata: Metadata = {
    metadataBase: new URL(ORIGIN),
    title: finalTitle,
    description: t('description'),
    keywords: t('keywords'),
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: t('description'),
      images: SEO_THUMBNAIL.src,
    },
    openGraph: {
      title: finalTitle,
      description: t('description'),
      images: SEO_THUMBNAIL.src,
    },
    alternates: {
      canonical: getCanonicalUrl(canonical, locale),
    },
  };

  return defaultMetadata;
}
