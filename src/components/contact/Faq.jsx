import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faq } from '../../config/contactPage';
import { motionConfig } from '../../config/motion';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

/** CONTACT 5 — questions that open and close (one at a time). */
export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{faq.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[faq.titleMain, <em key="i" className="italic">{faq.titleItalic}</em>]} />
          <Reveal delay={0.15} as="p" className="text-base leading-relaxed text-ink-soft">{faq.intro}</Reveal>
        </div>

        <div className="border-t border-gold">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.06} y={14} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-tight md:py-7"
                  >
                    <span className={isOpen ? 'italic' : ''}>{item.q}</span>
                    <span className="flex-shrink-0 font-sans text-2xl text-gold-display" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: motionConfig.ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[720px] pb-7 text-base leading-[1.75] text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
