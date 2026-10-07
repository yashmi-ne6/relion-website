/* =========================================================================
   MECHANICAL PAGE CONTENT — every visible string on /mechanical, in page order.
   The four main services (plumbing, gas fitting, HVAC, heating) are listed once
   in `mechServices`; the hero chips, the four cards and the detail sections all
   read from it. Text in [brackets] is a placeholder — replace with real details.
   Photos: free Unsplash images for now — swap in your own job photos (files go in /public/photos).
   ========================================================================= */
import { company } from './siteContent';

const u = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

export const mechSeo = {
  title: 'Mechanical Services — Plumbing, Gas Fitting, HVAC & Heating | Relion',
  description: 'Plumbing, gas fitting, HVAC and heating — installed, repaired and maintained for homes and businesses in West Vancouver, BC.',
};

/* 1 · HERO */
export const mechHero = {
  label: 'Relion Mechanical',
  titleMain: 'Mechanical',
  titleItalic: 'Services',
  subtitle: 'Plumbing, gas fitting, HVAC and heating — installed, repaired and maintained for homes and businesses.',
  image: u('1650551182991-b07558247564'),
  imageAlt: 'Mechanical plant room with pipes, valves and gauges',
  badge: { label: 'Open every day', value: '24/7' },
};

/* 2–3 · THE FOUR CORE SERVICES  (icon: plumbing | gas | hvac | heating) */
export const mechServices = [
  {
    id: 'plumbing',
    icon: 'plumbing',
    name: 'Plumbing',
    short: 'Leaks, drains, fixtures, water heaters and full re-pipes.',
    highlights: ['Installations', 'Repairs', 'Maintenance'],
    image: u('1596394723269-b2cbca4e6313'),
    imageAlt: 'Brass pipework with flowing water',
    heading: { main: 'Water that', italic: 'simply works' },
    body: 'From a dripping tap to a full re-pipe, we handle plumbing for homes and businesses across West Vancouver. We find the cause, explain your options in plain terms and leave everything clean and working.',
    whatWeDo: ['Leak detection & repair', 'Drain cleaning', 'Water heaters & tankless', 'Fixtures & re-piping', 'New builds & renovations'],
    signs: ['Dripping taps or damp patches', 'Slow or gurgling drains', 'Low water pressure', 'No hot water, or it runs out fast'],
    button: { text: 'Book a plumber', href: '/contact?service=plumbing' },
  },
  {
    id: 'gas-fitting',
    icon: 'gas',
    name: 'Gas Fitting',
    short: 'Gas lines, appliance hook-ups, meters and safety checks.',
    highlights: ['Line installs', 'Appliance connections', 'Leak testing'],
    image: u('1748442001865-5583ec02ae22'),
    imageAlt: 'Tradesperson inspecting gas pipes and valves',
    heading: { main: 'Safe gas,', italic: 'done right' },
    body: 'Gas work leaves no room for shortcuts. We install and repair gas lines and connect stoves, dryers, fireplaces and BBQs — and every connection is leak-tested before we leave.',
    whatWeDo: ['Gas line installation', 'Stove, dryer & BBQ hook-ups', 'Fireplaces & heaters', 'Meter work', 'Leak testing & safety checks'],
    signs: ['A smell of gas (leave first — see below)', 'Yellow or flickering burner flames', 'New appliance to connect', 'Renovation or new build'],
    button: { text: 'Book a gas fitter', href: '/contact?service=gas-fitting' },
  },
  {
    id: 'hvac',
    icon: 'hvac',
    name: 'HVAC',
    short: 'Ventilation, air conditioning, heat pumps and ductwork.',
    highlights: ['System installs', 'Servicing', 'Air quality'],
    image: u('1776860150305-108ed577d7d4'),
    imageAlt: 'Heat pump installed beside a brick house',
    heading: { main: 'Fresh air,', italic: 'all year' },
    body: 'Heat pumps, air conditioning and ventilation for homes and commercial spaces. We size each system to the building, install it properly and keep it running efficiently with regular servicing.',
    whatWeDo: ['Heat pumps & air conditioning', 'Ventilation & HRV / ERV', 'Ductwork design & repair', 'Seasonal servicing', 'Filters & air quality'],
    signs: ['Rooms too hot or too cold', 'Rising energy bills', 'Stuffy air or condensation', 'Noisy or short-cycling system'],
    button: { text: 'Book an HVAC visit', href: '/contact?service=hvac' },
  },
  {
    id: 'heating',
    icon: 'heating',
    name: 'Heating Systems',
    short: 'Furnaces, boilers, radiant floors and hot-water heating.',
    highlights: ['Furnace & boiler', 'Radiant heat', 'Annual tune-ups'],
    image: u('1599028274511-e02a767949a3'),
    imageAlt: 'Radiator beside a window',
    heading: { main: 'Warm rooms,', italic: 'no worries' },
    body: 'Furnaces, boilers and radiant floor heating — installed, repaired and tuned up. When the heat goes out, we’re available around the clock to get your home or business warm again.',
    whatWeDo: ['Furnace install & repair', 'Boilers & hydronic heating', 'Radiant floor heating', 'Thermostats & controls', 'Annual tune-ups'],
    signs: ['No heat, or uneven heat', 'Pilot light keeps going out', 'Strange smells or noises', 'System over 15 years old'],
    button: { text: 'Book a heating tech', href: '/contact?service=heating' },
  },
];

