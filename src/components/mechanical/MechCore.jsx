import { mechCore as c, mechServices } from '../../config/mechanicalPage';
import { onAnchorClick } from '../../lib/smoothScroll';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import TradeIcon from '../ui/TradeIcon';
import { roman } from '../ui/Button';

/** MECHANICAL 2 — four tall arch cards. Hover lifts a card and turns it sage;
 *  clicking glides to that service's detail section. */
export default function MechCore() {
  return (
    <section className="px-gutter py-24 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Reveal><Label>{c.label}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.75rem,5.4vw,4.25rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
          </div>
          <Reveal delay={0.1} as="p" className="max-w-[420px] text-base leading-relaxed text-ink-soft">{c.intro}</Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {mechServices.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="h-full">
              <a
                href={`#${s.id}`}
                onClick={onAnchorClick(s.id)}
                className="group flex h-full flex-col gap-4 rounded-b-[22px] rounded-t-[160px] border border-line bg-paper px-7 pb-8 pt-10 transition-[transform,background-color,border-color,box-shadow] duration-500 hover:-translate-y-3 hover:border-gold hover:bg-sage hover:shadow-[0_30px_50px_-30px_rgb(31_61_58/.35)]"
              >
                <div className="flex h-36 items-center justify-center text-ink">
                  <TradeIcon name={s.icon} className="h-24 w-24 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="font-serif text-[40px] leading-none text-gold-display">{roman(i)}</span>
                <h3 className="font-serif text-[clamp(2rem,2.6vw,2.5rem)] font-medium leading-none transition-[font-style] group-hover:italic">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.short}</p>
                <ul className="flex flex-col gap-1.5 border-t border-line pt-3.5 text-[13px] text-ink-soft group-hover:border-gold">
                  {s.highlights.map((x) => <li key={x}>— {x}</li>)}
                </ul>
                <span className="gold-underline mt-auto self-start pt-2 text-sm font-semibold">{c.exploreText} {s.name.toLowerCase()} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
