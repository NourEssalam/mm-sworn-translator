import { FileText, Globe2, MessageCircle, ShieldCheck } from 'lucide-react';

export const WHATSAPP_URL =
  'https://wa.me/21693012617?text=Hello%20Monia%2C%20I%27d%20like%20to%20request%20a%20quote.';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Bou+Salem%2C+Jendouba%2C+Tunisia';

export const navLinks = [
  ['#services', 'Services'],
  ['#process', 'How It Works'],
  ['#about', 'About'],
  ['#faq', 'FAQ'],
] as const;

export const steps: [string, string, string][] = [
  ['01', 'Send Your Documents', 'Send the documents through WhatsApp.'],
  ['02', 'Receive Your Quote', 'Pricing and expected turnaround.'],
  [
    '03',
    'Receive Your Translation',
    'Certified Arabic–English translation delivered as agreed.',
  ],
];

export const services = [
  {
    title: 'Legal & Corporate',
    text: 'Contracts, agreements, legal and official documents.',
    icon: FileText,
  },
  {
    title: 'Immigration & Certified Documents',
    text: 'Civil-status documents, diplomas, transcripts and immigration paperwork.',
    icon: Globe2,
  },
  {
    title: 'Legalization & Rush',
    text: 'Apostille and legalization assistance with urgent translation requests.',
    icon: ShieldCheck,
  },
  {
    title: 'Court & Legal Interpretation',
    text: 'Arabic–English interpretation for courts, legal meetings and official settings.',
    icon: MessageCircle,
  },
];

export const proofPoints: [string, string][] = [
  ['Official', 'Ministry of Justice-accredited Sworn Translator.'],
  ['Experienced', 'Court interpretation and legal document experience.'],
  ['Precise', 'Terminology-conscious Arabic–English translation.'],
  ['Confidential', 'Sensitive documents handled professionally.'],
];

export const faqs: [string, string][] = [
  [
    'What is a sworn translation?',
    'A sworn translation is an official translation prepared and signed by a Ministry of Justice-accredited translator.',
  ],
  [
    'Will my translation be accepted by an embassy or official authority?',
    'Requirements vary by institution. Monia can help you prepare the documents in the format commonly requested by authorities.',
  ],
  [
    'How long does a translation take?',
    'Timing depends on the document type, length and urgency. You will receive an expected turnaround with your quote.',
  ],
  [
    'How do I send my documents?',
    'Send clear photos or scans through WhatsApp to begin the review.',
  ],
  [
    'Do you offer urgent translation?',
    'Urgent requests can be discussed based on availability and document complexity.',
  ],
  [
    'Can you assist with legalization or Apostille?',
    'Yes. Assistance is available for Apostille and legalization-related steps.',
  ],
  [
    'Is my document confidential?',
    'Yes. Documents are handled professionally and with strict confidentiality.',
  ],
];
