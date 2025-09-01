'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

interface Card {
  monthPrice: string;
  title: string;
  subtitle: string;
  description: string;
  list: {
    key: string;
    value: string;
  }[];
}

function getCards(translations: ReturnType<typeof useTranslations<'pricesSection'>>): Card[] {
  return [
    {
      monthPrice: translations('personal.monthPrice'),
      title: translations('personal.title'),
      subtitle: translations('personal.subtitle'),
      description: translations('personal.description'),
      list: [
        {
          key: translations('internalPayments'),
          value: translations('personal.internalPaymentsPrice'),
        },
        {
          key: translations('inwardSepaPayment'),
          value: translations('personal.inwardSepaPaymentPrice'),
        },
        {
          key: translations('outwardSepaPayment'),
          value: translations('personal.outwardSepaPaymentPrice'),
        },
        {
          key: translations('inwardGbpFasterPayments'),
          value: translations('personal.inwardGbpFasterPaymentsPrice'),
        },
        {
          key: translations('outwardGbpFasterPayments'),
          value: translations('personal.outwardGbpFasterPaymentsPrice'),
        },
        {
          key: translations('maintenanceFee'),
          value: translations('personal.maintenanceFeePrice'),
        },
      ],
    },
    {
      monthPrice: translations('business.monthPrice'),
      title: translations('business.title'),
      subtitle: translations('business.subtitle'),
      description: translations('business.description'),
      list: [
        {
          key: translations('internalPayments'),
          value: translations('business.internalPaymentsPrice'),
        },
        {
          key: translations('inwardSepaPayment'),
          value: translations('business.inwardSepaPaymentPrice'),
        },
        {
          key: translations('outwardSepaPayment'),
          value: translations('business.outwardSepaPaymentPrice'),
        },
        {
          key: translations('inwardGbpFasterPayments'),
          value: translations('business.inwardGbpFasterPaymentsPrice'),
        },
        {
          key: translations('outwardGbpFasterPayments'),
          value: translations('business.outwardGbpFasterPaymentsPrice'),
        },
        {
          key: translations('maintenanceFee'),
          value: translations('business.maintenanceFeePrice'),
        },
      ],
    },
  ];
}

export function PricesSection() {
  const tPrices = useTranslations('pricesSection');

  const cards = useMemo(() => getCards(tPrices), [tPrices]);

  return (
    <section className="container mx-auto">
      <h2 className="lg:text-4xl text-3xl font-medium text-center mb-4">{tPrices('title')}</h2>
      <p className="text-center text-black/40 dark:text-white/40 mb-12">{tPrices('description')}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div key={card.subtitle} className="bg-black/5 dark:bg-white/5 rounded-lg p-5 lg:p-9 flex flex-col">
            <p className="text-xl lg:text-3xl font-medium">
              <s>{card.monthPrice}</s>
            </p>
            <p className="text-xl lg:text-3xl font-medium mb-5">{card.title}</p>
            <h3 className="mb-8 lg:mb-6 dark:text-white/60 text-black/60 font-medium text-lg">{card.subtitle}</h3>
            <p className="mb-8 lg:mb-6 dark:text-white/40 text-black/40 font-medium">{card.description}</p>
            <dl className="flex flex-col gap-3 mt-auto">
              {card.list.map(({ key, value }) => (
                <div key={key} className="flex justify-between gap-4">
                  <dt className="text-black/60 dark:text-white/40 font-medium">{key}</dt>
                  <dd className="text-black dark:text-white font-medium text-nowrap">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
