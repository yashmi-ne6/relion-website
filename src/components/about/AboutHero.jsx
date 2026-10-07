import { motion } from 'framer-motion';
import { aboutHero as h } from '../../config/aboutPage';
import { motionConfig } from '../../config/motion';
import { heroStart, heroFade } from '../../lib/heroMotion';
import { RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';

/** ABOUT 1 — title, short line, and a wide half-oval team photo below. */
export default function AboutHero() {
  return (
    <section className="px-gutter pt-[calc(var(--header-h)+24px)] md:pt-[calc(var(--header-h)+36px)]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 md:gap-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <RevealLines
            as="h1"
            onMount
            delay={heroStart() + 0.1}
            className="font-serif text-[clamp(3.75rem,11vw,9.4rem)] font-medium leading-[0.86]"
            lines={[<>{h.titleMain} <em className="italic text-gold-display">{h.titleItalic}</em></>]}
          />
          <motion.p {...heroFade(0.45)} className="max-w-[380px] text-[16px] leading-relaxed text-ink-soft md:mb-3 md:text-[17px]">{h.subtitle}</motion.p>
        </div>
        <motion.div
          className="relative h-[clamp(240px,38vw,520px)]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: motionConfig.ease, delay: heroStart() + 0.25 }}
        >
          <ArchImage src={h.image} alt={h.imageAlt} eager className="absolute inset-0 !rounded-t-[999px]" />
        </motion.div>
      </div>
    </section>
  );
}
