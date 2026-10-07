/* =========================================================================
   SERVICES PAGE CONTENT — every visible string on /services, in page order.
   Headings are split into a normal part and an *italic* part (the editorial
   accent). Icons are lucide-react names listed in src/components/ui/Icon.jsx.
   ========================================================================= */
import { company } from './siteContent';

const IMG = {
  construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
  trades: 'https://images.unsplash.com/photo-1748442001865-5583ec02ae22?q=80&w=1600&auto=format&fit=crop',
  industrial: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
  logistics: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
};

/* 1 · HERO */
export const hero = {
  label: 'Relion Cleaning & Maintenance Ltd',
  titleMain: 'Our',
  titleItalic: 'Services',
  subtitle: 'From professional staffing to general contracting and mechanical services.',
  chaptersLabel: 'In four chapters',
  // Put a short muted video here (e.g. '/hero.mp4' in /public) and it plays inside the arch instead of the photo.
  video: '',
  image: IMG.construction,
  imageAlt: 'Construction crew at work on site',
  badge: { value: '24/7', label: 'Open every day' },
  scrollLabel: 'Scroll to begin',
};

/* 2 · CONTENTS */
export const contents = {
  label: 'Contents',
  titleMain: 'The',
  titleItalic: 'chapters',
  intro: 'Four staffing lines, one standard of care. Choose a chapter or keep scrolling.',
  rolesSuffix: 'roles',
};

/* 3 · CHAPTERS — one per service line; the photo alternates sides */
export const serviceChapters = [
  {
    id: 'construction',
    image: IMG.construction,
    imageAlt: 'Construction workers on a building site',
    subheading: 'Construction',
    heading: { main: 'Building', italic: 'BC’s Future' },
    title: 'Construction Staffing Solutions',
    description: [
      'Expert construction workers for projects of all sizes. We provide skilled labor for residential, commercial, and industrial construction needs.',
      'Every worker we place is safety-trained and briefed on your site before they start.',
    ],
    positionsLabel: 'Roles we place',
    positions: ['General contractors', 'Heavy equipment operators', 'Concrete workers', 'Framers', 'Finish carpenters'],
    button: { text: 'Get Construction Staff', href: '/contact?service=construction' },
  },
  {
    id: 'skilled-trades',
    image: 'https://images.unsplash.com/photo-1748442001865-5583ec02ae22?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Tradesperson inspecting pipes and valves',
    subheading: 'Skilled Trades',
    heading: { main: 'Skilled', italic: 'Professionals' },
    title: 'Skilled Trade Workers',
    description: [
      'Skilled tradespeople with checked credentials. From electricians to plumbers, we connect you with qualified professionals for the job in hand.',
      'We check every tradesperson’s qualifications before they reach your site, and we stand behind the quality of their work.',
    ],
    positionsLabel: 'Roles we place',
    positions: ['Electricians', 'Plumbers', 'HVAC technicians', 'Carpenters', 'Welders'],
    button: { text: 'Find Trade Workers', href: '/contact?service=skilled-trades' },
  },
  {
    id: 'industrial',
    image: IMG.industrial,
    imageAlt: 'Industrial production facility',
    subheading: 'Industrial',
    heading: { main: 'Manufacturing', italic: 'Excellence' },
    title: 'Industrial & Manufacturing Workers',
    description: [
      'Experienced industrial workers for manufacturing and production facilities. Safety-trained professionals who understand complex industrial environments.',
      'Our industrial workforce is equipped to handle demanding production schedules while maintaining the highest safety standards.',
    ],
    positionsLabel: 'Roles we place',
    positions: ['Machine operators', 'Quality control inspectors', 'Maintenance technicians', 'Production supervisors', 'Forklift operators'],
    button: { text: 'Hire Industrial Staff', href: '/contact?service=industrial' },
  },
  {
    id: 'logistics',
    image: IMG.logistics,
    imageAlt: 'Warehouse aisles with stocked shelves',
    subheading: 'Logistics',
    heading: { main: 'Supply Chain', italic: 'Solutions' },
    title: 'Warehouse & Logistics',
    description: [
      'Efficient warehouse and logistics personnel to keep your operations running smoothly. From order pickers to shipping coordinators, we have the right people.',
      'Our logistics professionals ensure seamless operations, from receiving to shipping, with precision and efficiency.',
    ],
    positionsLabel: 'Roles we place',
    positions: ['Warehouse associates', 'Inventory specialists', 'Shipping & receiving clerks', 'Order pickers', 'Logistics coordinators'],
    button: { text: 'Staff Your Warehouse', href: '/contact?service=logistics' },
  },
];

