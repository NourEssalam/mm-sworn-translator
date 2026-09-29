import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex shrink-0 items-center gap-2.5 sm:gap-3"
      aria-label="Monia Mhamdi home"
    >
      <Image
        src={light ? '/LM-logo-seal.svg' : '/DM-logo-seal.svg'}
        alt=""
        width={96}
        height={96}
        unoptimized
        priority={!light}
        className="size-12 sm:size-16"
      />
      <span className="block">
        <strong
          className={cn(
            'block border-b border-gold/40 pb-0.5 font-serif text-xl leading-tight font-semibold tracking-tight whitespace-nowrap sm:text-2xl',
            light ? 'text-navy' : 'text-white',
          )}
        >
          Monia Mhamdi
        </strong>
        <small
          className={cn(
            'mt-1 block text-xs whitespace-nowrap sm:text-sm',
            light ? 'text-navy' : 'text-slate-300',
          )}
        >
          Sworn Translator{' '}
          <span className="mx-1 text-gold" aria-hidden="true">
            •
          </span>{' '}
          <b className="font-medium" dir="rtl">
            مترجمة محلفة
          </b>
        </small>
      </span>
    </a>
  );
}
