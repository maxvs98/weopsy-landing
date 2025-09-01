import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Tag } from '@/components/tag';

import CARD_0_IMAGE from './assets/card-0.png';
import CARD_1_IMAGE from './assets/card-1.png';

interface FeaturesSectionProperties {
  className?: string;
}

interface Card {
  title: string;
  subtitle: string;
  image: {
    data: StaticImageData;
    width: number;
    className: string;
  };
}

function getCards(translations: ReturnType<typeof useTranslations<'featuresSection'>>): Card[] {
  return [
    {
      title: translations('support.title'),
      subtitle: translations('support.description'),
      image: {
        data: CARD_0_IMAGE,
        width: 900,
        className: 'object-contain px-4',
      },
    },
    {
      title: translations('globalTransfer.title'),
      subtitle: translations('globalTransfer.description'),
      image: {
        data: CARD_1_IMAGE,
        width: 900,
        className: 'object-cover h-[360px] sm:h-full',
      },
    },
  ];
}

export function FeaturesSection(properties: FeaturesSectionProperties) {
  const { className } = properties;

  const tFeaturesSection = useTranslations('featuresSection');

  const cards = useMemo(() => getCards(tFeaturesSection), [tFeaturesSection]);

  return (
    <section className={twMerge('container mx-auto', className)}>
      <Tag className="mb-4 w-fit lg:hidden">Features</Tag>
      <h2 className="lg:text-4xl text-3xl font-medium lg:text-center mb-12">
        {tFeaturesSection('title0')}{' '}
        <span className="text-nowrap">
          {tFeaturesSection('title1')}{' '}
          <Tag as="span" className="align-text-top hidden lg:inline">
            {tFeaturesSection('features')}
          </Tag>
        </span>
      </h2>
      {/* <p className="lg:text-center text-black/40 dark:text-white/40 mb-12">{tFeaturesSection('description')}</p> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div key={card.title} className="bg-black/5 dark:bg-white/5 rounded-lg pt-5 lg:pt-9 flex flex-col">
            <h3 className="mb-3 lg:mb-5 text-white font-medium text-xl px-5 lg:px-9">{card.title}</h3>
            <p className="mb-8 lg:mb-16 text-white/40 font-medium px-5 lg:px-9">{card.subtitle}</p>
            <div className="mt-auto w-full sm:h-[605px] overflow-hidden">
              <Image
                alt=""
                src={card.image.data}
                width={card.image.width}
                className={twMerge('select-none w-full h-full object-bottom', card.image.className)}
                placeholder="blur"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
