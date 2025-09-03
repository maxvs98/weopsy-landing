'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
import { Link } from '@/i18n/navigation';

import { Navigation } from './navigation';

interface HeaderProperties {
  pageType?: 'personal' | 'business';
  className?: string;
  showLogin?: boolean;
  showGetApp?: boolean;
  sticky?: boolean;
}

export function Header(properties: HeaderProperties) {
  const { pageType, className, showLogin = false, showGetApp = false, sticky = false } = properties;

  const tNavigation = useTranslations('navigation');

  const isPersonal = pageType === 'personal';
  const loginLink = isPersonal ? 'https://app.weopsy.com/login' : 'https://business.weopsy.com/login';

  return (
    <header
      className={twMerge(
        'h-[76px] bg-black/2 border-b border-white/5',
        sticky && 'sticky top-0 z-50 backdrop-blur-lg',
        className
      )}
    >
      <div className="container mx-auto h-full grid grid-cols-2 lg:grid-cols-3 items-center">
        <Link className="w-max" href="/">
          <Logo />
        </Link>
        <Navigation className="lg:mx-auto" />
        <AnimatePresence initial={false}>
          <div className="items-center justify-end gap-[16px] hidden lg:flex">
            {showGetApp && (
              <Button
                as={motion.a}
                variant="secondary-dark"
                className="w-fit hidden lg:flex"
                href="/app"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tNavigation('getApp')}
              </Button>
            )}
            {showLogin && (
              <Button
                as={motion.a}
                variant="primary"
                className="w-fit hidden lg:flex"
                href={loginLink}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tNavigation('login')}
              </Button>
            )}
          </div>
        </AnimatePresence>
      </div>
    </header>
  );
}
