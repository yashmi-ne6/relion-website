import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { mechProcess as p } from '../../config/mechanicalPage';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

/** MECHANICAL 4 — four steps on a gold line that fills as you scroll. */
export default function MechProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id={p.id} ref={ref} className="bg-sage px-gutter py-24 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-col gap-4">
          <Reveal><Label>{p.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none" lines={[<>{p.titleMain} <em className="italic">{p.titleItalic}</em></>]} />
        </div>

        <ol className="relative grid gap-10 md:grid-cols-4">
          <span className="absolute left-[29px] top-0 h-full w-px bg-[#CFD8CC] md:left-0 md:top-[30px] md:h-px md:w-full" aria-hidden="true" />
          <motion.span
            className="absolute left-[29px] top-0 h-full w-px origin-top bg-gold md:hidden"
            style={{ scaleY: fill }}
            aria-hidden="true"
          />
          <motion.span
            className="absolute left-0 top-[30px] hidden h-px w-full origin-left bg-gold md:block"
            style={{ scaleX: fill }}
            aria-hidden="true"
          />
          {p.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative flex gap-6 md:flex-col md:gap-4">
              <span className="relative flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border border-gold bg-paper font-serif text-[26px] text-gold-display">{roman(i)}</span>
              <div className="flex flex-col gap-2 pt-2 md:pt-0">
                <h3 className="font-serif text-[28px] font-medium leading-tight md:text-[30px]">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
