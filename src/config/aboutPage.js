/* =========================================================================
   ABOUT PAGE CONTENT — every visible string on /about, in page order.
   Text in [brackets] is a placeholder — replace it with your real details.
   ========================================================================= */

export const aboutSeo = {
  title: 'About Us — Relion Cleaning & Maintenance Ltd',
  description: 'Relion Cleaning & Maintenance is a new, locally owned West Vancouver company — plumbing, gas fitting, HVAC and heating with upfront prices, honest advice and 24/7 availability.',
};

/* 1 · HERO */
export const aboutHero = {
  titleMain: 'About',
  titleItalic: 'Relion',
  subtitle: 'A new, locally owned West Vancouver company — built on honest work, clear prices and doing every job properly.',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
  imageAlt: 'Crew in safety vests on a building site',
};

/* 2 · STORY  (first letter of the first paragraph becomes the large initial) */
export const aboutStory = {
  label: 'Our story',
  titleMain: 'A new name,',
  titleItalic: 'built on trust',
  established: '',
  paragraphs: [
    'Relion Cleaning & Maintenance is a new West Vancouver company, started with one simple idea: homeowners and businesses deserve tradespeople they can rely on — people who show up when they say they will, explain things clearly and leave the place better than they found it.',
    'We look after plumbing, gas fitting, HVAC and heating, and we can bring skilled people to your project. Whatever the job, you get a clear price before we start, honest advice and work that is done properly.',
  ],
  quote: 'New name. Old-fashioned standards.',
  values: ['Honesty', 'Safety', 'Quality', 'Respect'],
};

/* 3 · DIRECTOR — switched off for now (see aboutSections) */
export const aboutDirector = {
  enabled: false,
  label: 'Leadership',
  name: '[Director name]',
  role: 'Managing Director',
  image: '',  // e.g. '/team/director.jpg' in /public
  imageAlt: 'Portrait of the managing director',
  paragraphs: [
    '[Two short paragraphs: years of experience in workforce and trades, what drives them, and the projects the company has grown into under their lead.]',
    '[Optional: a personal line about why they started Relion.]',
  ],
  signature: '[Signature]',
};

/* 4 · MISSION */
export const aboutMission = {
  label: 'Our mission',
  italic: 'To build lasting partnerships',
  rest: '— with staffing and trade work that respects every worker, follows every rule, and helps every client succeed.',
  stats: [
    { value: '[10+]', label: 'Years' },
    { value: '[50+]', label: 'Team members' },
    { value: '100%', label: 'Compliance' },
  ],
};

/* 5 · TEAM — pointing at a trade shows its photo */
export const aboutTeam = {
  label: 'Our people',
  titleMain: 'The trades',
  titleItalic: 'behind the work',
  text: '[Currently on: name of major project.] Every person ticketed and verified before they reach site.',
  trades: [
    { name: 'Class A & B Gas Fitters', image: 'https://images.unsplash.com/photo-1739598752069-6806ce5d762a?q=80&w=800&auto=format&fit=crop' },
    { name: 'Ticketed Plumbers', image: 'https://images.unsplash.com/photo-1694827893591-af9b80361599?q=80&w=800&auto=format&fit=crop' },
    { name: 'Millworkers', image: 'https://images.unsplash.com/photo-1771122453274-d3270e73cf94?q=80&w=800&auto=format&fit=crop' },
    { name: 'Pipeline Workers', image: 'https://images.unsplash.com/photo-1650551182991-b07558247564?q=80&w=800&auto=format&fit=crop' },
    { name: 'Field Service Leaders', image: 'https://images.unsplash.com/photo-1694521787193-9293daeddbaa?q=80&w=800&auto=format&fit=crop' },
  ],
};

/* 6 · STANDARDS */
export const aboutStandards = {
  label: 'Our promise',
  titleMain: 'Six promises we',
  titleItalic: 'keep',
  button: { text: 'Contact us', href: '/contact' },
  items: [
    { title: 'Upfront pricing', text: 'A clear quote before any work starts — no surprises on the bill.' },
    { title: 'Here around the clock', text: 'Open 24/7, every day of the week. A real person answers.' },
    { title: 'Respect for your home', text: 'We protect your floors, keep the work area tidy and clean up before we leave.' },
    { title: 'Safety first', text: 'Every job tested and checked before we call it done.' },
    { title: 'Honest advice', text: 'If a repair makes more sense than a replacement, we’ll tell you.' },
    { title: 'Local and accountable', text: 'Based in West Vancouver — your neighbours, not a call centre.' },
  ],
};

/* 7 · CLOSING (same style as other pages) */
export const aboutClosing = {
  label: 'Let’s work together',
  titleMain: 'Build with',
  titleItalic: 'Relion',
  body: 'Whether it’s a repair, an installation or a crew for your project — we’d like to hear from you, any time of day.',
  buttons: [
    { text: 'Contact us', href: '/contact', variant: 'primary' },
    { text: 'Our services', href: '/mechanical', variant: 'outline' },
  ],
};

/* Order of sections. Director, mission and team are switched off for now —
   set enabled: true to bring one back once you have the details. */
export const aboutSections = [
  { id: 'hero', enabled: true },
  { id: 'story', enabled: true },
  { id: 'standards', enabled: true },
  { id: 'closing', enabled: true },
  { id: 'director', enabled: false },
  { id: 'mission', enabled: false },
  { id: 'team', enabled: false },
];
