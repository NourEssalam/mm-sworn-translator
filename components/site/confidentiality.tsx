import Image from 'next/image';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import type { Dictionary } from '@/dictionaries/en';

export function Confidentiality({ t }: { t: Dictionary['confidentiality'] }) {
  return (
    <Section className="bg-white">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-18">
        <div className="relative h-65 overflow-hidden md:h-80">
          <Image
            src="/stamp-conf.png"
            alt=""
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover sepia-20"
          />
        </div>
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading className="mb-5 max-w-108">{t.heading}</Heading>
          <p className="max-w-105 font-serif text-xl leading-relaxed text-slate-600 rtl:font-arabic">
            {t.text}
          </p>
          <div className="mt-6 mb-3 w-11 border-t-2 border-gold" />
          <small className="font-serif text-base rtl:font-arabic rtl:text-lg">
            {t.footer}
          </small>
        </div>
      </Container>
    </Section>
  );
}
