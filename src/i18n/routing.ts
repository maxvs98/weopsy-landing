import { defineRouting } from 'next-intl/routing';

import { DEFAULT_LOCALE_CODE, LOCALES } from './constants';

export const routing = defineRouting({
  locales: LOCALES.map((l) => l.code),
  defaultLocale: DEFAULT_LOCALE_CODE,
  localePrefix: 'as-needed',
});
