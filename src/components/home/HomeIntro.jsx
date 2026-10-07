import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { homeIntro as c } from '../../config/homePage';
import { Reveal } from '../ui/Reveal';
import Label from '../ui/Label';
import { TextLink } from '../ui/Button';

/** One word whose colour goes from pale to full green as the reader scrolls past. */
function Word({ children, progress, range, className = '' }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }} className={className}>{children} </motion.span>;
}

/** HOME 2 — a single big sentence, small pill photos tucked into the line. */
export default function HomeIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });

  // Flatten the text parts into words so each can fade in on its own.
  const tokens = [];
  c.parts.forEach((p) => {
    if (typeof p === 'string') p.split(' ').forEach((w) => w && tokens.push({ w }));
    else if (p.em) p.em.split(' ').forEach((w) => tokens.push({ w, em: true }));
    else if (p.img) tokens.push({ img: p.img });
  });
  const n = tokens.length;

  return (
    <section className="px-gutter py-24 md:py-36">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-10 md:gap-12">
        <Reveal><Label>{c.label}</Label></Reveal>
        <p ref={ref} className="font-serif text-[clamp(2rem,4.6vw,4.1rem)] leading-[1.18]">
          {tokens.map((t, i) => {
            const range = [i / n, Math.min(1, (i + 2) / n)];
            if (t.img) {
              return (
                <Word key={i} progress={scrollYProgress} range={range}>
                  <span className="photo-fallback relative inline-block h-[0.85em] w-[1.9em] overflow-hidden rounded-full align-[-0.08em]">
                    <img src={t.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </span>
                </Word>
              );
            }
            return <Word key={i} progress={scrollYProgress} range={range} className={t.em ? 'italic text-gold-display' : ''}>{t.w}</Word>;
          })}
        </p>
        <Reveal><TextLink href={c.link.href}>{c.link.text}</TextLink></Reveal>
      </div>
    </section>
  );
}
