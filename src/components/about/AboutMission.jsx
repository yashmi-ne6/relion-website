import { aboutMission as c } from '../../config/aboutPage';
import { company } from '../../config/siteContent';
import { Reveal } from '../ui/Reveal';
import Label from '../ui/Label';

/** ABOUT 4 — the mission in large centred type on sage, with three numbers. */
export default function AboutMission() {
  return (
    <section className="bg-sage px-gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-9 text-center">
        <Reveal><img src={company.logo.src} alt="" className="h-14 w-auto" /></Reveal>
        <Reveal><Label line="both">{c.label}</Label></Reveal>
        <Reveal delay={0.1} as="p" className="font-serif text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.2]">
          <em className="italic">{c.italic}</em> {c.rest}
        </Reveal>
        <div className="mt-2 grid w-full border-t border-gold sm:grid-cols-3">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className={`flex flex-col gap-1 py-7 ${i > 0 ? 'border-t border-gold/50 sm:border-l sm:border-t-0' : ''}`}>
              <span className="font-serif text-[clamp(3.5rem,6vw,4.75rem)] leading-none">{s.value}</span>
              <span className="text-[13px] uppercase tracking-[0.2em] text-muted">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