/* 4 · IN NUMBERS */
export const numbers = {
  label: 'In numbers',
  titleMain: 'Proof,',
  titleItalic: 'not promises',
  items: [
    { value: 100, suffix: '%', label: 'BC Compliant', sub: 'Employment Standards Act' },
    { value: 50, suffix: '+', label: 'Active Workers', sub: 'On major infrastructure projects' },
    { value: 24, suffix: '/7', label: 'Support', sub: 'Project-based availability' },
  ],
};

/* 5 · THE RELION GROUP — cards slide sideways while you scroll (desktop) */
export const group = {
  id: 'group',
  label: 'Full spectrum',
  titleMain: 'The Relion',
  titleItalic: 'Group',
  intro: 'A full spectrum of services under the Relion group, each division operating with the same commitment to quality and compliance.',
  scrollHint: 'Keep scrolling — the cards slide sideways',
  swipeHint: 'Swipe to see all divisions',
  items: [
    { title: 'Professional Staffing', icon: 'Users', description: 'Pre-screened, BC-compliant workforce across general labor, skilled trades, and industrial sectors.' },
    { title: 'General Contracting', icon: 'Wrench', description: 'Full-scope contracting for residential, commercial, and industrial projects from start to completion.' },
    { title: 'Mechanical Services', icon: 'TrendingUp', description: 'Gas fitting, plumbing, HVAC and heating for homes and businesses — open 24/7.', link: { label: 'View division', href: '/mechanical' } },
    { title: 'Warehousing & Logistics', icon: 'Shield', description: 'Complete warehousing, inventory management, order fulfillment, and distribution solutions.' },
    { title: 'Transportation', icon: 'Clock', description: 'Professional drivers and logistics coordinators for efficient transport across British Columbia.' },
    { title: 'Construction Cleaning', icon: 'Award', description: 'Specialized post-construction cleaning for commercial and residential sites ready for occupancy.' },
  ],
};

/* 6 · OUR PROMISE */
export const promise = {
  label: 'Our promise',
  titleMain: 'Why',
  titleItalic: 'Relion',
  intro: 'Clear agreements, careful vetting and no paperwork headaches on your side.',
  words: ['Vetted', 'Compliant', 'Managed', 'Responsive', 'Flexible', 'Professional'],
  items: [
    { title: 'Vetted Workers', body: 'We check qualifications, training and references before anyone starts.' },
    { title: 'Built for Compliance', body: 'We follow BC Employment Standards and WorkSafeBC requirements.' },
    { title: 'Complete Management', body: 'We handle all hiring, onboarding, and workforce administration.' },
    { title: 'Here Around the Clock', body: 'Open 24/7, Monday to Sunday — a real person answers.' },
    { title: 'Flexible Solutions', body: 'Temporary, permanent, and project-based staffing options.' },
    { title: 'Clear Agreements', body: 'Upfront terms and pricing, agreed in writing before work begins.' },
  ],
};

/* 7 · CLOSING */
export const closing = {
  label: 'Let us help',
  titleMain: 'Ready to get',
  titleItalic: 'started?',
  body: 'Pricing varies by service type, duration, and requirements. Contact us for a custom quote tailored to your project.',
  buttons: [
    { text: 'Request a quote', href: '/contact#reach', variant: 'primary' },
    { text: 'Call us', href: company.phone.href, variant: 'outline' },
  ],
};

/* Section order & visibility — reorder or set enabled:false to hide */
export const sections = [
  { id: 'hero', enabled: true },
  { id: 'contents', enabled: true },
  { id: 'chapters', enabled: true },
  { id: 'numbers', enabled: false },  // stats — turn on once you have real figures
  { id: 'group', enabled: true },
  { id: 'promise', enabled: true },
  { id: 'closing', enabled: true },
];
