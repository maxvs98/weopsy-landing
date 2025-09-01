import { EmblaCarouselType } from 'embla-carousel';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { Tag } from '@/components/tag';

import { Slide } from './content';

interface LisProperties {
  slides: Slide[];
  selectedSlide: number;
  emblaApi: EmblaCarouselType | undefined;
  className?: string;
}

export function List(properties: LisProperties) {
  const { slides, selectedSlide, emblaApi, className } = properties;

  const handleScrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      emblaApi.plugins().autoplay.reset();
    },
    [emblaApi]
  );

  return (
    <ul className={twMerge('flex flex-col gap-6', className)}>
      {slides.map((slide, slideIndex) => {
        const Icon = slide.icon;
        const active = slideIndex === selectedSlide;

        return (
          <li key={slide.title}>
            <button
              className="cursor-pointer flex gap-5 outline-none w-full"
              onClick={() => handleScrollTo(slideIndex)}
            >
              <div
                className={twMerge(
                  'flex-center w-12 h-12 rounded-sm transition-colors dark:bg-white/12 bg-black/5',
                  active && 'dark:bg-white dark:text-black bg-black text-white'
                )}
              >
                <Icon className={twMerge('w-6 h-6', slide.iconClassName)} />
              </div>
              <div>
                <h3
                  className={twMerge(
                    'mb-3 transition-colors text-left dark:text-white/60 text-black/60',
                    active && 'dark:text-white text-black'
                  )}
                >
                  {slide.title}
                </h3>
                <Tag as="p" className="w-fit" variant={slide.tag.variant ?? 'secondary'}>
                  {slide.tag.text}
                </Tag>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
