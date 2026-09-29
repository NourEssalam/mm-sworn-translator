'use client';

import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Brand } from '@/components/site/brand';
import { Container } from '@/components/site/container';
import { WHATSAPP_URL, navLinks } from '@/lib/data';

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-5 h-17 border-b border-stone-200 bg-warm md:h-19">
      <Container className="flex h-full items-center justify-between">
        <Brand />
        <nav
          className="mr-4 ml-auto hidden gap-4 text-base md:flex lg:mr-8 lg:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a href="#" className="text-base">
            AR <span className="mx-1.5 text-stone-400">|</span>{' '}
            <b className="font-semibold">EN</b>
          </a>

          <a
            className="hidden items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-base text-white md:flex"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <button
            className="p-1 text-navy md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </Container>
      {open && (
        <nav className="flex flex-col border-b border-stone-300 bg-warm px-5 py-2.5 md:hidden">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="py-3 text-base"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
