import { defaultLocale, locales, type Locale } from '@/lib/i18n';

// Set NEXT_PUBLIC_SITE_URL on Vercel when the custom domain goes live.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monia-mhamdi.vercel.app'
).replace(/\/$/, '');

export const localeUrl = (lang: Locale) => `${SITE_URL}/${lang}`;

// Open Graph locale codes (Facebook's list has no Tunisian Arabic variant).
export const ogLocale: Record<Locale, string> = {
  ar: 'ar_AR',
  en: 'en_US',
};

// hreflang alternates, shared by the page metadata and the sitemap.
export function languageAlternates() {
  const languages: Record<string, string> = {};
  for (const lang of locales) languages[lang] = localeUrl(lang);
  languages['x-default'] = localeUrl(defaultLocale);
  return languages;
}
