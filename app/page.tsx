import { About } from '@/components/site/about';
import { Confidentiality } from '@/components/site/confidentiality';
import { Faq } from '@/components/site/faq';
import { FinalCta } from '@/components/site/final-cta';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { Process } from '@/components/site/process';
import { Proof } from '@/components/site/proof';
import { Services } from '@/components/site/services';
import { TrustStrip } from '@/components/site/trust-strip';

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
      <FinalCta />
      <Footer />
    </main>
  );
}
