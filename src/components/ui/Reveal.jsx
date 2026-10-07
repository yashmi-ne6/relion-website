import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { motionConfig } from '../../config/motion';

const m = motionConfig;

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({ as = 'div', children, delay = 0, y = 24, className = '', ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: m.fade.duration, ease: m.ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Headline whose lines rise up from behind an invisible edge, one after another.
 *  `onMount` plays immediately (hero); otherwise it plays when scrolled into view. */
export function RevealLines({ as: Tag = 'h2', lines, className = '', delay = 0, onMount = false }) {
  // Watch the whole heading (not the hidden lines) so the trigger always fires.
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const show = onMount || inView;
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={show ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: m.lines.duration, ease: m.ease, delay: delay + i * m.lines.stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
