import { useEffect, useState } from 'react';

/** Live boolean for a CSS media query, e.g. useMediaQuery('(min-width: 768px)'). */
export default function useMediaQuery(query) {
  const get = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(get);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, [query]);

  return matches;
}

/** Mouse/trackpad users (hover-capable, precise pointer) with motion allowed. */
export const useFinePointer = () =>
  useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');
