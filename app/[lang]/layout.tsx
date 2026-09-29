import { Analytics } from '@vercel/analytics/next';
import {
  Amiri,
  Cormorant_Garamond,
  Inter,
  Noto_Sans_Arabic,
} from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { dirByLocale, isLocale, locales } from '@/lib/i18n';
import '../globals.css';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['arabic'],
  weight: ['400', '700'],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Monia Mhamdi | Arabic–English Sworn Translator',
  description:
    'Ministry of Justice-accredited Arabic–English sworn translation, court interpretation and language services in Bou Salem, Jendouba, Tunisia.',
  icons: {
    icon: [
      {
        url: '/LM-favcion.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/DM-favcion.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    //apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dirByLocale[lang]}
      className={` ${cormorantGaramond.variable} ${inter.variable} ${amiri.variable} ${notoSansArabic.variable} scroll-pt-17 scroll-smooth md:scroll-pt-19`}
    >
      <body className="bg-warm font-sans text-navy">{children}</body>
    </html>
  );
}
