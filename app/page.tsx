import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { TrustStrip } from '@/components/site/trust-strip';
import { Process } from '@/components/site/process';
import { Services } from '@/components/site/services';
import { About } from '@/components/site/about';
import { Confidentiality } from '@/components/site/confidentiality';
import { Proof } from '@/components/site/proof';
import { Brand } from '@/components/site/brand';
import { Eyebrow } from '@/components/site/eyebrow';
import { QuoteButton } from '@/components/site/quote-button';
import { MAPS_URL } from '@/lib/data';
import { Faq } from '@/components/site/faq';

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <TrustStrip />
      <Process />
      <Services />

      <Proof />
      <About />
      <Confidentiality />
      <Faq />

      <section className="final-cta">
        <div className="container final-inner">
          <div>
            <Eyebrow>Ready to get started?</Eyebrow>
            <h2>
              Need an Arabic–English
              <br />
              <em>sworn translation?</em>
            </h2>
            <p>Send your documents and request a quote.</p>
          </div>
          <QuoteButton compact />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand light />
            <p className="footer-role">
              Sworn Translator · Court Interpreter
              <br />
              Arabic–English
            </p>
          </div>
          <div className="footer-contact">
            <Eyebrow className="mb-4">Contact</Eyebrow>
            <p>
              <MapPin size={16} /> Bou Salem, Jendouba, Tunisia
            </p>
            <p>
              <MessageCircle size={16} /> +216 93 012 617
            </p>
            <p>
              <a href="mailto:monia.legaltranslator@gmail.com">
                monia.legaltranslator@gmail.com
              </a>
            </p>
            <div className="socials">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-map">
            <div className="map-placeholder">
              <MapPin size={25} />
              <span>
                Bou Salem
                <br />
                <small>Jendouba, Tunisia</small>
              </span>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              Get Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 Monia Mhamdi. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
