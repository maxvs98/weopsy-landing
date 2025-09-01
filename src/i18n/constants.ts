export type LocaleCode = 'en' | 'cs';

interface Locale {
  code: LocaleCode;
  label: string;
}

export const LOCALES: Locale[] = [
  { code: 'cs', label: 'Čeština' },
  { code: 'en', label: 'English' },
];

export const DEFAULT_LOCALE_CODE: LocaleCode = 'en';
