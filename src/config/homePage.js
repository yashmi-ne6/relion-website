/* =========================================================================
   HOME PAGE CONTENT — every visible string on /, in page order.
   Text in [brackets] is a placeholder — replace it with your real details.
   ========================================================================= */
import { serviceChapters } from './servicesPage';
import { mechServices } from './mechanicalPage';
import { company } from './siteContent';

const u = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1400&auto=format&fit=crop`;

export const homeSeo = {
  title: 'Relion Cleaning & Maintenance Ltd — Mechanical, Staffing & Site Services in BC',
  description: 'Plumbing, gas fitting, HVAC and heating, plus skilled workers and site services for homes, contractors and businesses in West Vancouver, BC. Open 24/7. Call +1 (604) 368-1992.',
};

/* 1 · HERO — "We keep ___": the gold words roll every few seconds and the
   arch photo + "Now showing" label change with them. */
export const homeHero = {
  label: 'Relion · West Vancouver, BC',
  titleMain: 'We keep',
  rotateSeconds: 2.6,
  words: [
    { text: 'water flowing.', service: 'Plumbing', icon: 'plumbing', image: u('1694827893591-af9b80361599'), alt: 'Copper water pipes running through a wall' },
    { text: 'gas safe.', service: 'Gas Fitting', icon: 'gas', image: u('1739598752069-6806ce5d762a'), alt: 'Blue gas flame on a stove burner' },
    { text: 'air fresh.', service: 'HVAC', icon: 'hvac', image: u('1776860155275-eee24bfb1dee'), alt: 'Modern home with a heat pump outside' },
    { text: 'homes warm.', service: 'Heating Systems', icon: 'heating', image: u('1698933787134-af2d451985c7'), alt: 'Warm living room with a lit fireplace' },
    { text: 'sites staffed.', service: 'Staffing', icon: 'projects', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop', alt: 'Construction crew on site' },
  ],
  nowShowing: 'Now showing',
  subtitle: 'Plumbing, gas fitting, HVAC and heating — plus skilled workers for every project. One reliable team in West Vancouver, open 24/7.',
  buttons: [
    { text: 'Book a technician', href: '/contact?service=mechanical', variant: 'primary' },
    { text: 'Hire workers', href: '/contact?service=construction', variant: 'outline' },
  ],
  trust: ['Open 24/7 · Monday to Sunday', 'Upfront, clear quotes', 'Clean, respectful work', 'Serving West Vancouver'],
};

/* 2 · START HERE — three doors (icon: fix | crew | phone) */
export const homePicker = {
  label: 'Start here',
  titleMain: 'What do you',
  titleItalic: 'need today?',
  intro: 'Pick one and we’ll take you straight there.',
  items: [
    { icon: 'fix', title: 'Fix or install something', text: 'Plumbing, gas, HVAC or heating at your home or business.', cta: 'Book a technician', href: '/mechanical' },
    { icon: 'phone', title: 'Something urgent', text: 'Burst pipe, no heat or no hot water? We answer 24/7, Monday to Sunday.', cta: 'Call us now', href: 'tel:+16043681992' },
  ],
};

/* 3 · ALL IN ONE — the house drawing. Each step lights up one part in gold
   (part: plumbing | gas | hvac | heating | staffing — matches the drawing). */
export const homeHouse = {
  label: 'All in one place',
  titleMain: 'Inside every',
  titleItalic: 'building',
  intro: 'Scroll, and each part of the drawing lights up in gold as we reach it.',
  steps: [
    { part: 'plumbing', title: 'Plumbing', text: 'Water heater, pipes, taps and shower.', link: { text: 'Explore plumbing →', href: '/mechanical#plumbing' } },
    { part: 'gas', title: 'Gas Fitting', text: 'Meter, gas line and stove.', link: { text: 'Explore gas fitting →', href: '/mechanical#gas-fitting' } },
    { part: 'hvac', title: 'HVAC', text: 'Outdoor unit and ducts.', link: { text: 'Explore HVAC →', href: '/mechanical#hvac' } },
    { part: 'heating', title: 'Heating Systems', text: 'Furnace and radiators.', link: { text: 'Explore heating →', href: '/mechanical#heating' } },
    { part: 'staffing', title: 'Staffing', text: 'Skilled crews on site.', link: { text: 'Explore staffing →', href: '/services' } },
  ],
};

/* (optional) MANIFESTO — words darken one by one as you scroll.
   Use { img } for a small pill photo, { em } for italic gold words. */
export const homeIntro = {
  label: 'Who we are',
  parts: [
    'Relion is a', { em: 'British Columbia' }, 'company',
    { img: u('1596394723269-b2cbca4e6313') },
    'that fixes, installs and maintains — and puts skilled, reliable people',
    { img: 'https://images.unsplash.com/photo-1771122453274-d3270e73cf94?q=80&w=400&auto=format&fit=crop' },
    'to work on the projects that', { em: 'keep the province moving.' },
  ],
  link: { text: 'Our story →', href: '/about' },
};

/* 4 · WHAT WE DO — Mechanical leads, workforce follows */
export const homeWhat = {
  label: 'What we do',
  titleMain: 'Two sides,',
  titleItalic: 'one standard',
  main: {
    eyebrow: 'Our main services',
    titleMain: 'Relion',
    titleItalic: 'Mechanical',
    text: 'Trusted trades for homes and businesses — installed, repaired and maintained.',
    items: mechServices.map((s) => ({ label: s.name, href: `/mechanical#${s.id}` })),
    button: { text: 'Explore Mechanical', href: '/mechanical' },
  },
  side: {
    eyebrow: 'Workforce & site services',
    titleMain: 'People and support',
    titleItalic: 'for every project',
    items: [
      ...serviceChapters.map((c) => ({ label: `${c.subheading} staffing`, href: `/services#${c.id}` })),
      { label: 'Site cleaning & maintenance', href: '/contact?service=other' },
    ],
    link: { text: 'See all services →', href: '/services' },
  },
};

