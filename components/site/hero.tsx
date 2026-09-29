import Image from 'next/image';
import { ArrowRight, Check, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Accent, Heading } from '@/components/site/heading';
import { QuoteButton } from '@/components/site/quote-button';
import { MAPS_URL } from '@/lib/data';

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <Container className="grid md:min-h-121 md:grid-cols-2">
        <div className="pt-13 pb-10 md:pt-17">
          <Eyebrow>Sworn Translator · Court Interpreter</Eyebrow>
          <Heading as="h1" size="hero">
            Arabic &#8596; English
            <br />
            <Accent>Sworn Translation</Accent>
          </Heading>
          <p className="mt-5 mb-4 max-w-120 font-serif text-xl leading-snug font-medium">
            Ministry of Justice-accredited translation for legal, immigration
            and official documents.
          </p>
          <div className="my-6 flex gap-6 font-serif text-lg leading-snug">
            <span className="flex items-start gap-2">
              <ShieldCheck size={21} className="text-gold" />
              <span>
                Ministry of Justice
                <br />
                <b className="font-medium">Accredited</b>
              </span>
            </span>
            <span className="flex items-start gap-2 border-l border-slate-500 pl-6">
              <MapPin size={21} className="text-gold" />
              <span>
                Bou Salem, Jendouba,
                <br />
                <b className="font-medium">Tunisia</b>
              </span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3.5 md:flex-nowrap">
            <QuoteButton />
            <Button
              variant="outline-light"
              size="cta"
              nativeButton={false}
              render={<a href={MAPS_URL} target="_blank" rel="noreferrer" />}
            >
              <MapPin size={17} /> Get Directions <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-5 flex gap-6 text-sm">
            {['Arabic ↔ English', 'Confidential', 'Professional'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Check size={15} className="text-gold" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div
          className="relative h-69 md:h-auto"
          aria-label="Professional translation workspace"
        >
          <Image
            src="/hero1.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-navy to-transparent" />
        </div>
      </Container>
    </section>
  );
}
