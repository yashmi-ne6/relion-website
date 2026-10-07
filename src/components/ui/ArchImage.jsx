import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { motionConfig } from '../../config/motion';

/** Photo (or muted video) in an arch-shaped frame. The image drifts gently
 *  inside the frame as the page scrolls. A soft striped pattern shows behind
 *  it while it loads or if it fails. Give it a position + size via className
 *  (e.g. "absolute inset-0"). */
export default function ArchImage({ src, video, alt = '', className = '', eager = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const p = motionConfig.parallax.image;
  const y = useTransform(scrollYProgress, [0, 1], [`-${p}%`, `${p}%`]);

  return (
    <div ref={ref} className={`arch photo-fallback ${className || 'relative h-full w-full'}`}>
      <motion.div className="absolute inset-x-0" style={{ top: `-${p + 2}%`, bottom: `-${p + 2}%`, y }}>
        {video ? (
          <video className="h-full w-full object-cover" src={video} autoPlay muted loop playsInline aria-label={alt} />
        ) : (
          <img
            className="h-full w-full object-cover"
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
      </motion.div>
    </div>
  );
}
