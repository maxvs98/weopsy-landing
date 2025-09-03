import { useTranslations } from 'next-intl';
import { JSX, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { BoltIcon, EyeClosedIcon, HandStopIcon, ShieldLockIcon } from './assets';

interface FeaturesSectionProperties {
  className?: string;
  pageType: 'personal' | 'business';
}

interface Card {
  title: string;
  description: string;
  icon: (properties: { color?: string; className?: string }) => JSX.Element;
}

function getCards(t: (key: string) => string): Card[] {
  return [
    { title: t('card1.title'), description: t('card1.description'), icon: BoltIcon },
    { title: t('card2.title'), description: t('card2.description'), icon: HandStopIcon },
    { title: t('card3.title'), description: t('card3.description'), icon: ShieldLockIcon },
    { title: t('card4.title'), description: t('card4.description'), icon: EyeClosedIcon },
  ];
}

export function CardsFeaturesSection(properties: FeaturesSectionProperties) {
  const { className, pageType } = properties;

  const tFeaturesSection = useTranslations(
    pageType === 'business'
      ? 'cardsFeaturesSection.business'
      : 'cardsFeaturesSection.personal'
  );

  const items = useMemo(
    () => getCards(tFeaturesSection as unknown as (key: string) => string),
    [tFeaturesSection]
  );

  return (
    <section className={twMerge('container mx-auto pt-16 pb-19', className)}>
      <div className="text-3xl lg:text-4xl font-medium">{tFeaturesSection('title')}</div>
      <div className="text-sm font-medium mt-4">{tFeaturesSection('subtitle')}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-16">
        {items.map((item) => (
          <div key={item.title}>
            <div className="bg-[#1313150D] dark:bg-[#FFFFFF0D] w-12 h-12 rounded-[12px] flex items-center justify-center">
              <item.icon
                className="w-6 h-6"
                color="currentColor"
              />
            </div>
            <div className="mt-5 text-base font-medium">{item.title}</div>
            <div className="mt-2 text-sm text-[#13131599] dark:text-[#FFFFFF99]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
