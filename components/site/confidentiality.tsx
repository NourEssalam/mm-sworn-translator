import Image from 'next/image';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading } from '@/components/site/heading';
import { Section } from '@/components/site/section';

export function Confidentiality() {
  return (
    <Section className="bg-white">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-18">
        <div className="relative h-65 overflow-hidden md:h-80">
          <Image
            src="/monia-office.png"
            alt=""
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover sepia-20"
          />
        </div>
        <div>
          <Eyebrow>Confidentiality &amp; Trust</Eyebrow>
          <Heading className="mb-5 max-w-108">
            Your documents are handled with care.
          </Heading>
          <p className="max-w-105 font-serif text-xl leading-relaxed text-slate-600">
            Legal, immigration and personal documents require discretion. Every
            document is handled professionally and confidentially.
          </p>
          <div className="mt-6 mb-3 w-11 border-t-2 border-gold" />
          <small className="font-serif text-base">
            Professional confidentiality · Secure document handling
          </small>
        </div>
      </Container>
    </Section>
  );
}
