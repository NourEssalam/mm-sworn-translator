import { ShieldCheck } from 'lucide-react';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import type { Dictionary } from '@/dictionaries/en';

export function Proof({ t }: { t: Dictionary['proof'] }) {
  return (
    <Section className="bg-white pt-0 md:pt-0">
      <Container>
        <div className="bg-parchment px-6 py-9 md:px-9 md:py-10 lg:px-14 lg:py-12">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading className="mb-7 whitespace-pre-line md:mb-11">
            {t.heading}
          </Heading>
          <div className="grid gap-5 md:grid-cols-4 md:gap-6">
            {t.points.map(({ title, text }) => (
              <div
                key={title}
                className="border-t border-gold/40 pt-4 md:border-s md:border-t-0 md:ps-4 md:pt-0"
              >
                <ShieldCheck size={24} className="mb-3.5 text-yellow-600" />
                <h3 className="mb-1 font-serif text-xl font-semibold rtl:font-arabic-display rtl:font-bold">
                  {title}
                </h3>
                <p className="font-serif text-lg leading-relaxed text-slate-600 rtl:font-arabic">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
