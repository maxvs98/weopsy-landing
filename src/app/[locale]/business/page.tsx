'use client';

import { useTranslations } from 'next-intl';

import COVER_IMAGE from '@/assets/mockup-business.webp';
import { DailyFinanceSection } from '@/features/daily-finance-section';
import { FeaturesSection } from '@/features/features-section';
import { Footer } from '@/features/footer';
import { Header } from '@/features/header';
import { PageCover } from '@/features/page-cover';
import { PricesSection } from '@/features/prices-section';

export default function BusinessPage() {
  const tBusiness = useTranslations('pages.business');

  return (
    <body className="dark">
      <Header pageType="business" showLogin />
      <main className="my-8 lg:my-19">
        <PageCover
          pageType="business"
          image={COVER_IMAGE}
          imageClassName="h-[500px] -mt-[70px] sm:-mt-[94px] lg:h-[760px] lg:-mt-[145px]"
          title={
            <>
              {tBusiness('title0')}{' '}
              <span className="bg-linear-to-r from-accent-80 to-accent text-transparent bg-clip-text text-shadow-accent text-shadow-xl">
                {tBusiness('title1')}
              </span>{' '}
              {tBusiness('title2')}
              <br />
              {tBusiness('title3')}
            </>
          }
        />

        <DailyFinanceSection pageType="business" className="mb-16" />

        <FeaturesSection className="mb-16" />

        <PricesSection />
      </main>

      <Footer />
    </body>
  );
}
