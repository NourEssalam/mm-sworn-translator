import { Globe2 } from 'lucide-react';
import { ARABIC_URL } from '@/lib/data';

export function LanguageBar() {
  return (
    <a
      href={ARABIC_URL}
      hrefLang="ar"
      className="flex h-11 items-center justify-center gap-2.5 bg-navy text-base font-medium text-white sm:hidden"
    >
      <Globe2 size={18} className="text-gold-bright" aria-hidden="true" />
      <span lang="ar" dir="rtl">
        تصفّح بالعربية
      </span>
      <span className="text-slate-400" aria-hidden="true">
        |
      </span>
      <span>Arabic</span>
    </a>
  );
}
