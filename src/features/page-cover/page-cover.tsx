'use client';

import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/button';

interface PageCoverProperties {
  title: ReactNode;
  image: StaticImageData;
  pageType: 'personal' | 'business';
  className?: string;
  imageClassName?: string;
}

export function PageCover(properties: PageCoverProperties) {
  const { title, image, pageType, className, imageClassName } = properties;

  const tNavigation = useTranslations('navigation');

  const isPersonal = pageType === 'personal';
  const loginLink = isPersonal ? 'https://app.weopsy.com/login' : 'https://business.weopsy.com/login';

  return (
    <section className={className}>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium text-center container mx-auto overflow-visible">
        {title}
      </h1>
      <div className={twMerge('relative overflow-hidden mx-auto flex justify-center select-none', imageClassName)}>
        <Image src={image} alt="" width={1500} className="absolute h-full w-auto object-top object-cover" priority />
      </div>
      <div className="container flex flex-col gap-[16px] lg:hidden mb-16">
        {isPersonal && <Button as="a" variant='secondary-light' className="mx-auto max-w-[300px] w-full" href="/app" target="_blank">
          {tNavigation('getApp')}
        </Button>}
        <Button as="a" className="mx-auto max-w-[300px] w-full" href={loginLink} target="_blank">
          {tNavigation('login')}
        </Button>
      </div>
    </section>
  );
}
