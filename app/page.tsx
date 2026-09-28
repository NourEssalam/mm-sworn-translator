'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Header } from '@/components/site/header';
import { Brand } from '@/components/site/brand';
import { Eyebrow } from '@/components/site/eyebrow';
import { QuoteButton } from '@/components/site/quote-button';
import { MAPS_URL, WHATSAPP_URL, faqs, services } from '@/lib/data';

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Sworn Translator · Court Interpreter</Eyebrow>
            <h1>
              Arabic &#8596; English
              <br />
              <em>Sworn Translation</em>
            </h1>
            <p className="hero-sub">
              Ministry of Justice-accredited translation for legal, immigration
              and official documents.
            </p>
            <div className="hero-meta">
              <span>
                <ShieldCheck size={21} /> Ministry of Justice
                <br />
                <b>Accredited</b>
              </span>
              <span>
                <MapPin size={21} /> Bou Salem, Jendouba,
                <br />
                <b>Tunisia</b>
              </span>
            </div>
            <div className="hero-actions">
              <QuoteButton />
              <a
                className="button button-outline"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} /> Get Directions <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Check /> Arabic ↔ English
              </span>
              <span>
                <Check /> Confidential
              </span>
              <span>
                <Check /> Professional
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Professional translation workspace"
          />
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-items">
          <span>Ministry of Justice Accredited</span>
          <i />
          <span>Court Interpreter</span>
          <i />
          <span>Arabic–English</span>
          <i />
          <span>Bou Salem · Jendouba</span>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="container">
          <div className="section-heading split">
            <div>
              <Eyebrow>How It Works</Eyebrow>
              <h2>A simple, secure process.</h2>
            </div>
            <p>
              From your first message
              <br />
              to your certified document.
            </p>
          </div>
          <div className="steps">
            {[
              [
                '01',
                'Send Your Documents',
                'Send the documents through WhatsApp.',
              ],
              ['02', 'Receive Your Quote', 'Pricing and expected turnaround.'],
              [
                '03',
                'Receive Your Translation',
                'Certified Arabic–English translation delivered as agreed.',
              ],
            ].map(([num, title, text], i) => (
              <div className="step" key={num}>
                <span className="step-num">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {i < 2 && <ArrowRight className="step-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>Our Services</Eyebrow>
            <h2>Translation &amp; language services</h2>
            <p>
              Professional Arabic–English support for official, legal and
              professional needs.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ title, text, icon: Icon }) => (
              <article className="service-card" key={title}>
                <Icon className="service-icon" size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="training">
            <GraduationCap
              className="training-icon"
              size={22}
              aria-hidden="true"
            />
            <div className="training-copy">
              <h3>English Language Training</h3>
              <p>
                Practical English training for students and professionals,
                including exam preparation, interview preparation and workplace
                communication.
              </p>
            </div>
            <span className="training-audiences">
              Private · Group · Professional
            </span>
          </div>
        </div>
      </section>

      <section className="section proof">
        <div className="container">
          <div className="proof-panel">
            <Eyebrow>Why Monia</Eyebrow>
            <h2>
              Official expertise.
              <br />
              Human attention.
            </h2>
            <div className="proof-grid">
              {[
                [
                  'Official',
                  'Ministry of Justice-accredited Sworn Translator.',
                ],
                [
                  'Experienced',
                  'Court interpretation and legal document experience.',
                ],
                [
                  'Precise',
                  'Terminology-conscious Arabic–English translation.',
                ],
                ['Confidential', 'Sensitive documents handled professionally.'],
              ].map(([title, text]) => (
                <div key={title}>
                  <ShieldCheck size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="portrait" />
          <div className="about-copy">
            <Eyebrow>About Monia</Eyebrow>
            <h2>Monia Mhamdi</h2>
            <p className="lead">
              Sworn Translator · Court Interpreter · English Language Trainer
            </p>
            <p>
              Ministry of Justice accredited, with a Master&apos;s degree in
              English Language and years of professional experience serving
              individuals, families and organizations.
            </p>
            <ul>
              <li>Ministry of Justice Accredited</li>
              <li>Master&apos;s Degree in English Language</li>
              <li>Court Interpreter — Court of First Instance of Jendouba</li>
            </ul>
            <a
              className="text-link"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              View credentials <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section confidentiality">
        <div className="container confidence-grid">
          <div className="document-image" />
          <div>
            <Eyebrow>Confidentiality &amp; Trust</Eyebrow>
            <h2>Your documents are handled with care.</h2>
            <p>
              Legal, immigration and personal documents require discretion.
              Every document is handled professionally and confidentially.
            </p>
            <div className="gold-rule" />
            <small>
              Professional confidentiality · Secure document handling
            </small>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2>
              Questions,
              <br />
              <em>answered.</em>
            </h2>
            <p>Everything you need to know before sending your documents.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => (
              <div
                className={`faq-item ${openFaq === i ? 'is-open' : ''}`}
                key={question}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{question}</span>
                  <ChevronDown size={18} />
                </button>
                <div id={`faq-answer-${i}`} className="faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
