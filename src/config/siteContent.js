/* =========================================================================
   SITE-WIDE CONTENT — company identity, navigation, footer, SEO.
   Shared by every page of the website.
   ========================================================================= */

export const company = {
  name: 'Relion Cleaning & Maintenance Ltd',
  shortName: 'Relion',
  tagline: 'From staffing solutions to general contracting — all at your service.',
  logo: { src: '/logo.png', alt: 'Relion Cleaning & Maintenance Ltd' },
  phone: { display: '+1 (604) 368-1992', href: 'tel:+16043681992' },
  email: 'relionmechanical@gmail.com',
  hours: 'Open 24/7 · Monday to Sunday',
  address: 'West Vancouver, BC',
  location: 'West Vancouver, BC',
  // Google Maps link used by every "Open in Google Maps" button
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=West+Vancouver%2C+BC',
  copyrightYear: 2026,
};

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/mechanical', label: 'Mechanical' },
  { path: '/contact', label: 'Contact' },
];

export const headerCta = { text: 'Contact us', href: '/contact' };

/* Opening intro (first visit of a session): a gold line draws in, the lion
   walks across from the right revealing the page, then climbs into the logo.
   enabled: false turns it off. Timings are in seconds. */
export const loader = {
  enabled: true,
  walkSeconds: 2.8,   // how long the walk across the screen takes
  stepSeconds: 0.7,  // one full stride of the legs
  revealAt: 1.1,      // when the page starts appearing behind the lion
};

export const footerContent = {
  wordmark: 'RELION',
  mechanicalHeading: 'Mechanical',
  servicesHeading: 'Workforce',
  companyHeading: 'Company',
  contactHeading: 'Contact',
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

/* SEO for /services (each other page has its own in its config file) */
export const seo = {
  title: 'Services — Relion Cleaning & Maintenance Ltd',
  description:
    'Relion Cleaning & Maintenance Ltd provides professional staffing for construction, skilled trades, industrial and logistics work across British Columbia.',
};
