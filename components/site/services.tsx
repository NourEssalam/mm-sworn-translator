import { GraduationCap } from 'lucide-react';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { Heading, Lede } from '@/components/site/heading';
import { Section } from '@/components/site/section';
import { services } from '@/lib/data';

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <Eyebrow>Our Services</Eyebrow>
        <Heading>Translation &amp; language services</Heading>
        <Lede>
          Professional Arabic–English support for official, legal and
          professional needs.
        </Lede>
        <div className="mt-9 grid gap-3 md:grid-cols-4 md:gap-4">
          {services.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="relative min-h-51 border border-stone-300 px-5 pt-6 pb-5 md:min-h-59 md:px-4 md:py-5 lg:px-5 lg:pt-6 lg:pb-5"
            >
              <Icon className="mb-6 text-yellow-600 md:mb-8" size={28} />
              <h3 className="mb-1 max-w-42 font-serif text-xl leading-tight font-semibold">
                {title}
              </h3>
              <p className="mt-2.5 font-serif text-lg leading-relaxed text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border border-stone-200 bg-parchment/40 px-3.5 py-3 md:flex-nowrap md:gap-4 md:px-4 md:py-3.5">
          <GraduationCap
            className="shrink-0 text-yellow-600"
            size={22}
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1 border-l border-gold/40 pl-3 md:pl-4">
            <h3 className="mb-1 font-serif text-xl leading-tight font-semibold text-navy">
              English Language Training
            </h3>
            <p className="text-sm leading-normal text-slate-500 md:text-base">
              Practical English training for students and professionals,
              including exam preparation, interview preparation and workplace
              communication.
            </p>
          </div>
          <span className="basis-full pl-8.5 text-sm leading-normal text-stone-500 md:basis-auto md:pl-0 md:whitespace-nowrap">
            Private · Group · Professional
          </span>
        </div>
      </Container>
    </Section>
  );
}
