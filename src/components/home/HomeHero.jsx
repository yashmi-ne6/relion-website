import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { homeHero as h } from '../../config/homePage';
import { motionConfig } from '../../config/motion';
import { heroStart, heroFade } from '../../lib/heroMotion';
import { useReducedMotion } from '../../hooks/useMediaQuery';
import Label from '../ui/Label';
import TradeIcon from '../ui/TradeIcon';
import { Button } from '../ui/Button';

const ease = motionConfig.ease;

/** HOME 1 — "We keep ___." The gold words roll through every service; the arch
 *  photo and its "Now showing" card change with them. A trust strip closes the hero. */
export default function HomeHero() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = h.words.length;
  const w = h.words[i];

  useEffect(() => {
    if (reduced || paused) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), h.rotateSeconds * 1000);
    return () => clearInterval(t);
  }, [reduced, paused, n]);

  // Preload the photos so each swap is instant
  useEffect(() => { h.words.forEach((x) => { const img = new Image(); img.src = x.image; }); }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col px-gutter pt-[calc(var(--header-h)+20px)] [@media(max-height:560px)]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1320px] flex-1 items-center gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="flex flex-col gap-6 md:gap-7">
          <motion.div {...heroFade(0)}><Label>{h.label}</Label></motion.div>

          <h1 className="font-serif text-[clamp(3.2rem,8.6vw,7.75rem)] font-medium leading-[0.95] tracking-[-0.02em]">
            <motion.span {...heroFade(0.1, 30)} className="block">{h.titleMain}</motion.span>
            <motion.span {...heroFade(0.25, 30)} className="relative block h-[1.15em] overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.em
                  key={w.text}
                  className="absolute left-0 top-0 whitespace-nowrap italic text-gold-display"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {w.text}
                </motion.em>
              </AnimatePresence>
              <motion.span
                key={`u-${i}`}
                className="absolute bottom-[0.06em] left-[0.04em] h-[2px] w-[min(100%,4.6em)] origin-left bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: h.rotateSeconds * 0.9, ease: 'linear' }}
                aria-hidden="true"
              />
            </motion.span>
          </h1>

          <motion.p {...heroFade(0.45)} className="max-w-[520px] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">{h.subtitle}</motion.p>
          <motion.div {...heroFade(0.55)} className="flex flex-wrap gap-3.5">
            {h.buttons.map((b) => <Button key={b.text} href={b.href} variant={b.variant} className="min-h-[52px]">{b.text}</Button>)}
          </motion.div>
          <motion.div {...heroFade(0.65)} className="flex items-center gap-3" role="tablist" aria-label="Services">
            {h.words.map((x, k) => (
              <button
                key={x.service}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={x.service}
                onClick={() => { setI(k); setPaused(true); }}
                className="group flex h-8 items-center gap-2"
              >
                <span className={`block h-2 rounded-full transition-all duration-500 ${k === i ? 'w-7 bg-gold-display' : 'w-2 bg-line group-hover:bg-gold'}`} />
                {k === i && <span className="text-xs font-semibold">{x.service}</span>}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[470/600] w-[min(80vw,400px)] lg:w-[min(33vw,470px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: heroStart() + 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="arch absolute inset-0 translate-x-[18px] -translate-y-[18px] border border-gold md:translate-x-[24px] md:-translate-y-[24px]" aria-hidden="true" />
          <div className="arch photo-fallback absolute inset-0 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={w.image}
                src={w.image}
                alt={w.alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </AnimatePresence>
          </div>
          <div className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-[0_24px_40px_-28px_rgb(31_61_58/.45)] md:-left-12 md:bottom-12">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-ink"><TradeIcon name={w.icon} className="h-6 w-6" strokeWidth={1.2} /></span>
            <span className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-text">{h.nowShowing}</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={w.service} className="font-serif text-[22px] leading-none md:text-[24px]" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35 }}>
                  {w.service}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>
      </div>

      <motion.ul {...heroFade(0.8, 0)} className="-mx-gutter flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-gold bg-paper px-gutter py-4 text-[13px] font-medium tracking-[0.03em] md:gap-x-6 md:text-sm">
        {h.trust.map((t, k) => (
          <li key={t} className="flex items-center gap-5 md:gap-6">
            {k > 0 && <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />}
            {t}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
