import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Accent, Heading } from '@/components/site/heading';
import { QuoteButton } from '@/components/site/quote-button';

export function FinalCta() {
  return (
    <section className="bg-navy py-12 text-white">
      <Container className="md:flex md:items-center md:justify-between">
        <div>
          <Eyebrow>Ready to get started?</Eyebrow>
          <Heading>
            Need an Arabic–English
            <br />
            <Accent>sworn translation?</Accent>
          </Heading>
          <p className="mt-3 font-serif text-xl leading-normal text-slate-200">
            Send your documents and request a quote.
          </p>
        </div>
        <QuoteButton compact className="mt-7 md:mt-0" />
      </Container>
    </section>
  );
}
