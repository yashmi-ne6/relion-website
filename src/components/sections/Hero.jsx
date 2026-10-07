import { motion } from 'framer-motion';
import { hero, serviceChapters } from '../../config/servicesPage';
import { heroStart } from '../../lib/intro';
import { motionConfig } from '../../config/motion';
import { onAnchorClick } from '../../lib/smoothScroll';
import { RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

const fade = (delay, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionConfig.fade.duration, ease: motionConfig.ease, delay: heroStart() + delay },
});

/** SECTION 1 — large serif title on the left, arch-framed photo/video on the right. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center px-gutter pb-16 pt-[calc(var(--header-h)+32px)] [@media(max-height:560px)]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        <div className="flex flex-col gap-7">
          <motion.div {...fade(0)}><Label>{hero.label}</Label></motion.div>

          <RevealLines
            as="h1"
            onMount
            delay={heroStart() + 0.1}
            className="font-serif text-[clamp(4.25rem,12.5vw,10.5rem)] font-medium leading-[0.86] tracking-[-0.02em]"
            lines={[hero.titleMain, <em key="i" className="italic text-gold-display">{hero.titleItalic}</em>]}
          />

          <motion.p {...fade(0.5)} className="max-w-[460px] text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
            {hero.subtitle}
          </motion.p>

          <motion.nav {...fade(0.65)} aria-label="Chapters" className="flex max-w-[560px] flex-wrap items-baseline gap-x-7 gap-y-3 border-t border-line pt-5">
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted md:text-xs">{hero.chaptersLabel}</span>
            <span className="flex gap-5 font-serif text-[22px]">
              {serviceChapters.map((c, i) => (
                <a key={c.id} href={`#${c.id}`} onClick={onAnchorClick(c.id)} className="transition-colors hover:text-gold-display" aria-label={`Chapter ${roman(i)}: ${c.subheading}`}>
                  {roman(i)}
                </a>
              ))}
            </span>
          </motion.nav>
        </div>

        <motion.div
          className="relative mx-auto aspect-[520/680] w-[min(78vw,440px)] lg:w-[min(36vw,520px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: motionConfig.ease, delay: heroStart() + 0.2 }}
        >
          <div className="arch absolute inset-0 translate-x-[18px] -translate-y-[18px] border border-gold md:translate-x-[26px] md:-translate-y-[26px]" aria-hidden="true" />
          <ArchImage src={hero.image} video={hero.video} alt={hero.imageAlt} eager className="absolute inset-0" />
          {hero.badge && (
            <motion.div
              {...fade(0.9, 16)}
              className="absolute -left-4 bottom-10 flex flex-col gap-1 rounded-2xl border border-line bg-paper px-5 py-4 shadow-[0_24px_40px_-28px_rgb(31_61_58/.45)] md:-left-16 md:bottom-14"
            >
              <span className="font-serif text-[30px] leading-none md:text-[34px]">{hero.badge.value}</span>
              <span className="text-xs text-muted">{hero.badge.label}</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.span {...fade(1.1, 0)} className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-muted md:block [@media(max-height:760px)]:hidden" aria-hidden="true">
        {hero.scrollLabel}
      </motion.span>
    </section>
  );
}
