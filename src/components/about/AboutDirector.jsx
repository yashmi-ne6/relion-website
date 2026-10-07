import { aboutDirector as d } from '../../config/aboutPage';
import { Reveal, RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';

/** ABOUT 3 — arch portrait on a sand shadow, name, role, short bio, signature. */
export default function AboutDirector() {
  if (!d.enabled) return null;
  return (
    <section className="bg-paper px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-24">
        <div className="relative mx-auto aspect-[480/640] w-[min(74vw,480px)]">
          <div className="arch absolute inset-0 -translate-x-4 translate-y-4 bg-sand md:-translate-x-6 md:translate-y-6" aria-hidden="true" />
          <ArchImage src={d.image} alt={d.imageAlt} className="absolute inset-0" />
        </div>
        <div className="flex flex-col gap-5">
          <Reveal><Label>{d.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6.4vw,5.25rem)] font-medium leading-[0.95]" lines={[d.name]} />
          <Reveal as="span" className="text-[13px] uppercase tracking-[0.24em] text-muted">{d.role}</Reveal>
          {d.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)} as="p" className="max-w-[640px] text-[17px] leading-[1.75] text-ink-soft md:text-[18px]">{p}</Reveal>
          ))}
          <Reveal delay={0.25} as="span" className="mt-2 font-serif text-[clamp(2.2rem,4vw,2.9rem)] italic text-gold-display">{d.signature}</Reveal>
        </div>
      </div>
    </section>
  );
}
