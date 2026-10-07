import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { aboutTeam as c } from '../../config/aboutPage';
import { motionConfig } from '../../config/motion';
import { useFinePointer } from '../../hooks/useMediaQuery';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

/** ABOUT 5 — trades as a big list. With a mouse, pointing at a trade shows its
 *  photo beside the cursor; on touch screens each row shows a small photo. */
export default function AboutTeam() {
  const fine = useFinePointer();
  const listRef = useRef(null);
  const [active, setActive] = useState(-1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, motionConfig.hoverPreview.spring);
  const sy = useSpring(y, motionConfig.hoverPreview.spring);

  const onMove = (e) => {
    const r = listRef.current.getBoundingClientRect();
    // keep the photo in the right half so it never covers the trade names
    x.set(Math.max(e.clientX - r.left, r.width * 0.55));
    y.set(e.clientY - r.top);
  };

  return (
    <section className="px-gutter py-20 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Reveal><Label>{c.label}</Label></Reveal>
            <RevealLines className="font-serif text-[clamp(2.6rem,5vw,4rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
          </div>
          <Reveal delay={0.1} as="p" className="max-w-[400px] text-base leading-relaxed text-ink-soft">{c.text}</Reveal>
        </div>

        <div ref={listRef} className="relative" onMouseMove={fine ? onMove : undefined} onMouseLeave={() => setActive(-1)}>
          <ul className="border-t border-line">
            {c.trades.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 0.06} className="border-b border-line" onMouseEnter={() => setActive(i)}>
                <div className={`flex items-center gap-5 py-5 transition-colors duration-300 md:gap-7 md:py-6 ${active === i ? 'text-gold-display' : ''}`}>
                  <span className="w-7 text-[13px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`flex-grow font-serif text-[clamp(1.9rem,4.4vw,3.4rem)] leading-none transition-transform duration-500 ${active === i ? 'translate-x-3 italic' : ''}`}>{t.name}</span>
                  {!fine && (
                    <span className="photo-fallback relative h-14 w-12 flex-shrink-0 overflow-hidden rounded-t-full">
                      <img src={t.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>

          {fine && (
            <motion.div className="pointer-events-none absolute left-0 top-0 z-10" style={{ x: sx, y: sy }} aria-hidden="true">
              <AnimatePresence>
                {active >= 0 && (
                  <motion.div
                    key={active}
                    className="arch photo-fallback absolute -top-44 left-10 h-[340px] w-[270px] overflow-hidden shadow-[0_30px_60px_-30px_rgb(31_61_58/.45)]"
                    initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, ease: motionConfig.ease }}
                  >
                    <img src={c.trades[active].image} alt="" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
