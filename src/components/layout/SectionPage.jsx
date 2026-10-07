import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../../lib/smoothScroll';

/** Sets the browser-tab title and description for a page. */
export function usePageMeta(seo) {
  useEffect(() => {
    document.title = seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = seo.description;
  }, [seo]);
}

/** Renders a page from its `sections` list (id + enabled) using a registry of
 *  components, sets the SEO tags, and glides to #hash links like /mechanical#hvac. */
export default function SectionPage({ sections, registry, seo, className = '' }) {
  const { hash } = useLocation();
  usePageMeta(seo);

  useEffect(() => {
    if (!hash) return undefined;
    const t = setTimeout(() => scrollToId(hash.slice(1)), 700);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main className={className}>
      {sections.filter((s) => s.enabled).map((s) => {
        const Section = registry[s.id];
        return Section ? <Section key={s.id} /> : null;
      })}
    </main>
  );
}
