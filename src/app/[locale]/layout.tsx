import '../globals.css';

import { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { LocaleCode } from '@/i18n/constants';
import { createMetadata } from '@/utils/seo';

import { routing } from '../../i18n/routing';

const interSans = Inter_Tight({ subsets: ['latin'], variable: '--font-inter' });

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: LocaleCode }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={interSans.variable}>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleCode }> }): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({ locale });
}
