import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { LocaleCode } from '@/i18n/constants';
import { createMetadata } from '@/utils/seo';

interface ArchivedDocumentPageProperties {
  params: Promise<{ locale: LocaleCode; id: string }>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function ArchivedDocumentPage({ params }: ArchivedDocumentPageProperties) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale, id } = await params;

  try {
    const mdxFile = await import(`./${id}.mdx`);
    const Content = mdxFile.default;
    return <Content />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata({ params }: ArchivedDocumentPageProperties): Promise<Metadata> {
  const { id } = await params;

  const t = await getTranslations({ locale: 'en', namespace: 'pages.archivedDocs' });

  return createMetadata({ 
    locale: 'en', 
    title: `${t('metadata.title')} - ${id}`, 
    canonical: `/archived-docs/${id}` 
  });
} 