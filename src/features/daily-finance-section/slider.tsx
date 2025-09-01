'use client';

import { EmblaCarouselType } from 'embla-carousel';
import { EmblaViewportRefType } from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Slide as SlideType } from './content';

interface SlideProperties {
  slide: SlideType;
}

function Slide(properties: SlideProperties) {
  const { slide } = properties;

  return (
    <div className="w-[352px] h-[352px] min-w-[50%] bg-black/3 dark:bg-white/2 rounded-3xl flex items-center justify-center shrink-0 mr-5 group relative">
      <Image src={slide.image} alt="" width={500} className="object-cover object-top w-full h-full absolute inset-0" />
    </div>
  );
}

interface SliderProperties {
  className?: string;
  slides: SlideType[];
  selectedSlide: number;
  setSelectedSlide: (index: number) => void;
  emblaReference: EmblaViewportRefType;
  emblaApi?: EmblaCarouselType;
}

export function Slider(properties: SliderProperties) {
  const { slides, selectedSlide, setSelectedSlide, emblaReference, emblaApi } = properties;

  const handleSlideScrolled = useCallback(
    (api: EmblaCarouselType) => {
      setSelectedSlide(api.selectedScrollSnap());
    },
    [setSelectedSlide]
  );

  const handleScrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      emblaApi.plugins().autoplay.reset();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('reInit', handleSlideScrolled).on('select', handleSlideScrolled);

    return () => {
      emblaApi.off('reInit', handleSlideScrolled).off('select', handleSlideScrolled);
    };
  }, [emblaApi, handleSlideScrolled]);

  return (
    <div
      ref={emblaReference}
      className="overflow-hidden bg-black/2 dark:bg-white/5 rounded-3xl h-[448px] select-none flex flex-col"
    >
      <div className="flex flex-nowrap pt-6">
        {slides.map((slide) => (
          <Slide key={slide.image.src} slide={slide} />
        ))}
      </div>
      <div className="flex items-center justify-center grow">
        <div className="dark:bg-white/5 bg-black/5 py-2 px-3 rounded-full flex flex-nowrap gap-2">
          {slides.map((slide, imageIndex) => (
            <button
              key={slide.image.src}
              onClick={() => handleScrollTo(imageIndex)}
              className={twMerge(
                'outline-none cursor-pointer w-2 h-2 rounded-full dark:bg-white/5 bg-black/5 transition-all ease-linear duration-200',
                selectedSlide === imageIndex && 'dark:bg-white bg-black/20 w-4'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
