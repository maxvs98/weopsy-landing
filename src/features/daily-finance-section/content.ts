import {
  IconCreditCard,
  IconCreditCardPay,
  IconFingerprintScan,
  IconQrcode,
  IconWallet,
  TablerIcon,
} from '@tabler/icons-react';
import { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, SVGProps } from 'react';

import { TagProperties } from '@/components/tag';

import BUSINESS_0 from './assets/business/0.webp';
import BUSINESS_1 from './assets/business/1.webp';
import BUSINESS_2 from './assets/business/2.webp';
import EuropeIcon from './assets/europe-icon.svg';
import PERSONAL_0 from './assets/personal/0.webp';
import PERSONAL_1 from './assets/personal/1.webp';
import PERSONAL_2 from './assets/personal/2.webp';

export interface Slide {
  title: string;
  image: StaticImageData;
  icon: TablerIcon | FC<SVGProps<SVGElement>>;
  iconClassName?: string;
  tag: {
    text: string;
    variant?: TagProperties['variant'];
  };
}

export function getSlides(
  pageType: 'personal' | 'business',
  translations: ReturnType<typeof useTranslations<'dailyFinanceSection'>>
): Slide[] {
  if (pageType === 'personal') {
    return [
      {
        title: translations('personal.everydayWalletMadeSimple'),
        icon: IconWallet,
        tag: { text: translations('tags.wallet') },
        image: PERSONAL_2,
      },
      {
        title: translations('personal.sendMoneyToFriendsInstantly'),
        icon: IconCreditCardPay,
        tag: { text: translations('tags.wallet') },
        image: PERSONAL_0,
      },
      {
        title: translations('personal.qrPayment'),
        icon: IconQrcode,
        tag: { text: translations('tags.wallet') },
        image: PERSONAL_1,
      },
    ];
  }

  return [
    {
      title: translations('business.biomentrics'),
      icon: IconFingerprintScan,
      tag: { text: translations('tags.security') },
      image: BUSINESS_0,
    },
    {
      title: translations('business.availableAcrossEuMarket'),
      icon: EuropeIcon,
      iconClassName: 'w-8 h-8',
      tag: { text: translations('tags.wallet') },
      image: BUSINESS_1,
    },
    {
      title: translations('business.issueTeamCards'),
      icon: IconCreditCard,
      tag: { text: translations('tags.comingSoon'), variant: 'primary' },
      image: BUSINESS_2,
    },
  ];
}
