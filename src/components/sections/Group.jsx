import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { group } from '../../config/servicesPage';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import Icon from '../ui/Icon';
import { TextLink } from '../ui/Button';

const pad = (n) => String(n).padStart(2, '0');

function Card({ item, index }) {
  return (
    <article className="group flex h-[400px] w-[min(80vw,340px)] flex-shrink-0 snap-start flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-7 transition-[background-color,border-color,transform] duration-500 hover:-translate-y-2 hover:border-gold hover:bg-sage md:h-[420px] md:p-8">
      <div className="flex items-center justify-between">
        <span className="font-serif text-[44px] leading-none text-gold-display">{pad(index + 1)}</span>
        <Icon name={item.icon} size={30} strokeWidth={1.25} className="text-ink" />
      </div>
      <div className="flex-grow" />
      <h3 className="font-serif text-[30px] font-medium leading-tight md:text-[32px]">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
      {item.link && <TextLink href={item.link.href} className="text-sm">{item.link.label} →</TextLink>}
    </article>
  );
}

function Heading({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <Reveal><Label>{group.label}</Label></Reveal>
      <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[<>{group.titleMain} <em className="italic">{group.titleItalic}</em></>]} />
      <Reveal delay={0.15} as="p" className="max-w-[620px] text-base leading-relaxed text-ink-soft">{group.intro}</Reveal>
      {children}
    </div>
  );
}

/** Desktop: the section pins while scrolling down moves the cards sideways. */
function Pinned() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [current, setCurrent] = useState(1);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + track.getBoundingClientRect().left));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ['16.6%', '100%']);
  useMotionValueEvent(scrollYProgress, 'change', (p) => setCurrent(Math.min(group.items.length, Math.round(p * (group.items.length - 1)) + 1)));

  return (
    <section id={group.id} ref={sectionRef} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden pl-gutter pt-header">
        <div className="mx-auto flex w-full max-w-[1320px] items-end justify-between gap-10 pr-gutter">
          <Heading />
          <div className="flex flex-shrink-0 items-center gap-5" aria-hidden="true">
            <span className="font-serif text-2xl">{pad(current)} <span className="text-gold-display">— {pad(group.items.length)}</span></span>
            <span className="relative block h-[2px] w-40 bg-line">
              <motion.span className="absolute left-0 top-0 block h-full bg-ink" style={{ width: bar }} />
            </span>
          </div>
        </div>
        <motion.div ref={trackRef} className="flex gap-6 pr-gutter" style={{ x }}>
          {group.items.map((item, i) => <Card key={item.title} item={item} index={i} />)}
        </motion.div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{group.scrollHint} →</p>
      </div>
    </section>
  );
}

/** Phones, tablets & reduced motion: a row you swipe sideways. */
function Swipe() {
  return (
    <section id={group.id} className="py-24">
      <div className="mx-auto mb-10 max-w-[1320px] px-gutter"><Heading /></div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter pb-4 [scrollbar-width:none]" style={{ scrollPaddingLeft: 'var(--gutter)' }}>
        {group.items.map((item, i) => <Card key={item.title} item={item} index={i} />)}
      </div>
      <p className="mt-4 px-gutter text-[11px] uppercase tracking-[0.22em] text-muted">{group.swipeHint} →</p>
    </section>
  );
}

/** SECTION 5 — the Relion Group's six divisions. */
export default function Group() {
  const pinned = useMediaQuery('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
  return pinned ? <Pinned /> : <Swipe />;
}
