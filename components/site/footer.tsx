import { ArrowRight, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Brand } from '@/components/site/brand';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import type { Dictionary } from '@/dictionaries/en';
import {
  MAPS_URL,
  SOCIAL_LINKS as socialLinks,
  DEVELOPER_URL,
} from '@/lib/data';
export function Footer({
  t,
  common,
  brand,
  a11y,
}: {
  t: Dictionary['footer'];
  common: Dictionary['common'];
  brand: Dictionary['brand'];
  a11y: Dictionary['a11y'];
}) {
  return (
    <footer className="bg-navy-deep pt-11 text-white">
      <Container className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-15">
        <div>
          <Brand stacked brand={brand} homeLabel={a11y.homeLink} />
          <p className="my-3.5 font-serif text-lg leading-relaxed whitespace-pre-line text-slate-300 rtl:font-arabic">
            {t.tagline}
          </p>
        </div>
        <div>
          <Eyebrow className="mb-4">{t.contactEyebrow}</Eyebrow>
          <div className="space-y-4 font-serif text-lg leading-normal text-slate-200 rtl:font-arabic">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> {t.location}
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={16} className="text-gold" />{' '}
              <span dir="ltr">{t.phone}</span>
            </p>
            <p>
              <a
                href={`mailto:${t.email}`}
                dir="ltr"
                className="inline-block hover:text-gold-bright"
              >
                {t.email}
              </a>
            </p>
          </div>
          <div className="mt-5.5 flex gap-5 text-lg text-slate-300">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex h-30 items-center justify-center gap-2.5 bg-linear-to-br from-stone-200 via-sky-200 to-amber-100 text-navy rtl:bg-linear-to-bl">
            <MapPin size={25} className="text-red-700" />
            <span className="font-serif text-xl rtl:font-arabic">
              {t.mapCard.city}
              <br />
              <small className="text-base">{t.mapCard.region}</small>
            </span>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 font-serif text-lg text-gold-bright hover:text-yellow-200 rtl:font-arabic"
          >
            {common.getDirections}{' '}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </a>
        </div>
      </Container>
      <Container>
        <div className="mt-9 flex flex-col gap-2 border-t border-slate-700 py-4 text-base text-slate-400 md:mt-10 md:flex-row md:items-center md:justify-between rtl:text-lg">
          <p>{t.copyright}</p>
          <p className="flex flex-wrap items-center gap-2">
            {t.developedBy}
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 py-1 ps-4 pe-1 font-medium text-gold-bright transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep"
            >
              <span dir="ltr">Noor Slimen</span>
              <span className="relative flex size-6 items-center justify-center rounded-full bg-gold text-navy-deep transition-colors duration-300 group-hover:bg-navy-deep group-hover:text-gold-bright">
                <span className="absolute inset-0 rounded-full bg-gold/60 group-hover:animate-none motion-safe:animate-ping" />
                <ArrowUpRight
                  size={14}
                  className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                />
              </span>
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
