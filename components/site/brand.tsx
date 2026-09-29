import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Brand({
  light = false,
  stacked = false,
}: {
  light?: boolean;
  stacked?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        'flex shrink-0 gap-2.5 sm:gap-3',
        stacked ? 'flex-col items-start gap-4 sm:gap-4' : 'items-center',
      )}
      aria-label="Monia Mhamdi home"
    >
      <Image
        src={light ? '/LM-logo-seal.svg' : '/DM-logo-seal.svg'}
        alt=""
        width={96}
        height={96}
        unoptimized
        priority={!light}
        className={stacked ? 'size-24' : 'size-11 sm:size-12'}
      />
      <span className="block">
        <strong
          className={cn(
            'block border-b border-gold/40 pb-0.5 font-serif leading-tight font-semibold tracking-tight whitespace-nowrap',
            stacked ? 'text-3xl' : 'text-xl sm:text-2xl',
            light ? 'text-navy' : 'text-white',
          )}
        >
          Monia Mhamdi
        </strong>
        <small
          className={cn(
            'mt-1 block whitespace-nowrap',
            stacked ? 'text-sm sm:text-base' : 'text-xs sm:text-sm',
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
