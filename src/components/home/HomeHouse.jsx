import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { homeHouse as c } from '../../config/homePage';
import { motionConfig } from '../../config/motion';
import { useReducedMotion } from '../../hooks/useMediaQuery';
import Label from '../ui/Label';
import { TextLink, roman } from '../ui/Button';
import HouseDrawing from './HouseDrawing';

/** HOME 3 — "Inside every building". The section stays on screen while you
 *  scroll through the steps; each one lights its part of the drawing in gold.
 *  With reduced motion it shows everything at once, without pinning. */
export default function HomeHouse() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const n = c.steps.length;
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(Math.min(n - 1, Math.max(0, Math.floor(v * n * 0.999)))));

  const states = Object.fromEntries(c.steps.map((s, i) => [s.part, reduced ? 'done' : i < step ? 'done' : i === step ? 'active' : 'future']));
  const cur = c.steps[step];

  return (
    <section ref={ref} className="relative bg-ivory" style={{ height: reduced ? 'auto' : `${n * 70 + 40}vh` }} aria-label={`${c.titleMain} ${c.titleItalic}`}>
      <div className={`${reduced ? '' : 'sticky top-0'} flex min-h-[100svh] items-center overflow-hidden px-gutter pb-8 pt-[calc(var(--header-h)+16px)]`}>
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-10">
          <div className="flex flex-col gap-4 md:gap-5">
            <Label>{c.label}</Label>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,3.9rem)] font-medium leading-none">{c.titleMain} <em className="italic">{c.titleItalic}</em></h2>
            <p className="hidden text-[15px] leading-relaxed text-ink-soft md:block">{c.intro}</p>

            {/* Desktop: full list of steps */}
            <ol className="mt-2 hidden flex-col gap-1 lg:flex">
              {c.steps.map((s, i) => {
                const st = states[s.part];
                return (
                  <li key={s.part} className={`flex gap-4 border-l-2 py-3.5 pl-4 transition-all duration-500 ${st === 'active' ? 'rounded-r-2xl border-gold-display bg-paper' : st === 'done' ? 'border-ink' : 'border-line opacity-45'}`}>
                    <span className="w-8 font-serif text-[22px] text-gold-display">{roman(i)}</span>
                    <span className="flex flex-col gap-1">
                      <span className={`font-serif leading-none transition-all duration-500 ${st === 'active' ? 'text-[30px] italic' : 'text-[24px]'}`}>{s.title}</span>
                      <span className="text-[13px] text-muted">{s.text}</span>
                      {st === 'active' && <TextLink href={s.link.href} className="mt-1.5 text-sm">{s.link.text}</TextLink>}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <HouseDrawing steps={c.steps} states={states} className="mx-auto h-auto w-full max-w-[900px] [&_.pin]:hidden sm:[&_.pin]:inline lg:max-h-[calc(100svh-var(--header-h)-60px)]" />

            {/* Phones & tablets: progress bars + a card for the current step */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="flex gap-1.5" aria-hidden="true">
                {c.steps.map((s, i) => <span key={s.part} className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${i === step ? 'bg-gold-display' : i < step ? 'bg-ink' : 'bg-line'}`} />)}
              </div>
              <div className="min-h-[150px] rounded-2xl border border-gold bg-paper p-5" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={cur.part} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: motionConfig.ease }} className="flex flex-col gap-1.5">
                    <span className="font-serif text-xl text-gold-display">{roman(step)}</span>
                    <span className="font-serif text-[30px] italic leading-none">{cur.title}</span>
                    <span className="text-sm text-muted">{cur.text}</span>
                    <TextLink href={cur.link.href} className="mt-1.5 self-start text-sm">{cur.link.text}</TextLink>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
