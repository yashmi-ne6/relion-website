import { where } from '../../config/contactPage';
import { company } from '../../config/siteContent';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { TextLink } from '../ui/Button';

/** Soft illustrated map with a gold pin — shown until a real map link is added. */
function IllustratedMap() {
  return (
    <div className="absolute inset-0 bg-[#F3F1E8]" role="img" aria-label={`Map showing ${company.shortName}`}>
      <svg className="h-full w-full" viewBox="0 0 520 600" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
        <path d="M-20 120 C120 160 200 80 320 140 S520 200 560 160" stroke="#D9D2BF" strokeWidth="10" />
        <path d="M-20 330 C140 300 220 380 360 340 S500 300 560 320" stroke="#D9D2BF" strokeWidth="16" />
        <path d="M160 -20 C190 140 140 300 210 620" stroke="#DCE3D8" strokeWidth="22" />
        <path d="M380 -20 C350 160 420 380 360 620" stroke="#D9D2BF" strokeWidth="6" />
        <path d="M-20 480 C160 470 300 520 560 470" stroke="#D9D2BF" strokeWidth="6" />
      </svg>
      <div className="absolute left-1/2 top-[46%] flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <span className="mb-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-ivory">{company.shortName}</span>
        <span className="h-4 w-4 rounded-full bg-gold-display shadow-[0_0_0_8px_rgb(200_183_128/.3)]" />
      </div>
    </div>
  );
}

/** CONTACT 6 — service area / office, with a map in an arch frame. */
export default function Where() {
  return (
    <section id={where.id} className="bg-sage px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{where.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6.5vw,4.5rem)] font-medium leading-[0.95]" lines={[<>{where.titleMain} <em className="italic">{where.titleItalic}</em></>]} />
          {where.address && <Reveal delay={0.1} as="p" className="max-w-[460px] text-base leading-relaxed text-ink-soft">{where.address}</Reveal>}
          <Reveal delay={0.2} as="ul" className="mt-2 grid max-w-[520px] grid-cols-2 gap-x-10 gap-y-3 border-t border-gold pt-6 text-base">
            {where.cities.map((c, i) => (
              <li key={`${c}-${i}`} className="flex items-center gap-3"><span className="h-px w-[18px] bg-gold" aria-hidden="true" />{c}</li>
            ))}
          </Reveal>
          {where.directions.href && <Reveal delay={0.3}><TextLink href={where.directions.href} target="_blank" rel="noopener noreferrer">{where.directions.text}</TextLink></Reveal>}
        </div>

        <Reveal delay={0.1} className="arch relative mx-auto aspect-[520/600] w-[min(82vw,520px)] border border-gold lg:w-[min(36vw,520px)]">
          {where.mapEmbedUrl ? (
            <iframe
              title={`Map — ${company.shortName}`}
              src={where.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 [filter:sepia(.25)_saturate(.7)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <IllustratedMap />
          )}
        </Reveal>
      </div>
    </section>
  );
}
