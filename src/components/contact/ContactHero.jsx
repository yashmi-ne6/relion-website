import { motion } from 'framer-motion';
import { contactHero as h } from '../../config/contactPage';
import { company } from '../../config/siteContent';
import { heroStart } from '../../lib/intro';
import { motionConfig } from '../../config/motion';
import { RevealLines } from '../ui/Reveal';
import ArchImage from '../ui/ArchImage';
import Label from '../ui/Label';
import { Button } from '../ui/Button';

const fade = (start, delay, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionConfig.fade.duration, ease: motionConfig.ease, delay: start + delay },
});

/** CONTACT 1 — "Let's talk." with call/email buttons and an arch photo. */
export default function ContactHero() {
  const start = heroStart();

  return (
    <section className="relative flex min-h-[92svh] items-center px-gutter pb-16 pt-[calc(var(--header-h)+32px)] [@media(max-height:560px)]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        <div className="flex flex-col gap-7">
          <motion.div {...fade(start, 0)}><Label>{h.label}</Label></motion.div>
          <RevealLines
            as="h1"
            onMount
            delay={start + 0.1}
            className="font-serif text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.86] tracking-[-0.02em]"
            lines={[h.titleMain, <em key="i" className="italic text-gold-display">{h.titleItalic}</em>]}
          />
          <motion.p {...fade(start, 0.5)} className="max-w-[470px] text-[17px] leading-relaxed text-ink-soft md:text-[19px]">{h.subtitle}</motion.p>
          <motion.div {...fade(start, 0.65)} className="flex flex-wrap gap-3">
            <Button href={company.phone.href} className="min-h-[52px]">{h.callButton} · {company.phone.display}</Button>
            <Button href={`mailto:${company.email}`} variant="outline" className="min-h-[52px]">{h.emailButton}</Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[480/620] w-[min(76vw,420px)] lg:w-[min(34vw,480px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: motionConfig.ease, delay: start + 0.2 }}
        >
          <div className="arch absolute inset-0 translate-x-[18px] -translate-y-[18px] border border-gold md:translate-x-6 md:-translate-y-6" aria-hidden="true" />
          <ArchImage src={h.image} alt={h.imageAlt} eager className="absolute inset-0" />
          {h.badge && (
            <motion.div {...fade(start, 0.9, 16)} className="absolute -left-4 bottom-10 flex flex-col gap-1 rounded-2xl border border-line bg-paper px-5 py-4 shadow-[0_24px_40px_-28px_rgb(31_61_58/.45)] md:-left-16 md:bottom-14">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-text md:text-[11px]">{h.badge.label}</span>
              <span className="font-serif text-[28px] leading-none md:text-[34px]">{h.badge.value}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
