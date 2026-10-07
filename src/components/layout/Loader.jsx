import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { loader } from '../../config/siteContent';
import { motionConfig } from '../../config/motion';
import { useReducedMotion } from '../../hooks/useMediaQuery';

/* The lion is drawn from six pieces of the logo (in /public/intro) so its legs
   and tail can move. Each moving piece turns around its joint, given here as a
   percentage of the lion picture. */
const PARTS = [
  { key: 'hl', anim: 'lion-leg-b', origin: '58.77% 77.02%' },
  { key: 'fr', anim: 'lion-leg-b', origin: '32.37% 77.02%' },
  { key: 'tail', anim: 'lion-tail', origin: '88.16% 54.83%' },
  { key: 'body' },
  { key: 'hr', anim: 'lion-leg-a', origin: '77.09% 77.02%' },
  { key: 'fl', anim: 'lion-leg-a', origin: '18.31% 77.02%' },
];
const RATIO = 1174 / 766; // lion width ÷ height
const ease = motionConfig.ease;

function Lion({ walking }) {
  return (
    <div className="lion-bob relative h-full w-full" style={{ animationPlayState: walking ? 'running' : 'paused' }}>
      {PARTS.map((p) => (
        <img
          key={p.key}
          src={`/intro/lion-${p.key}.webp`}
          alt=""
          draggable="false"
          className="absolute inset-0 h-full w-full select-none"
          style={p.anim ? { transformOrigin: p.origin, animation: `${p.anim} ${loader.stepSeconds}s ease-in-out infinite`, animationPlayState: walking ? 'running' : 'paused' } : undefined}
        />
      ))}
    </div>
  );
}

/** Opening intro: a gold line draws in, the lion walks across from the right,
 *  the page is revealed behind it, then the lion climbs into the menu logo.
 *  Click anywhere (or "Skip") to jump straight to the page. */
export default function Loader({ onDone }) {
  const reduced = useReducedMotion();
  const [walking, setWalking] = useState(true);
  const [size] = useState(() => {
    const vw = window.innerWidth; const vh = window.innerHeight;
    const h = vw < 640 ? 92 : vw < 1024 ? 132 : 176;
    return { vw, vh, h, w: h * RATIO, ground: Math.round(vh * 0.6) };
  });
  const x = useMotionValue(size.vw + 20);   // lion's left edge
  const y = useMotionValue(size.ground - size.h);
  const scale = useMotionValue(1);
  const edge = useMotionValue(size.vw);      // ivory cover runs from 0 to here
  const line = useMotionValue(0);            // gold line draw progress 0–1
  const lineOpacity = useMotionValue(1);
  const cover = useTransform(edge, (e) => `inset(0 ${Math.max(0, size.vw - e)}px 0 0)`);
  const lineClip = useTransform([edge, line], ([e, l]) => `inset(0 ${Math.max(0, size.vw - e)}px 0 ${(1 - l) * size.vw}px)`);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    onDone();
  };

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(finish, 700);
      return () => clearTimeout(t);
    }
    let cancelled = false;
    const run = async () => {
      const { vw, w, h } = size;
      const endX = Math.max(16, vw * 0.06);
      // 1 · gold line draws in from the right
      await animate(line, 1, { duration: 0.6, ease: [0.4, 0, 0.2, 1] });
      if (cancelled) return;
      // 2 · the lion walks across; the cover follows just behind its tail
      const unsub = x.on('change', (v) => edge.set(Math.min(vw, v + w * 0.9)));
      await animate(x, endX, { duration: loader.walkSeconds, ease: [0.25, 0.1, 0.35, 1] });
      unsub();
      if (cancelled) return;
      // 3 · stop walking and climb into the menu logo while the last strip opens
      setWalking(false);
      const logo = document.querySelector('header a img');
      const r = logo?.getBoundingClientRect();
      const targetH = r ? r.height * 0.58 : 40;
      const tx = r ? r.left + (r.width - targetH * RATIO) / 2 : 24;
      const ty = r ? r.top : 20;
      await Promise.all([
        animate(edge, 0, { duration: 0.85, ease }),
        animate(lineOpacity, 0, { duration: 0.4 }),
        animate(x, tx, { duration: 0.85, ease }),
        animate(y, ty, { duration: 0.85, ease }),
        animate(scale, targetH / h, { duration: 0.85, ease }),
      ]);
      if (!cancelled) finish();
    };
    run();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  if (reduced) {
    return (
      <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-ivory" role="status" aria-label="Loading" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <img src="/logo.png" alt="" className="h-28 w-auto" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[90] cursor-pointer"
      role="status"
      aria-label="Loading Relion"
      onClick={finish}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* ivory cover that the lion pulls away */}
      <motion.div className="absolute inset-0 bg-ivory" style={{ clipPath: cover }} />
      {/* thin gold edge where the page is being revealed */}
      <motion.div className="absolute inset-y-0 w-px bg-gold" style={{ left: edge, opacity: lineOpacity }} />
      {/* gold ground line */}
      <motion.div className="absolute inset-x-0 h-[1.5px] bg-gold" style={{ top: size.ground, clipPath: lineClip, opacity: lineOpacity }} />
      {/* the lion */}
      <motion.div
        className="absolute left-0 top-0 origin-top-left"
        style={{ x, y, scale, width: size.w, height: size.h }}
        aria-hidden="true"
      >
        <Lion walking={walking} />
      </motion.div>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); finish(); }}
        className="absolute bottom-[max(20px,env(safe-area-inset-bottom))] right-5 z-10 rounded-full border border-ink/30 bg-ivory/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft backdrop-blur transition-colors hover:border-ink hover:text-ink"
      >
        Skip
      </button>
    </motion.div>
  );
}
