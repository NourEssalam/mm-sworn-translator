import { cn } from '@/lib/utils';

export function Eyebrow({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'mb-3.5 text-xs font-semibold tracking-widest text-gold uppercase rtl:tracking-normal',
        className,
      )}
      {...props}
    />
  );
}
