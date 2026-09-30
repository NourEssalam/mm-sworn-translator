import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Accent, Heading } from '@/components/site/heading';
import { QuoteButton } from '@/components/site/quote-button';
import type { Dictionary } from '@/dictionaries/en';
import { whatsappLink } from '@/lib/data';

export function FinalCta({
  t,
  common,
}: {
  t: Dictionary['finalCta'];
  common: Dictionary['common'];
}) {
  return (
    <section className="bg-navy py-12 text-white">
      <Container className="md:flex md:items-center md:justify-between">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading>
            {t.headingMain}
            <br />
            <Accent>{t.headingAccent}</Accent>
          </Heading>
          <p className="mt-3 font-serif text-xl leading-normal text-slate-200 rtl:font-arabic rtl:leading-relaxed">
            {t.text}
          </p>
        </div>
        <QuoteButton
          label={common.getQuote}
          href={whatsappLink(common.whatsappMessage)}
          compact
          className="mt-7 md:mt-0"
        />
      </Container>
    </section>
  );
}
