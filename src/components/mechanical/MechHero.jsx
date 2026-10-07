import { motion } from 'framer-motion';
import { mechHero as h, mechServices } from '../../config/mechanicalPage';
import { motionConfig } from '../../config/motion';
import { heroStart, heroFade } from '../../lib/heroMotion';
import { onAnchorClick } from '../../lib/smoothScroll';
import { RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

/** MECHANICAL 1 — big title, four service chips, arch photo with a licence badge. */
export default function MechHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center px-gutter pb-16 pt-[calc(var(--header-h)+32px)] [@media(max-height:560px)]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        <div className="flex flex-col gap-7">
          <motion.div {...heroFade(0)}><Label>{h.label}</Label></motion.div>
          <RevealLines
            as="h1"
            onMount
            delay={heroStart() + 0.1}
            className="font-serif text-[clamp(3.6rem,10.5vw,9.4rem)] font-medium leading-[0.86] tracking-[-0.02em]"
            lines={[h.titleMain, <em key="i" className="italic text-gold-display">{h.titleItalic}</em>]}
          />
          <motion.p {...heroFade(0.5)} className="max-w-[500px] text-[17px] leading-relaxed text-ink-soft md:text-[19px]">{h.subtitle}</motion.p>
          <motion.nav {...heroFade(0.65)} aria-label="Mechanical services" className="flex max-w-[640px] flex-wrap gap-2.5 border-t border-line pt-5">
            {mechServices.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={onAnchorClick(s.id)}
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full border border-line bg-paper px-5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              >
                <span className="font-serif text-lg text-gold-display">{roman(i)}</span>{s.name}
              </a>
            ))}
          </motion.nav>
        </div>

        <motion.div
          className="relative mx-auto aspect-[500/660] w-[min(78vw,420px)] lg:w-[min(34vw,500px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: motionConfig.ease, delay: heroStart() + 0.2 }}
        >
          <div className="arch absolute inset-0 translate-x-[18px] -translate-y-[18px] border border-gold md:translate-x-[26px] md:-translate-y-[26px]" aria-hidden="true" />
          <ArchImage src={h.image} alt={h.imageAlt} eager className="absolute inset-0" />
          <motion.div {...heroFade(0.9, 16)} className="absolute -left-4 bottom-10 flex flex-col gap-1 rounded-2xl border border-line bg-paper px-5 py-4 shadow-[0_24px_40px_-28px_rgb(31_61_58/.45)] md:-left-16 md:bottom-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-text">{h.badge.label}</span>
            <span className="font-serif text-[26px] leading-none md:text-[30px]">{h.badge.value}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
