import { mechTrust as t } from '../../config/mechanicalPage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { TextLink } from '../ui/Button';

/** MECHANICAL 6 — licence / insurance / warranty row, then Homes vs Business. */
export default function MechTrust() {
  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-14">
        <div className={`grid items-center gap-10 ${t.badges.length ? 'lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-24' : ''}`}>
          <div className="flex flex-col gap-4">
            <Reveal><Label>{t.label}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.5rem,4.8vw,3.6rem)] font-medium leading-none" lines={[t.titleMain, <em key="i" className="italic">{t.titleItalic}</em>]} />
          </div>
          {t.badges.length > 0 && <Reveal delay={0.1} className="grid grid-cols-2 border-y border-gold md:grid-cols-4">
            {t.badges.map((b, i) => (
              <div key={i} className={`flex flex-col gap-2 px-5 py-7 ${i % 2 === 0 ? 'border-r border-line' : 'md:border-r md:border-line'} ${i < 2 ? 'border-b border-line md:border-b-0' : ''} ${i === t.badges.length - 1 ? 'md:border-r-0' : ''}`}>
                <span className="font-serif text-[24px] leading-tight md:text-[26px]">{b.value}</span>
                <span className="text-[13px] text-muted">{b.label}</span>
              </div>
            ))}
          </Reveal>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {t.audiences.map((a, i) => (
            <Reveal key={a.eyebrow} delay={i * 0.1} className={`flex min-h-[300px] flex-col justify-between gap-6 rounded-3xl border border-line p-8 md:p-10 ${i === 0 ? 'bg-paper' : 'bg-sage'}`}>
              <span className="text-xs uppercase tracking-[0.24em] text-gold-text">{a.eyebrow}</span>
              <h3 className="font-serif text-[clamp(2.4rem,4vw,3rem)] font-medium leading-none">{a.titleMain} <em className="italic">{a.titleItalic}</em></h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{a.text}</p>
              <TextLink href={a.link.href} className="self-start">{a.link.text}</TextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
