import Image from 'next/image';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import type { Dictionary } from '@/dictionaries/en';

export function About({
  t,
}: {
  t: Dictionary['about'];
  common?: Dictionary['common'];
}) {
  return (
    <Section id="about" className="bg-warm">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-18">
        <div className="relative h-82 overflow-hidden md:h-108">
          <Image
            src="/night-work.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover object-right saturate-75 rtl:object-left"
          />
        </div>
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading className="mb-2">{t.name}</Heading>
          <p className="mb-5 font-serif text-xl leading-snug rtl:font-arabic">
            {t.subtitle}
          </p>
          <p className="max-w-108 font-serif text-xl leading-relaxed text-slate-600 rtl:font-arabic">
            {t.description}
          </p>
          <ul className="my-6 font-serif text-lg leading-8 rtl:font-arabic">
            {t.credentials.map((c) => (
              <li key={c}>
                <span className="me-2.5 text-gold" aria-hidden="true">
                  —
                </span>
                {c}
              </li>
            ))}
          </ul>

          {/* "View credentials" link is disabled. To re-enable: import
              ArrowRight from 'lucide-react' and whatsappLink from '@/lib/data',
              make `common` a required prop, then use
              href={whatsappLink(common.whatsappMessage)} */}
        </div>
      </Container>
    </Section>
  );
}
