import { Analytics } from '@vercel/analytics/next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';

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
      //{
      //url: '/DM-navy-512_512.svg',
      //type: 'image/svg+xml',
      //},
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-warm font-sans text-navy">{children}</body>
    </html>
  );
}
