import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { numbers } from '../../config/servicesPage';
import { motionConfig } from '../../config/motion';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

/** Large serif number that counts up from 0 the first time it is seen. */
function Count({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, motionConfig.counter);

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on('change', (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString(); }), [spring]);

  return <span ref={ref}>0</span>;
}

/** SECTION 4 — three numbers on the sage band, with lots of air around them. */
export default function Numbers() {
  return (
    <section className="bg-sage px-gutter py-24 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col gap-4 md:mb-14">
          <Reveal><Label>{numbers.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none" lines={[<>{numbers.titleMain} <em className="italic">{numbers.titleItalic}</em></>]} />
        </div>

        <div className="grid border-t border-gold md:grid-cols-3">
          {numbers.items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.12}
              className={`flex flex-col gap-3 py-10 md:py-12 ${i < numbers.items.length - 1 ? 'border-b border-gold md:border-b-0 md:border-r' : ''} ${i === 0 ? 'md:pr-10' : i === numbers.items.length - 1 ? 'md:pl-10' : 'md:px-10'}`}
            >
              <span className="mb-3 block font-serif text-[clamp(5.5rem,11vw,10.5rem)] font-medium leading-none" aria-label={`${item.value}${item.suffix}`}>
                <span aria-hidden="true"><Count value={item.value} /></span>
                <span className="text-[0.58em] text-gold-display" aria-hidden="true">{item.suffix}</span>
              </span>
              <span className="text-lg font-semibold">{item.label}</span>
              <span className="text-sm text-muted">{item.sub}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
