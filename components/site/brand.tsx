import { cn } from '@/lib/utils';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex shrink-0 items-center gap-2.5 sm:gap-3"
      aria-label="Monia Mhamdi home"
    >
      <span className="relative grid size-10 place-items-center rounded-full border border-gold font-serif text-2xl font-bold text-gold after:absolute after:inset-1 after:rounded-full after:border after:border-gold/50 sm:size-11.5 sm:text-3xl">
        M
      </span>
      <span>
        <strong
          className={cn(
            'block font-serif text-xl leading-tight font-semibold tracking-tight whitespace-nowrap sm:text-2xl',
            light && 'text-white',
          )}
        >
          Monia Mhamdi
        </strong>
        <small className="block text-xs whitespace-nowrap sm:text-sm">
          Sworn Translator ·{' '}
          <b className="font-medium" dir="rtl">
            مترجمة محلفة
          </b>
        </small>
      </span>
    </a>
  );
}
