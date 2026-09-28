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
import { faqs } from '@/lib/data';

export function Faq() {
  return (
    <Section id="faq" className="bg-warm">
      <Container className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-2">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <Heading className="mb-4.5">
            Questions,
            <br />
            <Accent className="text-dusk">answered.</Accent>
          </Heading>
          <Lede className="max-w-62">
            Everything you need to know before sending your documents.
          </Lede>
        </div>
        <Accordion defaultValue={[0]} className="md:col-span-3">
          {faqs.map(([question, answer], i) => (
            <AccordionItem
              key={question}
              value={i}
              className="border-b border-stone-300"
            >
              <AccordionTrigger className="py-4.5 font-serif text-xl leading-snug font-normal text-navy hover:no-underline aria-expanded:**:data-[slot=accordion-trigger-icon]:text-gold">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pr-7 pb-4 font-serif text-lg leading-relaxed text-slate-600">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
