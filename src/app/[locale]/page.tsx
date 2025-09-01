'use client';

import { useTranslations } from 'next-intl';

import COVER_IMAGE from '@/assets/mockup-personal.webp';
import { DailyFinanceSection } from '@/features/daily-finance-section';
import { Footer } from '@/features/footer';
import { Header } from '@/features/header';
import { PageCover } from '@/features/page-cover';
import { PricesSection } from '@/features/prices-section';

export default function PersonalPage() {
  const tPersonal = useTranslations('pages.personal');

  return (
    <body>
      <Header pageType="personal" showLogin showGetApp />

      <main className="my-8 lg:my-19">
        <PageCover
          image={COVER_IMAGE}
          pageType="personal"
          imageClassName="h-[400px] sm:-mt-[24px] lg:h-[600px] lg:-mt-[40px] mb-[30px] lg:mb-[55px]"
          title={
            <>
              <span className="bg-linear-to-r from-accent-80 to-accent text-transparent bg-clip-text">
                {tPersonal('title0')}
              </span>{' '}
              {tPersonal('title1')}
              <br />
              {tPersonal('title2')}
            </>
          }
        />

        <DailyFinanceSection pageType="personal" className="mb-16" />

        <PricesSection />
      </main>

      <Footer />
    </body>
  );
}
