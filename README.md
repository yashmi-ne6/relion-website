# Relion — website

Light editorial design: ivory paper, Relion green, gold details, serif headings.

**Pages:** Home `/` · About `/about` · Services `/services` · Mechanical `/mechanical` · Contact `/contact` (the old `/careers` address now opens the Home page)

## Run it
Open a terminal *inside this folder* (you should see package.json here), then:
```bash
npm install
npm run dev        # open http://localhost:5173
npm run build      # production files in dist/
```

## Edit it — every page's text lives in one file
| Page | File |
|---|---|
| Home | `src/config/homePage.js` |
| About | `src/config/aboutPage.js` |
| Services (workforce) | `src/config/servicesPage.js` |
| Mechanical (plumbing, gas, HVAC, heating) | `src/config/mechanicalPage.js` |
| Contact (phone, email, address, hours, FAQ, map) | `src/config/contactPage.js` |
| Company details (phone, email, address, hours), menu, footer, opening lion intro | `src/config/siteContent.js` |

- Text in **[square brackets]** is a placeholder — replace it with your real details.
- Phone (+1 604-368-1992), email (relionmechanical@gmail.com), hours (Open 24/7 · Monday to Sunday) and location (West Vancouver, BC) are set in `company` in `siteContent.js`. Every page, the footer and the Contact page read from these. Add a street address there later if you want one shown.
- To hide a section, set `enabled: false` in that page's `…Sections` list at the bottom of its file.
- Photos: all photos are free Unsplash stock (`public/photos/og-image.jpg` is the link-preview card) — replace any URL with your own photo by putting the file in `public/photos/` and using e.g. `'/photos/plumbing.jpg'`.
- Colours & fonts: `src/styles/tokens.css` · Animation timings: `src/config/motion.js` · Logo: `public/logo.png`

## Home page sections
Lion intro → rotating "We keep …" hero + trust strip → "What do you need today?" → house drawing that lights up as you scroll → Mechanical / workforce cards → map of BC. On phones a Call now / Book a technician bar stays at the bottom.
- Hero words, photos and trust line: `homeHero` in `homePage.js`
- Map: service area is West Vancouver (`homeMap.cities`) — add more cities there if you expand. The "Open in Google Maps" buttons and footer address use `company.mapsUrl` in `siteContent.js`.
- The before & after slider, reviews and the Careers page have been removed. The older manifesto, why-Relion and numbers sections are switched off in `homeSections`.

## Opening lion intro
On a visitor's first page view, a gold line draws in, the Relion lion walks across from the right and reveals the page behind it, then shrinks into the menu logo (about 4½ seconds). It plays once per browser tab, has a **Skip** button (or click anywhere), and visitors who turn off animations in their device settings get a simple logo fade instead.
- Settings: `loader` in `siteContent.js` — `enabled: false` turns it off; `walkSeconds` = how long the walk takes; `stepSeconds` = speed of each step.
- The lion pieces are in `public/intro/` (cut from the logo). For a crisper lion, ask your designer for the original logo file and replace these images at the same size (588×384).

## Switched-off sections (company is new)
Turn any back on with `enabled: true` in that page's `…Sections` list:
- **About:** director, mission, team (`aboutSections`). The "Six promises" list is in `aboutStandards`.
- **Mechanical:** licence / insurance badges — add them to `mechTrust.badges` and the row appears.
- **Services:** the "In numbers" stats (`servicesSections`, id `numbers`) — add real figures first.
- **Home & Contact:** the "Need a job done? / Need a crew?" cards (`doors` in `homeSections`, `audience` in `contactSections`).
- **Contact:** the quote form (`contactSections`, id `form`) — see Forms below.

## Forms
- **Quote form** — currently switched off; the Contact page shows phone, email, address and hours instead. To bring it back, set `enabled: true` for `form` in `contactSections` and set `quoteForm.endpoint` in `contactPage.js` to a Formspree form URL.

Until an endpoint is set, "Send" opens the visitor's email app with the details pre-written to the company email.

## Hosting & security
- **Netlify / Cloudflare Pages:** `public/_redirects` (page links) and `public/_headers` (security headers) are already set up.
- **Vercel:** `vercel.json` does the same job.
- Security headers included: Content-Security-Policy (only Relion's own files, Unsplash photos, Formspree and Google Maps are allowed), HTTPS-only (HSTS), no framing of the site by other sites, no camera/mic/location access, safe referrer policy.
- If you add a new outside service later (video host, chat widget, analytics), add its address to the Content-Security-Policy line in both files, or it will be blocked.
- Forms: honeypot spam trap included. In Formspree, also turn on its spam protection (reCAPTCHA / Turnstile) and email notifications.
- Keep packages up to date: run `npm audit` every few months.
