import { loader } from '../config/siteContent';

/* The opening lion intro plays once per browser session. These helpers decide
   whether it plays, and tell page heroes how long to wait before animating in. */
const KEY = 'relion-intro-seen';
const loadedAt = typeof performance !== 'undefined' ? performance.now() : 0;
let willPlay = null;

export function introWillPlay() {
  if (willPlay !== null) return willPlay;
  let seen = false;
  try { seen = window.sessionStorage.getItem(KEY) === '1'; } catch { /* storage blocked — just play it */ }
  willPlay = Boolean(loader.enabled) && !seen;
  return willPlay;
}

export function markIntroSeen() {
  try { window.sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
}

/** Seconds a hero should wait before its first animation. On the very first
 *  page (with the intro) that is when the lion starts revealing the page;
 *  on every later page it is almost immediate. */
export function heroStart() {
  const base = 0.2;
  if (!introWillPlay()) return base;
  const elapsed = ((typeof performance !== 'undefined' ? performance.now() : 0) - loadedAt) / 1000;
  return Math.max(base, loader.revealAt + base - elapsed);
}
