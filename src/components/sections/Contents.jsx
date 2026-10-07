import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { contents, serviceChapters } from '../../config/servicesPage';
import { motionConfig } from '../../config/motion';
import { onAnchorClick } from '../../lib/smoothScroll';
import { useFinePointer } from '../../hooks/useMediaQuery';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

/** SECTION 2 — table of contents. Hovering a chapter shows its photo in a
 *  small arch that follows the cursor (mouse only). */
export default function Contents() {
  const listRef = useRef(null);
  const fine = useFinePointer();
  const [active, setActive] = useState(null);
  const y = useSpring(useMotionValue(0), motionConfig.hoverPreview.spring);

  const onMove = (e) => {
    if (!fine || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    y.set(e.clientY - r.top - 125);
  };

  return (
    <section id="contents" className="px-gutter py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{contents.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[<>{contents.titleMain} <em className="italic">{contents.titleItalic}</em></>]} />
          <Reveal delay={0.15} as="p" className="text-base leading-relaxed text-ink-soft">{contents.intro}</Reveal>
        </div>

        <div ref={listRef} className="relative" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
          <ul className="border-t border-gold">
            {serviceChapters.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * motionConfig.fade.stagger} y={16}>
                <a
                  href={`#${c.id}`}
                  onClick={onAnchorClick(c.id)}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group grid grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border-b border-line px-0 py-6 transition-[background-color,padding] duration-500 hover:bg-sage md:grid-cols-[90px_minmax(0,1fr)_minmax(0,1fr)_110px] md:py-8 md:hover:px-6"
                >
                  <span className="font-serif text-3xl text-gold-display md:text-[40px]">{roman(i)}</span>
                  <span className="font-serif text-[28px] leading-tight md:text-[40px] md:group-hover:italic">{c.subheading}</span>
                  <span className="hidden text-[15px] text-muted md:block">{c.heading.main} {c.heading.italic}</span>
                  <span className="text-right text-[13px] text-muted transition-colors group-hover:font-semibold group-hover:text-ink">
                    {c.positions.length} {contents.rolesSuffix} →
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          {fine && (
            <motion.div className="pointer-events-none absolute left-[46%] top-0 z-10 hidden lg:block" style={{ y }} aria-hidden="true">
              <AnimatePresence mode="popLayout">
                {active !== null && (
                  <motion.div
                    key={active}
                    className="arch photo-fallback h-[250px] w-[200px] border border-gold shadow-[0_30px_50px_-24px_rgb(31_61_58/.4)]"
                    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: motionConfig.hoverPreview.rotate }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease: motionConfig.ease }}
                  >
                    <img src={serviceChapters[active].image} alt="" className="h-full w-full object-cover" />
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
