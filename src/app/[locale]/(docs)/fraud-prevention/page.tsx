import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { LocaleCode } from '@/i18n/constants';
import { createMetadata } from '@/utils/seo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function FraudPreventionPage({ params }: { params: Promise<{ locale: LocaleCode }> }) {
  // const { locale } = await params;

  try {
    const mdxFile = await import(`./en.mdx`);
    const Content = mdxFile.default;
    return <Content />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleCode }> }): Promise<Metadata> {
  // const { locale } = await params;

  const t = await getTranslations({ locale: 'en', namespace: 'pages.fraudPrevention' });

  return createMetadata({ locale: 'en', title: t('metadata.title'), canonical: '/privacy-policy' });
}
