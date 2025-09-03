'use client';

import { useTranslations } from 'next-intl';
import { PropsWithChildren, useEffect,useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Link, usePathname } from '@/i18n/navigation';

interface NavLinkProperties extends PropsWithChildren {
  href?: string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

function NavLink({ href, children, className, active, disabled }: NavLinkProperties) {
  if (disabled) {
    return (
      <span
        className={twMerge(
          'px-4 sm:px-8 lg:px-12 h-full flex items-center justify-center text-xs font-medium text-black/40 dark:text-white/40',
          active && 'text-black dark:text-white',
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href!}
      className={twMerge(
        'transition-colors px-3 sm:px-8 lg:px-12 h-full flex items-center justify-center text-xs font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white',
        active && 'text-black dark:text-white',
        className
      )}
    >
      {children}
    </Link>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = globalThis.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

interface NavigationProperties {
  className?: string;
  linkClassName?: string;
}

export function Navigation({ className, linkClassName }: NavigationProperties) {
  const pathname = usePathname();
  const tNavigation = useTranslations('navigation');

  const isXs = useMediaQuery('(max-width: 480px)');
  const isCardsRoot = pathname === '/cards';
  const isCardsBusiness = pathname === '/cards/business';
  const isCardsPage = isCardsRoot || isCardsBusiness;

  const links = useMemo(() => {
    let thirdLabel: string;

    if (isXs) {
      thirdLabel = tNavigation('cards');
    } else if (isCardsRoot) {
      thirdLabel = tNavigation('cardsPersonal');
    } else if (isCardsBusiness) {
      thirdLabel = tNavigation('cardsBusiness');
    } else {
      thirdLabel = tNavigation('cards');
    }

    return [
      {
        href: isCardsPage ? '/cards' : '/',
        label: tNavigation('personal'),
        active: (isCardsRoot && true) || (!isCardsPage && pathname === '/'),
      },
      {
        href: isCardsPage ? '/cards/business' : '/business',
        label: tNavigation('business'),
        active: (isCardsBusiness && true) || (!isCardsPage && pathname.startsWith('/business')),
      },
      {
        href: isCardsPage ? undefined : '/cards',
        label: thirdLabel,
        active: isCardsPage,
        disabled: isCardsPage,
      },
    ];
  }, [pathname, tNavigation, isCardsPage, isCardsRoot, isCardsBusiness, isXs]);

  return (
    <nav className={twMerge('h-full', className)}>
      <ul className="h-full flex justify-end items-center px-3 sm:px-0">
        {links.map(({ href, label, active, disabled }) => (
          <li key={label} className="h-full shrink-0">
            <NavLink href={href} className={linkClassName} active={active} disabled={disabled}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
