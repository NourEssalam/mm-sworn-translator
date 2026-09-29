'use client';

import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Brand } from '@/components/site/brand';
import { Container } from '@/components/site/container';
import type { Dictionary } from '@/dictionaries/en';
import { WHATSAPP_URL } from '@/lib/data';

function LanguageSwitch({ className }: { className?: string }) {
  return (
    <a href="#" className={className}>
      AR <span className="mx-1.5 text-stone-400">|</span>{' '}
      <b className="font-semibold">EN</b>
    </a>
  );
}

export function Header({
  nav,
  common,
  brand,
  a11y,
}: {
  nav: Dictionary['nav'];
  common: Dictionary['common'];
  brand: Dictionary['brand'];
  a11y: Dictionary['a11y'];
}) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const links = [
    ['#services', nav.services],
    ['#process', nav.howItWorks],
    ['#about', nav.about],
    ['#faq', nav.faq],
  ] as const;

  return (
    <header className="sticky top-0 z-50 h-17 border-b border-stone-200 bg-warm md:h-19">
      <Container className="flex h-full items-center justify-between gap-4">
        <Brand light brand={brand} homeLabel={a11y.homeLink} />
        <nav
          className="ms-auto me-8 hidden gap-8 text-base lg:flex"
          aria-label={a11y.mainNav}
        >
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 sm:gap-5">
          <LanguageSwitch className="hidden text-base whitespace-nowrap sm:block" />
          <a
            className="hidden items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-base whitespace-nowrap text-white md:flex"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> {common.whatsapp}
          </a>
          <button
            className="p-1 text-navy lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={a11y.toggleMenu}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </Container>
      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col border-b border-stone-300 bg-warm px-5 py-2.5 shadow-md md:px-6 lg:hidden">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="py-3 text-base"
            >
              {label}
            </a>
          ))}
          <LanguageSwitch className="py-3 text-base sm:hidden" />
        </nav>
      )}
    </header>
  );
}
