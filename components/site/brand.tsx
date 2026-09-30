import Image from 'next/image';
import type { Dictionary } from '@/dictionaries/en';
import { cn } from '@/lib/utils';

export function Brand({
  light = false,
  stacked = false,
  brand,
  homeLabel,
}: {
  light?: boolean;
  stacked?: boolean;
  brand: Dictionary['brand'];
  homeLabel: string;
}) {
  return (
    <a
      href="#top"
      className={cn(
        'flex shrink-0 gap-2.5 sm:gap-3',
        stacked ? 'flex-col items-start gap-4 sm:gap-4' : 'items-center',
      )}
      aria-label={homeLabel}
    >
      <Image
        src={light ? '/LM-logo-seal.svg' : '/DM-logo-seal.svg'}
        alt=""
        width={96}
        height={96}
        unoptimized
        priority={!light}
        className={stacked ? 'size-24' : 'size-12 sm:size-14'}
      />

      <span className="block">
        <strong
          className={cn(
            'block border-b border-gold/40 pb-0.5 text-center font-serif leading-tight font-semibold whitespace-nowrap',
            stacked ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl',
            light ? 'text-navy' : 'text-white',
          )}
        >
          {brand.name}
        </strong>

        <small
          className={cn(
            'text-boldfont-serif mt-1 block text-center whitespace-nowrap',
            stacked ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs',
            light ? 'text-navy' : 'text-slate-300',
          )}
        >
          {brand.title}
          <span>
            {' '}
            <span className="mx-1 text-gold" aria-hidden="true">
              •
            </span>{' '}
            <b className="font-serif">{brand.titleAr}</b>
          </span>
        </small>
      </span>
    </a>
  );
}
