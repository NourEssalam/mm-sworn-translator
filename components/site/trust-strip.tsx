import { Fragment } from 'react';
import { Container } from '@/components/site/container';
import type { Dictionary } from '@/dictionaries/en';

export function TrustStrip({ items }: { items: Dictionary['trustStrip'] }) {
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
