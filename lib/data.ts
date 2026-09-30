import { FileText, Globe2, MessageCircle, ShieldCheck } from 'lucide-react';

export const ARABIC_URL = '/ar';

const WHATSAPP_NUMBER = '21693012617';
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MAPS_URL = 'https://maps.app.goo.gl/o5R1bjwcBvxSbszf8';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/monia-mhamdi' },
  { name: 'Facebook', url: 'https://www.facebook.com/maitre.monia.mhamdi' },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/monia.sworn.translator',
  },
];

// Same order as `services.items` in the dictionaries.
export const serviceIcons = [FileText, Globe2, ShieldCheck, MessageCircle];
