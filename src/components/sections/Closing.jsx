import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { closing as servicesClosing } from '../../config/servicesPage';
import { company } from '../../config/siteContent';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { Button } from '../ui/Button';

/** Closing invitation over a faint lion watermark. Pages pass their own
 *  `content` (label, titleMain, titleItalic, body, buttons); /services uses the default. */
export default function Closing({ content = servicesClosing }) {
  const closing = content;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.06]);

  return (
    <section ref={ref} className="relative overflow-hidden px-gutter py-28 text-center md:py-40">
      <motion.img
        src={company.logo.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,460px)] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{ scale }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7">
        <Reveal><Label line="both">{closing.label}</Label></Reveal>
        <RevealLines
          className="font-serif text-[clamp(3.25rem,8vw,6.5rem)] font-medium leading-[0.95]"
          lines={[closing.titleMain, <em key="i" className="italic text-gold-display">{closing.titleItalic}</em>]}
        />
        <Reveal delay={0.2} as="p" className="max-w-[560px] text-[17px] leading-relaxed text-ink-soft">{closing.body}</Reveal>
        <Reveal delay={0.3} className="mt-2 flex flex-wrap justify-center gap-4">
          {closing.buttons.map((b) => (
            <Button key={b.text} href={b.href} variant={b.variant} className="min-h-[54px] px-8">{b.text}</Button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
