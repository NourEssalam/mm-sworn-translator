import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading, Lede } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import type { Dictionary } from '@/dictionaries/en';
import { cn } from '@/lib/utils';

export function Process({ t }: { t: Dictionary['process'] }) {
  return (
    <Section id="process">
      <Container>
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Heading>{t.heading}</Heading>
          </div>
          <Lede className="mt-5 border-l border-gold pl-4 whitespace-pre-line md:mt-3.5">
            {t.lede}
          </Lede>
        </div>
        <div className="mt-9 md:mt-14 md:grid md:grid-cols-3">
          {t.steps.map(({ num, title, text }, i) => (
            <div
              key={num}
              className={cn(
                'relative flex items-center gap-4 border-b border-stone-300 py-5 pr-10 md:border-b-0 md:py-0 md:pr-11',
                i > 0 && 'md:border-l md:pl-9',
              )}
            >
              <span className="grid size-11 flex-none place-items-center rounded-full bg-gold/30 font-serif text-base font-semibold">
                {num}
              </span>
              <div>
                <h3 className="mb-1 font-serif text-xl font-semibold rtl:font-arabic-display">
                  {title}
                </h3>
                <p className="font-serif text-lg leading-relaxed text-slate-600 rtl:font-arabic">
                  {text}
                </p>
              </div>
              {i < t.steps.length - 1 && (
                <ArrowRight className="absolute right-1 text-yellow-600 md:right-2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
