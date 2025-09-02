import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { MastercardLogo } from './assets/mastercard-logo';

interface MastercardSectionProperties {
  className?: string;
  pageType: 'personal' | 'business';
}

export function MastercardSection(properties: MastercardSectionProperties) {
  const { className, pageType } = properties;

  const tMastercardSection = useTranslations(
      pageType === 'business'
        ? 'mastercardSection.business'
        : 'mastercardSection.personal'
    );

  return (
    <section className={twMerge('container mx-auto pt-8 lg:pt-19 flex justify-center flex-col items-center', className)}>
      <MastercardLogo className="w-16 md:w-32 h-auto" textColor={pageType === "personal" ? "#231F20" : "#FFFFFF"} />
      <div className={`mt-8 text-xl md:text-4xl text-center ${pageType === 'business' ? 'max-w-[1100px]' : 'max-w-[760px]'}`}>
        {tMastercardSection('title')}
      </div>
    </section>
  );
}
