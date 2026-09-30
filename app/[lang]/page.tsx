import { notFound } from 'next/navigation';
import { About } from '@/components/site/about';
import { Confidentiality } from '@/components/site/confidentiality';
import { Faq } from '@/components/site/faq';
import { FinalCta } from '@/components/site/final-cta';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { LanguageToggle } from '@/components/site/language-toggle';
import { Process } from '@/components/site/process';
import { Proof } from '@/components/site/proof';
import { Services } from '@/components/site/services';
import { TrustStrip } from '@/components/site/trust-strip';
import { getDictionary } from '@/dictionaries';
import { dirByLocale, isLocale } from '@/lib/i18n';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main id="top">
      <div className="flex justify-center bg-navy py-2 sm:hidden">
        <LanguageToggle
          lang={lang}
          label={dict.a11y.language}
          size="md"
          tone="dark"
        />
      </div>
      <Header
        lang={lang}
        nav={dict.nav}
        common={dict.common}
        brand={dict.brand}
        a11y={dict.a11y}
      />
      <Hero
        t={dict.hero}
        common={dict.common}
        imageLabel={dict.a11y.heroImage}
      />
      <TrustStrip items={dict.trustStrip} />
      <Process t={dict.process} />
      <Services t={dict.services} />
      <Proof t={dict.proof} />
      <About t={dict.about} common={dict.common} />
      <Confidentiality t={dict.confidentiality} />
      <Faq t={dict.faq} dir={dirByLocale[lang]} />{' '}
      <FinalCta t={dict.finalCta} common={dict.common} />
      <Footer
        t={dict.footer}
        common={dict.common}
        brand={dict.brand}
        a11y={dict.a11y}
      />
    </main>
  );
}
