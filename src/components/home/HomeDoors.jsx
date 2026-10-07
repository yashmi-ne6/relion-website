import { homeDoors } from '../../config/homePage';
import { Reveal } from '../ui/Reveal';
import LionDivider from '../ui/LionDivider';
import { SmartLink, roman } from '../ui/Button';

/** HOME 7 — two big doors: clients who need a job done, workers looking for work. */
export default function HomeDoors() {
  return (
    <section className="px-gutter pb-24 pt-10 md:pb-32">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12">
        <LionDivider />
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {homeDoors.map((d, i) => (
            <Reveal key={d.eyebrow} delay={i * 0.1}>
              <SmartLink
                href={d.button.href}
                className={`group relative flex min-h-[360px] flex-col justify-end gap-4 overflow-hidden rounded-[28px] border border-line p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-30px_rgb(31_61_58/.35)] md:min-h-[400px] md:p-12 ${d.tone === 'sage' ? 'bg-sage' : 'bg-paper'}`}
              >
                <span className={`pointer-events-none absolute right-8 top-4 font-serif text-[clamp(8rem,14vw,12.5rem)] leading-none transition-transform duration-700 group-hover:-translate-y-2 ${d.tone === 'sage' ? 'text-[#DCE4DA]' : 'text-sage'}`} aria-hidden="true">
                  {roman(i)}
                </span>
                <span className="relative text-xs uppercase tracking-[0.26em] text-gold-text">{d.eyebrow}</span>
                <span className="relative font-serif text-[clamp(2.6rem,5vw,4rem)] font-medium leading-none">{d.titleMain} <em className="italic">{d.titleItalic}</em></span>
                <span className="relative text-base text-ink-soft">{d.text}</span>
                <span className={`relative mt-2 inline-flex min-h-[52px] items-center self-start rounded-full px-7 text-[15px] font-semibold transition-colors ${d.button.variant === 'primary' ? 'bg-ink text-ivory group-hover:bg-ink-soft' : 'border border-ink group-hover:bg-ink group-hover:text-ivory'}`}>
                  {d.button.text}
                </span>
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