/* (optional) WHY RELION */
export const homeWhy = {
  label: 'Why Relion',
  titleMain: 'Reliable,',
  titleItalic: 'by design',
  intro: 'The name says it. We built Relion around showing up, doing it right, and doing it safely.',
  items: [
    { title: 'Verified people', text: 'Every worker screened, with tickets and credentials checked.' },
    { title: 'A wide network', text: 'Skilled trades and general labour ready when you need them.' },
    { title: 'Quick response', text: 'Fast turnaround when a project can’t wait.' },
    { title: 'Flexible terms', text: 'Short jobs, contracts or permanent roles.' },
  ],
};

/* (optional) PROOF — replace the [bracketed] values with your real numbers */
export const homeProof = {
  label: 'On major projects',
  titleMain: 'Trusted where the',
  titleItalic: 'stakes are high',
  text: '[One line on your biggest current project — e.g. a utility meter-replacement programme.]',
  partners: ['[Partner logo]', '[Partner logo]', '[Partner logo]'],
  stats: [
    { value: '[50+]', label: 'Certified people on site' },
    { value: '[10+]', label: 'Years of experience' },
    { value: '100%', label: 'BC Employment Standards compliant' },
    { value: '[ ]', label: 'Projects completed' },
  ],
};

/* 8 · WHERE WE WORK — the cities you serve. x / y are positions on the drawn
   map (0–760 across, 0–680 down); side = which side of the dot the name sits. */
export const homeMap = {
  label: 'Service area',
  titleMain: 'Where we',
  titleItalic: 'work',
  text: 'Proudly serving West Vancouver. Not sure if we cover your address? Just ask — we’re happy to check.',
  button: { text: 'Open in Google Maps', href: company.mapsUrl, external: true },
  cities: [
    { name: 'West Vancouver', x: 465, y: 583, side: 'right' },
  ],
};

/* Phones: Call now · Book a technician, fixed at the bottom of the home page */
export const homeCallBar = { call: 'Call now', book: 'Book a technician', bookHref: '/contact?service=mechanical' };

/* 9 · TWO DOORS */
export const homeDoors = [
  { eyebrow: 'For clients', titleMain: 'Need a job', titleItalic: 'done?', text: 'Tell us what you need — a repair, a crew, a contract.', button: { text: 'Request a quote', href: '/contact#reach', variant: 'primary' }, tone: 'paper' },
  { eyebrow: 'For businesses', titleMain: 'Need a', titleItalic: 'crew?', text: 'Skilled tradespeople and general labour for construction, industrial and logistics projects.', button: { text: 'Explore workforce services', href: '/services', variant: 'outline' }, tone: 'sage' },
];

/* Order of sections. The three marked (optional) are switched off in the new
   layout — set enabled: true to bring any of them back. */
export const homeSections = [
  { id: 'hero', enabled: true },
  { id: 'picker', enabled: true },
  { id: 'house', enabled: true },
  { id: 'what', enabled: true },
  { id: 'map', enabled: true },
  { id: 'doors', enabled: false },  // "Need a job done? / Need a crew?" cards — off
  { id: 'intro', enabled: false },
  { id: 'why', enabled: false },
  { id: 'proof', enabled: false },
];
