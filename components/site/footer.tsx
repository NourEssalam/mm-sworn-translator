import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Brand } from '@/components/site/brand';
import { Container } from '@/components/site/container';
import { Eyebrow } from '@/components/site/eyebrow';
import { MAPS_URL } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-11 text-white">
      <Container className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-15">
        <div>
          <Brand stacked />
          <p className="my-3.5 font-serif text-lg leading-relaxed text-slate-300">
            Sworn Translator · Court Interpreter
            <br />
            Arabic–English
          </p>
        </div>
        <div>
          <Eyebrow className="mb-4">Contact</Eyebrow>
          <div className="space-y-4 font-serif text-lg leading-normal text-slate-200">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> Bou Salem, Jendouba,
              Tunisia
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={16} className="text-gold" /> +216 93 012 617
            </p>
            <p>
              <a
                href="mailto:monia.legaltranslator@gmail.com"
                className="hover:text-gold-bright"
              >
                monia.legaltranslator@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-5.5 flex gap-5 text-lg text-slate-300">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div>
          <div className="flex h-30 items-center justify-center gap-2.5 bg-linear-to-br from-stone-200 via-sky-200 to-amber-100 text-navy">
            <MapPin size={25} className="text-red-700" />
            <span className="font-serif text-xl">
              Bou Salem
              <br />
              <small className="text-base">Jendouba, Tunisia</small>
            </span>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 font-serif text-lg text-gold-bright hover:text-yellow-200"
          >
            Get Directions <ArrowRight size={14} />
          </a>
        </div>
      </Container>
      <Container>
        <div className="mt-9 border-t border-slate-700 py-4 text-base text-slate-400 md:mt-10">
          © 2026 Monia Mhamdi. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
