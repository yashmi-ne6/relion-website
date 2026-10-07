import Lenis from 'lenis';
import { motionConfig } from '../config/motion';

/* Slow, smooth page scrolling (Lenis). Skipped for reduced-motion users;
   every helper below falls back to normal browser scrolling. */

let lenis = null;

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const headerOffset = () => -(document.querySelector('header')?.offsetHeight || 0);

export function startSmoothScroll() {
  if (lenis || !motionConfig.smoothScroll.enabled || reduced()) return () => {};
  lenis = new Lenis({ lerp: motionConfig.smoothScroll.lerp });
  let raf = 0;
  const loop = (t) => {
    lenis?.raf(t);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: headerOffset(), duration: 1.4 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + headerOffset(), behavior: reduced() ? 'auto' : 'smooth' });
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}

export function lockScroll(locked) {
  if (lenis) (locked ? lenis.stop() : lenis.start());
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

/** onClick for in-page links like href="#construction" */
export const onAnchorClick = (id) => (e) => {
  e.preventDefault();
  scrollToId(id);
  history.replaceState(null, '', `#${id}`);
};
