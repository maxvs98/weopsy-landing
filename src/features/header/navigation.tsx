'use client';

import { useTranslations } from 'next-intl';

function getLinks(translations: ReturnType<typeof useTranslations<'navigation'>>): { href: string; label: string }[] {
  return [
    {
      href: '/',
      label: translations('personal'),
    },
    {
      href: '/business',
      label: translations('business'),
    },
  ];
}

import { PropsWithChildren, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Link, usePathname } from '@/i18n/navigation';

interface NavLinkProperties extends PropsWithChildren {
  href: string;
  className?: string;
}

function NavLink(properties: NavLinkProperties) {
  const { href, children, className } = properties;

  const pathname = usePathname();
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={twMerge(
        'transition-colors px-4 sm:px-8 lg:px-12 h-full flex items-center justify-center text-xs font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white',
        active && 'text-black dark:text-white',
        className
      )}
    >
      {children}
    </Link>
  );
}

interface NavigationProperties {
  className?: string;
  linkClassName?: string;
}

export function Navigation(properties: NavigationProperties) {
  const { className, linkClassName } = properties;

  const tNavigation = useTranslations('navigation');

  const link = useMemo(() => getLinks(tNavigation), [tNavigation]);

  return (
    <nav className={twMerge('h-full', className)}>
      <ul className="h-full flex justify-end items-center">
        {link.map(({ href, label }) => (
          <li key={href} className="h-full">
            <NavLink href={href} className={linkClassName}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
