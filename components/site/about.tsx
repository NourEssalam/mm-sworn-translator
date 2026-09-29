import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import { WHATSAPP_URL } from '@/lib/data';

const credentials = [
  'Ministry of Justice Accredited',
  "Master's Degree in English Language",
  'Court Interpreter — Court of First Instance of Jendouba',
];

export function About() {
  return (
    <Section id="about" className="bg-warm">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-18">
        <div className="relative h-82 overflow-hidden md:h-108">
          <Image
            src="/night-work.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover object-right saturate-75"
          />
        </div>
        <div>
          <Eyebrow>About Monia</Eyebrow>
          <Heading className="mb-2">Monia Mhamdi</Heading>
          <p className="mb-5 font-serif text-xl leading-snug">
            Sworn Translator · Court Interpreter · English Language Trainer
          </p>
          <p className="max-w-108 font-serif text-xl leading-relaxed text-slate-600">
            Ministry of Justice accredited, with a Master&apos;s degree in
            English Language and years of professional experience serving
            individuals, families and organizations.
          </p>
          <ul className="my-6 font-serif text-lg leading-8">
            {credentials.map((c) => (
              <li key={c}>
                <span className="mr-2.5 text-gold" aria-hidden="true">
                  —
                </span>
                {c}
              </li>
            ))}
          </ul>

          <a
            className="inline-flex items-center gap-2 text-base text-yellow-700 hover:text-gold"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            View credentials <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </Section>
  );
}
