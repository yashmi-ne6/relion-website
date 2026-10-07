import { aboutStandards as c } from '../../config/aboutPage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { Button, roman } from '../ui/Button';

/** ABOUT 6 — six commitments in two columns; the heading stays put on wide screens. */
export default function AboutStandards() {
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:self-start">
          <Reveal><Label>{c.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.6rem,5vw,4rem)] font-medium leading-none" lines={[c.titleMain, <em key="i" className="italic">{c.titleItalic}</em>]} />
          <Reveal delay={0.15} className="mt-4"><Button href={c.button.href}>{c.button.text}</Button></Reveal>
        </div>
        <ul className="grid border-t border-gold md:grid-cols-2 md:gap-x-14">
          {c.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 2) * 0.08} className="flex gap-5 border-b border-line py-7">
              <span className="w-11 flex-shrink-0 font-serif text-[28px] text-gold-display">{roman(i)}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[28px] font-medium leading-tight">{it.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
