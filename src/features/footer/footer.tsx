import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Logo } from '@/components/logo';
import { Link } from '@/i18n/navigation';

import { Navigation } from '../header/navigation';

interface FooterProperties {
  className?: string;
}

const getLinks = (
  translations: ReturnType<typeof useTranslations<'navigation'>>
): { href: string; label: string }[] => {
  return [
    {
      href: '/terms-and-conditions',
      label: translations('terms'),
    },
    {
      href: '/privacy-policy',
      label: translations('privacy'),
    },
    {
      href: '/cookies',
      label: translations('cookie'),
    },
    {
      href: '/fraud-prevention',
      label: translations('fraud'),
    },
    {
      href: '/complaints-policy',
      label: translations('complaints'),
    },
    {
      href: '/archived-docs',
      label: translations('archived'),
    },
  ];
};

export function Footer(properties: FooterProperties) {
  const { className } = properties;

  const tNavigation = useTranslations('navigation');
  const links = useMemo(() => getLinks(tNavigation), [tNavigation]);

  return (
    <footer className={twMerge('bg-black/2 dark:bg-white/5', className)}>
      <div className="container mx-auto">
        <div className="w-full py-8 border-b border-black/5 dark:border-white/5 flex flex-wrap items-start gap-y-8 md:flex-row flex-col md:items-center gap-x-10 lg:gap-x-24">
          <Link href="/">
            <Logo />
          </Link>
          <Navigation linkClassName="sm:px-8 lg:px-8 px-4 text-sm" className="-ml-4 sm:-ml-8 md:ml-0" />
        </div>
        <p className="w-full py-8 border-b border-black/5 dark:border-white/5 text-xs md:text-sm font-medium dark:text-white/40 text-black/40">
          {tNavigation('businessInfo')}
        </p>
        <div className="w-full py-4 border-b border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-y-3 gap-x-8">
          <p className="dark:text-white/40 text-black/40 text-sm font-medium">
            {tNavigation('copyright', { year: new Date().getFullYear() })}
          </p>
          <nav className="inline h-min text-sm">
            <ul className="inline-flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {links.map((item) => (
                <li key={item.href} className="inline h-min text-sm">
                  <Link href={item.href} className="text-sm font-medium dark:text-white/40 text-black/40 underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