export const mechCore = {
  label: 'Our core services',
  titleMain: 'Four trades,',
  titleItalic: 'one team',
  intro: 'Everything that keeps water flowing, gas safe, air fresh and rooms warm — under one trusted crew.',
  exploreText: 'Explore',
};

export const mechDetail = {
  whatLabel: 'What we do',
  signsLabel: 'Signs you need us',
  audiences: ['For homes', 'For business'],
  nextAfterLast: { id: 'process', label: 'How a job works' },
};

/* 4 · PROCESS */
export const mechProcess = {
  id: 'process',
  label: 'How a job works',
  titleMain: 'Four steps,',
  titleItalic: 'no surprises',
  steps: [
    { title: 'Call or request', text: 'Tell us what’s wrong or what you’re planning. We book a time that suits you.' },
    { title: 'Visit & assess', text: 'A qualified technician inspects the system and explains the options.' },
    { title: 'Clear quote', text: 'You get the price before any work starts. No hidden extras.' },
    { title: 'Done & safety-checked', text: 'Work is tested, signed off and the site left clean.' },
  ],
};

/* 5 · URGENT HELP */
export const mechEmergency = {
  label: 'Urgent help',
  titleMain: 'Burst pipe? No heat?',
  titleItalic: 'Call now.',
  hours: 'We’re open 24/7 — Monday to Sunday, day and night.',
  gasNote: { strong: 'Smell gas?', text: 'Leave the building first, then call FortisBC’s 24-hour emergency line or 911 from outside.', number: '' },
  phone: company.phone,
  button: 'Call a technician',
};

/* 6 · TRUST */
export const mechTrust = {
  label: 'Peace of mind',
  titleMain: 'Built on',
  titleItalic: 'trust',
  // Add licence / insurance / warranty badges here once you have them, e.g. { value: 'Licensed', label: 'Gas fitting' }
  badges: [],
  audiences: [
    { eyebrow: 'For homes', titleMain: 'Comfort at', titleItalic: 'home', text: 'Repairs, upgrades, new appliances and yearly tune-ups for houses and condos.', link: { text: 'Book a home visit →', href: '/contact?service=mechanical' } },
    { eyebrow: 'For business', titleMain: 'Built for', titleItalic: 'scale', text: 'Commercial installs, new-build mechanical and maintenance contracts for sites and buildings.', link: { text: 'Request a project quote →', href: '/contact?service=mechanical' } },
  ],
};

/* 7 · CLOSING */
export const mechClosing = {
  label: 'Ready when you are',
  titleMain: 'Book a',
  titleItalic: 'technician',
  body: 'Call or email any time — 24/7, every day — and we’ll arrange a visit or send a quote.',
  buttons: [
    { text: 'Contact us', href: '/contact', variant: 'primary' },
    { text: 'Call us', href: company.phone.href, variant: 'outline' },
  ],
};

/* Order of sections on the page — set enabled:false to hide one */
export const mechSections = [
  { id: 'hero', enabled: true },
  { id: 'core', enabled: true },
  { id: 'detail', enabled: true },
  { id: 'process', enabled: true },
  { id: 'emergency', enabled: true },
  { id: 'trust', enabled: true },
  { id: 'closing', enabled: true },
];
