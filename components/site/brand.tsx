import { cn } from '@/lib/utils';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-3"
      aria-label="Monia Mhamdi home"
    >
      <span className="relative grid size-11.5 place-items-center rounded-full border border-gold font-serif text-3xl font-bold text-gold after:absolute after:inset-1 after:rounded-full after:border after:border-gold/50">
        M
      </span>
      <span>
        <strong
          className={cn(
            'block font-serif text-2xl leading-tight font-semibold tracking-tight',
            light && 'text-white',
          )}
        >
          Monia Mhamdi
        </strong>
        <small className="block text-xs md:text-sm">
          Sworn Translator ·{' '}
          <b className="font-medium" dir="rtl">
            مترجمة محلفة
          </b>
        </small>
      </span>
    </a>
  );
}
