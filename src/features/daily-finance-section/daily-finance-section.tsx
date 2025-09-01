'use client';

import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/button';
import { Tag } from '@/components/tag';

import { getSlides } from './content';
import { List } from './list';
import { Slider } from './slider';

interface DailyFinanceSectionProperties {
  pageType: 'personal' | 'business';
  className?: string;
}

export function DailyFinanceSection(properties: DailyFinanceSectionProperties) {
  const { pageType, className } = properties;

  const [selectedSlide, setSelectedSlide] = useState(0);

  const tDailyFinance = useTranslations('dailyFinanceSection');
  const tNavigation = useTranslations('navigation');

  const isPersonal = pageType === 'personal';
  const loginLink = isPersonal ? 'https://app.weopsy.com/login' : 'https://business.weopsy.com/login';

  const slides = useMemo(() => getSlides(pageType, tDailyFinance), [pageType, tDailyFinance]);

  const [emblaReference, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    ClassNames({ dragging: 'cursor-grabbing' }),
    Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <section className={twMerge('container mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-x-16', className)}>
      <div className="mb-6 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-medium mb-12">
          {tDailyFinance('title')}{' '}
          <Tag as="span" className="align-top">
            {tDailyFinance('features')}
          </Tag>
        </h2>
        <List className="mb-0 lg:mb-12" slides={slides} selectedSlide={selectedSlide} emblaApi={emblaApi} />
        <div className="flex flex-col gap-[16px]">
          {isPersonal && <Button as="a" variant='secondary-light' className="w-full max-w-[370px] hidden lg:flex" href="/app" target="_blank" size="lg">
            {tNavigation('getApp')}
          </Button>}
          <Button as="a" className="w-full max-w-[370px] hidden lg:flex" href={loginLink} target="_blank" size="lg">
            {tNavigation('login')}
          </Button>
        </div>
      </div>
      <Slider
        slides={slides}
        selectedSlide={selectedSlide}
        setSelectedSlide={setSelectedSlide}
        emblaReference={emblaReference}
        emblaApi={emblaApi}
      />
    </section>
  );
}
