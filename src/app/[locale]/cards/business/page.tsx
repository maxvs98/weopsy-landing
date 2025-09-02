'use client';

import { useTranslations } from 'next-intl';

import COVER_IMAGE from '@/assets/cards-business.webp';
import { CardsCover } from '@/features/cards-cover';
import { CardsFeaturesSection } from '@/features/cards-features-section';
import { Footer } from '@/features/footer';
import { Header } from '@/features/header';
import { HowItWorksSection } from '@/features/how-it-works-section';
import { MastercardSection } from '@/features/mastercard-section';

export default function CardsPage() {
  const tBusiness = useTranslations('pages.cardsBusiness');

  return (
    <body className="dark">
      <Header pageType="business" showLogin />
      <main className="my-8 lg:my-19">
        <CardsCover
          pageType="business"
          image={COVER_IMAGE}
          imageClassName=" ml-0 lg:ml-[20px] -mt-[20px] lg:-mt-[32px] xl:-mt-[52px]"
          title={
            <>
              <span className="bg-linear-to-r from-accent-80 to-accent text-transparent bg-clip-text">
                {tBusiness('title0')}
              </span>{' '}
              {tBusiness('title1')}
              <br />
              {tBusiness('title2')}
            </>
          }
        />

        <CardsFeaturesSection pageType="business" />

        <HowItWorksSection pageType="business" />

        <MastercardSection pageType="business" />
      </main>

      <Footer />
    </body>
  );
}
