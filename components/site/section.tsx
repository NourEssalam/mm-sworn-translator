import { cn } from '@/lib/utils';

export function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return <section className={cn('py-16 md:py-22', className)} {...props} />;
}
