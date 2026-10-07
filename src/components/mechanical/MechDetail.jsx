import { motion } from 'framer-motion';
import { mechDetail as d, mechServices } from '../../config/mechanicalPage';
import { motionConfig } from '../../config/motion';
import { onAnchorClick } from '../../lib/smoothScroll';
import { Reveal, RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';
import LionDivider from '../ui/LionDivider';
import { Button, roman } from '../ui/Button';

/** One service in depth: arch photo + outlined numeral, what we do, signs you
 *  need us, and a booking button that pre-selects the service on the form. */
function Service({ s, index, next }) {
  const flip = index % 2 === 1;
  const st = motionConfig.fade.stagger;
  return (
    <article id={s.id} className="px-gutter py-14 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <LionDivider className="mb-14 md:mb-20" />
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <div className={`relative mx-auto aspect-[520/700] w-[min(82vw,520px)] ${flip ? 'lg:order-last' : ''}`}>
            <ArchImage src={s.image} alt={s.imageAlt} className="absolute inset-0" />
            <motion.span
              className={`pointer-events-none absolute top-8 font-serif text-[clamp(6.5rem,15vw,15rem)] leading-none text-transparent ${flip ? '-left-4 md:-left-12' : '-right-4 md:-right-12'}`}
              style={{ WebkitTextStroke: '1.5px rgb(var(--color-gold-display))' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: motionConfig.ease, delay: 0.2 }}
              aria-hidden="true"
            >
              {roman(index)}
            </motion.span>
            <div className="absolute -bottom-5 left-5 flex gap-2">
              {d.audiences.map((a, i) => (
                <span key={a} className={`inline-flex min-h-[40px] items-center rounded-full px-4 text-[13px] font-semibold ${i === 0 ? 'bg-ink text-ivory' : 'border border-ink bg-ivory'}`}>{a}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <Reveal><Label>{`Service ${roman(index)} — ${s.name}`}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[0.95]" lines={[s.heading.main, <em key="i" className="italic">{s.heading.italic}</em>]} />
            <Reveal delay={st} as="p" className="text-[16px] leading-[1.75] text-ink-soft md:text-[17px]">{s.body}</Reveal>

            <Reveal delay={st * 2} className="mt-2 grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-3 border-t border-line pt-5">
                <h3 className="text-xs font-normal uppercase tracking-[0.24em] text-muted">{d.whatLabel}</h3>
                <ul className="flex flex-col gap-2.5 text-[16px]">
                  {s.whatWeDo.map((x) => (
                    <li key={x} className="flex items-center gap-3"><span className="h-px w-[18px] flex-shrink-0 bg-gold" aria-hidden="true" />{x}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-sage px-6 py-5">
                <h3 className="text-xs font-normal uppercase tracking-[0.24em] text-gold-text">{d.signsLabel}</h3>
                <ul className="flex flex-col gap-2.5 text-[15px] text-ink-soft">
                  {s.signs.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true">✓</span>{x}</li>)}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={st * 3} className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={s.button.href}>{s.button.text}</Button>
              <a href={`#${next.id}`} onClick={onAnchorClick(next.id)} className="gold-underline text-[15px] font-semibold transition-colors hover:text-gold-text">Next: {next.label} →</a>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

/** MECHANICAL 3 — the four services, photo switching sides each time. */
export default function MechDetail() {
  return (
    <section aria-label="Mechanical services in detail">
      {mechServices.map((s, i) => {
        const after = mechServices[i + 1];
        return <Service key={s.id} s={s} index={i} next={after ? { id: after.id, label: after.name } : d.nextAfterLast} />;
      })}
    </section>
  );
}
