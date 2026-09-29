'use client';

import { useSyncExternalStore } from 'react';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Each language is always written in its own script, on both pages.
const options = [
  { code: 'ar', text: 'العربية', font: 'font-arabic' },
  { code: 'en', text: 'English', font: 'font-sans' },
] as const;

const sizes = {
  md: 'px-3 py-1.5 text-base',
  lg: 'px-5 py-2 text-lg',
};

const tones = {
  light: {
    wrapper: 'border-stone-300 bg-white',
    active: 'bg-navy text-white',
    link: 'text-navy hover:bg-stone-100',
  },
  dark: {
    wrapper: 'border-slate-500',
    active: 'bg-gold-bright text-navy',
    link: 'text-white hover:text-gold-bright',
  },
};

// The hash (#faq) only exists in the browser, so it is read on the client.
// The server snapshot is '' so the first render matches the server HTML.
function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}
const getHash = () => window.location.hash;
const getServerHash = () => '';

export function LanguageToggle({
  lang,
  label,
  size = 'md',
  tone = 'light',
  className,
}: {
  lang: Locale;
  label: string;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  className?: string;
}) {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const colors = tones[tone];

  return (
    <div
      role="group"
      aria-label={label}
      dir="ltr"
      className={cn(
        'inline-flex items-center rounded-full border p-0.5',
        colors.wrapper,
        className,
      )}
    >
      {options.map(({ code, text, font }) => {
        const segment = cn(
          'rounded-full leading-normal whitespace-nowrap',
          font,
          sizes[size],
        );

        if (code === lang) {
          return (
            <span
              key={code}
              lang={code}
              aria-current="true"
              className={cn(segment, 'font-semibold', colors.active)}
            >
              {text}
            </span>
          );
        }

        return (
          <a
            key={code}
            href={`/${code}${hash}`}
            hrefLang={code}
            lang={code}
            className={cn(segment, colors.link)}
          >
            {text}
          </a>
        );
      })}
    </div>
  );
}
