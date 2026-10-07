import { contactClosing } from '../../config/contactPage';
import { company } from '../../config/siteContent';
import { Reveal } from '../ui/Reveal';
import Label from '../ui/Label';

/** CONTACT 7 — the phone number, very large, over a faint lion. */
export default function ContactClosing() {
  return (
    <section className="relative overflow-hidden px-gutter py-28 text-center md:py-36">
      <img src={company.logo.src} alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,400px)] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
        <Reveal><Label line="both">{contactClosing.label}</Label></Reveal>
        <Reveal delay={0.1}>
          <a href={company.phone.href} className="break-words font-serif text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-none transition-colors hover:text-gold-display">
            {company.phone.display}
          </a>
        </Reveal>
        <Reveal delay={0.2} as="p" className="text-[15px] text-muted">{company.hours}</Reveal>
      </div>
    </section>
  );
}
