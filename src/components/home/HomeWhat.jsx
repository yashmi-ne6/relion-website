import { homeWhat as c } from '../../config/homePage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { SmartLink, TextLink, roman } from '../ui/Button';

/** HOME 3 — the dark Mechanical card (main services) beside the workforce list. */
export default function HomeWhat() {
  const { main: m, side: s } = c;
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col gap-4">
          <Reveal><Label>{c.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.75rem,5.6vw,4.5rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-7">
          <Reveal className="flex flex-col gap-5 rounded-[28px] bg-ink p-7 text-ivory sm:p-10 lg:p-12">
            <span className="text-xs uppercase tracking-[0.26em] text-gold">{m.eyebrow}</span>
            <h3 className="font-serif text-[clamp(2.6rem,5vw,3.9rem)] font-medium leading-none">{m.titleMain} <em className="italic text-gold">{m.titleItalic}</em></h3>
            <p className="max-w-[480px] text-[15px] leading-relaxed text-[#D9E0DC] md:text-base">{m.text}</p>
            <ul className="mt-2 max-w-[600px]">
              {m.items.map((it, i) => (
                <li key={it.label}>
                  <SmartLink href={it.href} className="group flex items-baseline gap-4 border-b border-gold/40 py-4 transition-colors hover:text-gold md:gap-5">
                    <span className="w-8 font-serif text-lg text-gold">{roman(i)}</span>
                    <span className="flex-grow font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-none transition-transform duration-300 group-hover:translate-x-2">{it.label}</span>
                    <span className="text-gold" aria-hidden="true">→</span>
                  </SmartLink>
                </li>
              ))}
            </ul>
            <SmartLink href={m.button.href} className="mt-4 inline-flex min-h-[52px] items-center self-start rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-ivory">
              {m.button.text}
            </SmartLink>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 rounded-[28px] border border-line bg-paper p-7 sm:p-10">
            <span className="text-xs uppercase tracking-[0.26em] text-gold-text">{s.eyebrow}</span>
            <h3 className="font-serif text-[clamp(2.2rem,3.4vw,2.75rem)] font-medium leading-[1.02]">{s.titleMain} <em className="italic">{s.titleItalic}</em></h3>
            <ul>
              {s.items.map((it) => (
                <li key={it.label}>
                  <SmartLink href={it.href} className="flex justify-between gap-4 border-b border-line py-3.5 text-[16px] transition-colors hover:text-gold-text md:text-[17px]">
                    <span>{it.label}</span><span className="text-gold-display" aria-hidden="true">→</span>
                  </SmartLink>
                </li>
              ))}
            </ul>
            <TextLink href={s.link.href} className="mt-auto self-start pt-4">{s.link.text}</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
