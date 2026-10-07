import { homePicker as c } from '../../config/homePage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import TradeIcon from '../ui/TradeIcon';
import { SmartLink, roman } from '../ui/Button';

/** HOME 2 — "What do you need today?": three doors that send each visitor to the right page. */
export default function HomePicker() {
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Reveal><Label>{c.label}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.75rem,5.6vw,4.25rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
          </div>
          <Reveal delay={0.1} as="p" className="max-w-[360px] text-base leading-relaxed text-ink-soft">{c.intro}</Reveal>
        </div>
        <div className={`grid gap-5 md:gap-6 ${c.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {c.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="h-full">
              <SmartLink
                href={it.href}
                className="group flex h-full min-h-[320px] flex-col gap-4 rounded-3xl border border-line bg-paper p-7 transition-[transform,background-color,border-color,box-shadow] duration-500 hover:-translate-y-2.5 hover:border-gold hover:bg-sage hover:shadow-[0_30px_50px_-30px_rgb(31_61_58/.35)] md:p-9"
              >
                <span className="flex items-center justify-between">
                  <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold text-ink"><TradeIcon name={it.icon} className="h-7 w-7" strokeWidth={1.2} /></span>
                  <span className="font-serif text-[30px] text-gold-display">{roman(i)}</span>
                </span>
                <span className="font-serif text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.02]">{it.title}</span>
                <span className="text-[15px] leading-relaxed text-muted">{it.text}</span>
                <span className="mt-auto flex items-center justify-between border-t border-line pt-5 text-[15px] font-semibold group-hover:border-gold">
                  {it.cta}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-ivory" aria-hidden="true">→</span>
                </span>
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
