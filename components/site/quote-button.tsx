import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/data';
import { cn } from '@/lib/utils';

export function QuoteButton({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Button
      variant="gold"
      size={compact ? 'compact' : 'cta'}
      className={cn(className)}
      nativeButton={false}
      render={<a href={WHATSAPP_URL} target="_blank" rel="noreferrer" />}
    >
      <MessageCircle size={17} /> Get Your Quote <ArrowRight size={16} />
    </Button>
  );
}
