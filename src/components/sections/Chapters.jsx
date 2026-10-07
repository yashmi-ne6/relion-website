import { motion } from 'framer-motion';
import { group, serviceChapters } from '../../config/servicesPage';
import { motionConfig } from '../../config/motion';
import { onAnchorClick } from '../../lib/smoothScroll';
import { Reveal, RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';
import LionDivider from '../ui/LionDivider';
import { Button, roman } from '../ui/Button';

/** One chapter: arch photo with a large outlined numeral, then the story,
 *  the roles we place, and the call to action. Odd chapters flip sides. */
function Chapter({ chapter, index, next }) {
  const flip = index % 2 === 1;
  const stagger = motionConfig.fade.stagger;

  return (
    <article id={chapter.id} className="px-gutter py-14 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <LionDivider className="mb-14 md:mb-20" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className={`relative mx-auto aspect-[560/740] w-[min(82vw,560px)] ${flip ? 'lg:order-last' : ''}`}>
            <ArchImage src={chapter.image} alt={chapter.imageAlt} className="absolute inset-0" />
            <motion.span
              className={`pointer-events-none absolute top-6 font-serif text-[clamp(7rem,17vw,16rem)] leading-none text-transparent ${flip ? '-left-4 md:-left-12' : '-right-4 md:-right-12'}`}
              style={{ WebkitTextStroke: '1.5px rgb(var(--color-gold-display))' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: motionConfig.ease, delay: 0.2 }}
              aria-hidden="true"
            >
              {roman(index)}
            </motion.span>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <Reveal><Label>{`Chapter ${roman(index)} — ${chapter.subheading}`}</Label></Reveal>
            <RevealLines
              className="font-serif text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[0.95]"
              lines={[chapter.heading.main, <em key="i" className="italic">{chapter.heading.italic}</em>]}
            />
            <Reveal delay={stagger} as="p" className="text-sm font-semibold tracking-wide">{chapter.title}</Reveal>
            {chapter.description.map((p, i) => (
              <Reveal key={i} delay={stagger * (2 + i)} as="p" className="text-[16px] leading-[1.75] text-ink-soft md:text-[17px]">{p}</Reveal>
            ))}

            <Reveal delay={stagger * 4} className="mt-2 flex flex-col gap-4 border-t border-line pt-6">
              <h3 className="text-xs font-normal uppercase tracking-[0.24em] text-muted">{chapter.positionsLabel}</h3>
              <ul className="grid gap-x-8 gap-y-2.5 text-[16px] sm:grid-cols-2">
                {chapter.positions.map((pos) => (
                  <li key={pos} className="flex items-center gap-3">
                    <span className="h-px w-[18px] flex-shrink-0 bg-gold" aria-hidden="true" />
                    {pos}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={stagger * 5} className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={chapter.button.href}>{chapter.button.text}</Button>
              <a href={`#${next.id}`} onClick={onAnchorClick(next.id)} className="gold-underline text-[15px] font-semibold transition-colors hover:text-gold-text">
                Next: {next.label} →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

/** SECTION 3 — the four service chapters. */
export default function Chapters() {
  return (
    <section aria-label="Our services">
      {serviceChapters.map((c, i) => {
        const after = serviceChapters[i + 1];
        const next = after ? { id: after.id, label: after.subheading } : { id: group.id, label: `${group.titleMain} ${group.titleItalic}` };
        return <Chapter key={c.id} chapter={c} index={i} next={next} />;
      })}
    </section>
  );
}
