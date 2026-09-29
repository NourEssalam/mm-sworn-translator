import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { languageAlternates, localeUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: localeUrl(lang),
    alternates: { languages: languageAlternates() },
  }));
}
