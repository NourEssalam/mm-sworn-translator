import Image from 'next/image';
import { ArrowRight, Check, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Accent, Heading } from '@/components/site/heading';
import { QuoteButton } from '@/components/site/quote-button';
import type { Dictionary } from '@/dictionaries/en';
import { MAPS_URL, whatsappLink } from '@/lib/data';

export function Hero({
  t,
  common,
  imageLabel,
  imageSrc,
}: {
  t: Dictionary['hero'];
  common: Dictionary['common'];
  imageLabel: string;
  imageSrc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Container className="relative z-10">
        <div className="pt-13 pb-10 md:min-h-121 md:max-w-2xl md:pt-17 md:pb-16">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading
            as="h1"
            size="hero"
            className="rtl:text-4xl rtl:leading-[1.2] lg:rtl:text-6xl"
          >
            {t.titleMain}
            <br />
            <Accent>{t.titleAccent}</Accent>
          </Heading>
          <p className="mt-5 mb-4 max-w-120 font-serif text-xl leading-snug font-medium rtl:font-arabic rtl:text-lg rtl:leading-relaxed">
            {t.description}
          </p>
          <div className="my-6 flex gap-6 font-serif text-lg leading-snug rtl:font-arabic rtl:leading-relaxed">
            <span className="flex items-start gap-2">
              <ShieldCheck size={21} className="text-gold" />
              <span>
                {t.accreditedTitle}
                <br />
                <b className="font-medium">{t.accreditedBadge}</b>
              </span>
            </span>
            <span className="flex items-start gap-2 border-s border-slate-500 ps-6">
              <MapPin size={21} className="text-gold" />
              <span>
                {t.locationTitle}
                <br />
                <b className="font-medium">{t.locationBadge}</b>
              </span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3.5 md:flex-nowrap">
            <QuoteButton
              label={common.getQuote}
              href={whatsappLink(common.whatsappMessage)}
            />
            <Button
              variant="outline-light"
              size="cta"
              className="rtl:font-arabic"
              nativeButton={false}
              render={<a href={MAPS_URL} target="_blank" rel="noreferrer" />}
            >
              <MapPin size={17} /> {common.getDirections}{' '}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm rtl:text-base">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Check size={15} className="text-gold" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <div
        className="relative h-69 md:absolute md:inset-0 md:h-auto"
        aria-label={imageLabel}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          quality={90}
          sizes="90vw"
          className="object-cover rtl:object-left"
        />
        <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-navy to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-navy via-navy/80 to-navy/10 md:block rtl:bg-linear-to-l" />
      </div>
    </section>
  );
}
