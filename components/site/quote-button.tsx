import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/data';

export function QuoteButton({ compact = false }: { compact?: boolean }) {
  return (
    <Button
      variant="gold"
      size={compact ? 'compact' : 'cta'}
      nativeButton={false}
      render={<a href={WHATSAPP_URL} target="_blank" rel="noreferrer" />}
    >
      <MessageCircle size={17} /> Get Your Quote <ArrowRight size={16} />
    </Button>
  );
}
