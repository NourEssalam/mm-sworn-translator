import { cn } from '@/lib/utils';

const sizes = {
  hero: 'text-5xl lg:text-7xl',
  section: 'text-4xl md:text-5xl',
};

type HeadingProps = React.ComponentProps<'h2'> & {
  as?: 'h1' | 'h2';
  size?: keyof typeof sizes;
};

export function Heading({
  as: Tag = 'h2',
  size = 'section',
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        'font-serif leading-none font-semibold tracking-tight',
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function Accent({ className, ...props }: React.ComponentProps<'em'>) {
  return (
    <em className={cn('text-parchment not-italic', className)} {...props} />
  );
}

export function Lede({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'my-3.5 max-w-96 font-serif text-xl leading-relaxed text-slate-500',
        className,
      )}
      {...props}
    />
  );
}
