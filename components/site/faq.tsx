import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Accent, Heading, Lede } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Dictionary } from '@/dictionaries/en';

export function Faq({ t }: { t: Dictionary['faq'] }) {
  return (
    <Section id="faq" className="bg-warm">
      <Container className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-2">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading className="mb-4.5">
            {t.headingMain}
            <br />
            <Accent className="text-dusk">{t.headingAccent}</Accent>
          </Heading>
          <Lede className="max-w-62">{t.lede}</Lede>
        </div>
        <Accordion defaultValue={[0]} className="md:col-span-3">
          {t.items.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={i}
              className="border-b border-stone-300"
            >
              <AccordionTrigger className="py-4.5 font-serif text-xl leading-snug font-normal text-navy hover:no-underline aria-expanded:**:data-[slot=accordion-trigger-icon]:text-gold rtl:font-arabic">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pe-7 pb-4 font-serif text-lg leading-relaxed text-slate-600 rtl:font-arabic">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
