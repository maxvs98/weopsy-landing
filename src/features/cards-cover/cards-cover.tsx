'use client';

import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardsCoverProperties {
  title: ReactNode;
  image: StaticImageData;
  pageType: 'personal' | 'business';
  className?: string;
  imageClassName?: string;
}

export function CardsCover(properties: CardsCoverProperties) {
  const { title, image, className, imageClassName } = properties;

  return (
    <section className={className}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center container mx-auto overflow-visible">
        {title}
      </h1>

      <div className={twMerge('relative overflow-hidden mx-auto flex justify-center select-none', imageClassName)}>
        <Image
          src={image}
          alt=""
          width={404}
          height={450}
          className="
            w-[192px] h-[213px]
            sm:w-[240px] sm:h-[267px]
            md:w-[320px] md:h-[356px]
            lg:w-[364px] lg:h-[405px]
            xl:w-[404px] xl:h-[450px]
            object-top object-cover
          "
          priority
        />
      </div>
    </section>
  );
}
