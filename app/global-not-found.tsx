import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Page not found | Monia Mhamdi',
  description: 'This page does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-warm font-sans text-navy">
        <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md font-serif text-xl text-slate-600">
            This address is not part of the site.
          </p>
          <a
            href="/ar"
            className="mt-8 rounded-md bg-navy px-5 py-3 text-lg text-white"
          >
            Go to the homepage
          </a>
        </main>
      </body>
    </html>
  );
}
