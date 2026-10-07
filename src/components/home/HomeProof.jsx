import { homeProof as c } from '../../config/homePage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

/** HOME 5 — big projects, partner logos and four numbers in a ruled grid. */
export default function HomeProof() {
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{c.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.5rem,4.8vw,3.6rem)] font-medium leading-[1.02]" lines={[c.titleMain, <em key="i" className="italic">{c.titleItalic}</em>]} />
          <Reveal delay={0.1} as="p" className="text-base leading-relaxed text-ink-soft">{c.text}</Reveal>
          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            {c.partners.map((p, i) => (
              <span key={i} className="inline-flex min-h-[44px] items-center rounded-full border border-dashed border-gold px-5 font-serif text-xl">{p}</span>
            ))}
          </Reveal>
        </div>
        <div className="grid grid-cols-2 border-t border-line">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className={`flex flex-col gap-1 py-7 ${i % 2 === 0 ? 'border-r border-line pr-4' : 'pl-5 md:pl-9'} ${i < 2 ? 'border-b border-line' : ''}`}>
              <span className="font-serif text-[clamp(3.25rem,7vw,5.75rem)] leading-none">{s.value}</span>
              <span className="text-[13px] text-muted md:text-sm">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
