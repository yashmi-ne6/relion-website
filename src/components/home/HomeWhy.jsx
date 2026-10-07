import { homeWhy as c } from '../../config/homePage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

/** HOME 4 — four reasons in a ruled row, each with a large outlined number. */
export default function HomeWhy() {
  return (
    <section className="bg-sage px-gutter py-20 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Reveal><Label>{c.label}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.75rem,5vw,4rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
          </div>
          <Reveal delay={0.1} as="p" className="max-w-[400px] text-base leading-relaxed text-ink-soft">{c.intro}</Reveal>
        </div>
        <div className="grid border-t border-gold sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 0.08}
              className={`flex flex-col gap-3.5 border-b border-[#CFD8CC] py-8 sm:px-6 lg:border-b-0 lg:pb-2 lg:pt-9 ${i % 2 === 1 ? 'sm:border-l' : ''} ${i > 0 ? 'lg:border-l' : 'sm:pl-0'} lg:first:pl-0`}
            >
              <span className="font-serif text-[clamp(4.5rem,7vw,5.75rem)] leading-[0.8] text-transparent" style={{ WebkitTextStroke: '1.2px rgb(var(--color-gold-display))' }} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-[30px] font-medium leading-tight md:text-[32px]">{it.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
