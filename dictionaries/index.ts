import 'server-only';
import type { Locale } from '@/lib/i18n';
import { en } from './en';

const dictionaries = {
  en: () => Promise.resolve(en),
  ar: () => import('./ar').then((module) => module.ar),
} satisfies Record<Locale, () => Promise<typeof en>>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
