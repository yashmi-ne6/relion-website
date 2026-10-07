import { aboutStory as c } from '../../config/aboutPage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

/** ABOUT 2 — the story with a large initial letter, a pull quote and four values. */
export default function AboutStory() {
  const [first, ...rest] = c.paragraphs;
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{c.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.6rem,5vw,4rem)] font-medium leading-none" lines={[c.titleMain, <em key="i" className="italic">{c.titleItalic}</em>]} />
          {c.established && <Reveal delay={0.1} as="span" className="font-serif text-xl text-gold-display">{c.established}</Reveal>}
        </div>
        <div className="flex flex-col gap-7">
          <Reveal as="p" className="text-[17px] leading-[1.75] text-ink-soft md:text-[19px]">
            <span className="float-left mr-3.5 mt-1.5 font-serif text-[clamp(4.5rem,8vw,6.75rem)] leading-[0.82] text-ink" aria-hidden="true">{first[0]}</span>
            <span className="sr-only">{first[0]}</span>{first.slice(1)}
          </Reveal>
          {rest.map((p) => <Reveal key={p} delay={0.08} as="p" className="text-[17px] leading-[1.75] text-ink-soft md:text-[19px]">{p}</Reveal>)}
          <Reveal delay={0.12} as="blockquote" className="my-2 border-l-2 border-gold py-2 pl-6 font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.2] md:pl-8">
            “{c.quote}”
          </Reveal>
          <ul className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            {c.values.map((v, i) => (
              <Reveal as="li" key={v} delay={i * 0.08} className="flex flex-col items-center gap-2.5 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold font-serif text-[28px] text-gold-display md:h-[92px] md:w-[92px]">{roman(i)}</span>
                <span className="text-sm font-semibold">{v}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
