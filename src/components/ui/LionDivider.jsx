import { motion } from 'framer-motion';
import { company } from '../../config/siteContent';
import { motionConfig } from '../../config/motion';

/** Gold hairlines that draw outward from the small lion — used between chapters. */
export default function LionDivider({ className = '' }) {
  const line = (origin) => ({
    className: 'h-px flex-grow bg-gold',
    style: { transformOrigin: origin },
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 1.2, ease: motionConfig.ease },
  });
  return (
    <div className={`flex items-center gap-4 md:gap-5 ${className}`} aria-hidden="true">
      <motion.span {...line('right')} />
      <img src={company.logo.src} alt="" className="h-7 w-auto md:h-9" />
      <motion.span {...line('left')} />
    </div>
  );
}
