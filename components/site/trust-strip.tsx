import { Fragment } from 'react';
import { Container } from '@/components/site/container';

const items = [
  'Ministry of Justice Accredited',
  'Court Interpreter',
  'Arabic–English',
  'Bou Salem · Jendouba',
];

export function TrustStrip() {
  return (
    <section className="border-b border-stone-300 bg-white">
      <Container className="flex min-h-18 flex-wrap items-center justify-center gap-3 py-4 text-base md:flex-nowrap md:justify-around md:py-0">
        {items.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && (
              <i className="hidden h-6 border-l border-stone-300 md:block" />
            )}
            <span>{item}</span>
          </Fragment>
        ))}
      </Container>
    </section>
  );
}
