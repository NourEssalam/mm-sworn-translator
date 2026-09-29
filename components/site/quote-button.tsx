import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/data';
import { cn } from '@/lib/utils';

export function QuoteButton({
  label,
  compact = false,
  className,
}: {
  label: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Button
      variant="gold"
      size={compact ? 'compact' : 'cta'}
      className={cn('rtl:font-arabic', className)}
      nativeButton={false}
      render={<a href={WHATSAPP_URL} target="_blank" rel="noreferrer" />}
    >
      <MessageCircle size={17} /> {label}{' '}
      <ArrowRight size={16} className="rtl:rotate-180" />
    </Button>
  );
}
