import { company, footerContent as f, navigation } from '../../config/siteContent';
import { serviceChapters } from '../../config/servicesPage';
import { mechServices } from '../../config/mechanicalPage';
import { SmartLink } from '../ui/Button';

const heading = 'mb-1 text-xs uppercase tracking-[0.22em] text-gold-text';
const link = 'transition-colors hover:text-gold-text';

/** Light footer: brand, link columns, contact, and RELION across the full width. */
export default function Footer() {
  return (
    <footer className="border-t border-gold bg-sand px-gutter pb-8 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr]">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <img src={company.logo.src} alt={company.logo.alt} className="h-16 w-auto self-start md:h-[72px]" />
            <p className="max-w-[340px] text-sm leading-relaxed text-muted">{company.tagline}</p>
          </div>

          <nav aria-label="Mechanical services" className="flex flex-col gap-2.5 text-sm">
            <h2 className={heading}>{f.mechanicalHeading}</h2>
            {mechServices.map((s) => <SmartLink key={s.id} href={`/mechanical#${s.id}`} className={link}>{s.name}</SmartLink>)}
          </nav>

          <nav aria-label="Workforce services" className="flex flex-col gap-2.5 text-sm">
            <h2 className={heading}>{f.servicesHeading}</h2>
            {serviceChapters.map((c) => <SmartLink key={c.id} href={`/services#${c.id}`} className={link}>{c.subheading}</SmartLink>)}
          </nav>

          <nav aria-label="Company" className="flex flex-col gap-2.5 text-sm">
            <h2 className={heading}>{f.companyHeading}</h2>
            {navigation.filter((n) => n.path !== '/services' && n.path !== '/mechanical').map((n) => <SmartLink key={n.path} href={n.path} className={link}>{n.label}</SmartLink>)}
          </nav>

          <div className="col-span-2 flex flex-col gap-2.5 text-sm text-ink-soft sm:col-span-1">
            <h2 className={heading}>{f.contactHeading}</h2>
            <a href={company.phone.href} className={link}>{company.phone.display}</a>
            <a href={`mailto:${company.email}`} className={`${link} break-all`}>{company.email}</a>
            <span>{company.hours}</span>
            <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>{company.address || company.location}</a>
          </div>
        </div>

        <p className="my-12 select-none text-center font-serif text-[clamp(4.5rem,21vw,19rem)] font-medium leading-[0.8] tracking-[0.08em] text-ink md:my-16" aria-hidden="true">
          {f.wordmark}
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-5 text-xs text-muted sm:flex-row">
          <span>© {company.copyrightYear} {company.name}. All rights reserved.</span>
          <span className="flex gap-4">{f.legal.map((l) => <SmartLink key={l.href} href={l.href} className={link}>{l.label}</SmartLink>)}</span>
        </div>
      </div>
    </footer>
  );
}
