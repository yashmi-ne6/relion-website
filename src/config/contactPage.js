/* =========================================================================
   CONTACT PAGE CONTENT — every visible string on /contact, in page order.
   Company phone/email/hours/location come from src/config/siteContent.js.
   Text in [brackets] is a placeholder — replace it with your real details.
   ========================================================================= */
import { company } from './siteContent';

/* 1 · HERO */
export const contactHero = {
  label: 'Contact',
  titleMain: 'Let’s',
  titleItalic: 'talk.',
  subtitle: 'Call or email any time — we’re open 24/7, Monday to Sunday.',
  callButton: 'Call us',
  emailButton: 'Email us',
  image: 'https://images.unsplash.com/photo-1698933787134-af2d451985c7?q=80&w=1600&auto=format&fit=crop',
  imageAlt: 'Warm living room with a lit fireplace',
  badge: { label: 'Open every day', value: '24/7' },
};

/* 2 · HOW TO REACH US — phone, email, address and hours (all from siteContent.js) */
export const ways = {
  id: 'reach',
  label: 'Reach us',
  titleMain: 'Get in',
  titleItalic: 'touch',
  intro: 'Call or email any time, day or night. Every call and message reaches a real person on our team.',
  items: [
    { label: 'Phone', value: company.phone.display, href: company.phone.href, hint: 'Tap to call →' },
    { label: 'Email', value: company.email, href: `mailto:${company.email}`, copy: true },
    { label: 'Address', value: company.address, href: company.mapsUrl, hint: 'Open in Google Maps →', external: true },
    { label: 'Hours', value: company.hours },
  ],
  copyLabel: 'Copy',
  copiedLabel: 'Copied ✓',
};

/* 3 · QUOTE FORM — switched off for now (see contactSections). Turn it back on
   by setting { id: 'form', enabled: true }.
   endpoint: paste a Formspree form URL (e.g. 'https://formspree.io/f/abcdwxyz') to have
   enquiries emailed to you automatically. Left empty, "Send" opens the visitor's email
   app with the message pre-written to company.email. */
export const quoteForm = {
  id: 'quote',
  endpoint: '',
  label: 'Request a quote',
  titleMain: 'Tell us what',
  titleItalic: 'you need',
  intro: 'Three short steps. Pricing depends on the service, duration and requirements, so the more you share, the sharper our quote.',
  steps: ['About you', 'What you need', 'Your message'],
  // `id` matches the ?service=… link from each Services chapter button
  services: [
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'gas-fitting', label: 'Gas Fitting' },
    { id: 'hvac', label: 'HVAC' },
    { id: 'heating', label: 'Heating Systems' },
    { id: 'construction', label: 'Construction' },
    { id: 'skilled-trades', label: 'Skilled Trades' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'mechanical', label: 'Other mechanical' },
    { id: 'other', label: 'Other' },
  ],
  staffingTypes: ['Temporary', 'Permanent', 'Project-based'],
  prefillNote: 'Pre-selected from the service you were viewing',
  messagePlaceholder: 'Roles, shifts, site details, anything that helps us quote…',
  thanks: {
    titleMain: 'Thank',
    titleItalic: 'you.',
    body: 'Your request is with our team. We’ll be in touch within [X hours].',
    mailtoBody: 'Your email app should have opened with your message ready to send. Press send there and we’ll be in touch within [X hours].',
    link: { text: 'Back to our services →', href: '/services' },
  },
  errorText: 'Something went wrong sending your request. Please call or email us instead.',
};

/* 4 · TWO KINDS OF VISITORS */
export const audience = [
  { eyebrow: 'For clients', titleMain: 'Need a', titleItalic: 'job done?', body: 'Call or email us with what you need — a repair, an installation or a crew — and we’ll send a clear quote.', button: { text: 'Call us now', href: company.phone.href }, variant: 'primary' },
  { eyebrow: 'For businesses', titleMain: 'Need a', titleItalic: 'crew?', body: 'Skilled tradespeople and general labour for construction, industrial and logistics projects.', button: { text: 'Workforce services →', href: '/services' }, variant: 'outline' },
];

/* 5 · FAQ */
export const faq = {
  label: 'Before you ask',
  titleMain: 'Questions,',
  titleItalic: 'answered',
  intro: 'Tap a question to open it.',
  items: [
    { q: 'Are you really open 24/7?', a: 'Yes. We take calls every day of the week, Monday to Sunday, day and night — including weekends and holidays.' },
    { q: 'Which areas do you serve?', a: 'We serve homes and businesses across West Vancouver. If you’re nearby and not sure we cover your address, call or email and we’ll let you know.' },
    { q: 'How is pricing worked out?', a: 'Every job is different, so we look at what’s needed first and give you a clear, written quote before any work starts. No surprises on the bill.' },
    { q: 'What should I do if I smell gas?', a: 'Leave the building straight away without switching anything on or off. Once you’re outside, call FortisBC’s 24-hour emergency line or 911. When it’s safe, we can inspect and repair the problem.' },
    { q: 'Can you supply workers for a project?', a: 'Yes. We provide skilled tradespeople and general labour for construction, industrial and logistics work — short-term, by contract or for the length of a project.' },
  ],
};

/* 6 · WHERE WE WORK
   mapEmbedUrl: paste an OpenStreetMap or Google Maps "embed" URL to show a real map.
   Left empty, a soft illustrated map with a gold pin is shown. */
export const where = {
  id: 'where',
  label: 'Where we work',
  titleMain: 'Proudly serving',
  titleItalic: 'West Vancouver',
  address: '',
  cities: ['West Vancouver'],
  directions: { text: 'Open in Google Maps →', href: company.mapsUrl },
  mapEmbedUrl: '',
};

/* 7 · CLOSING */
export const contactClosing = {
  label: 'Prefer to talk?',
};

/* Mobile quick-contact bar (phones only) */
export const quickBar = { call: 'Call', email: 'Email' };

export const contactSeo = {
  title: 'Contact — Relion Cleaning & Maintenance Ltd',
  description: 'Contact Relion Cleaning & Maintenance — phone +1 (604) 368-1992, open 24/7, Monday to Sunday. Serving West Vancouver, BC.',
};

export const contactSections = [
  { id: 'hero', enabled: true },
  { id: 'ways', enabled: true },
  { id: 'form', enabled: false },  // quote form switched off for now
  { id: 'audience', enabled: false },  // "Need a job done? / Need a crew?" cards — off
  { id: 'faq', enabled: true },
  { id: 'where', enabled: true },
  { id: 'closing', enabled: true },
];
