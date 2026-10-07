import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../lib/smoothScroll';
import { sections } from '../config/servicesPage';
import { seo } from '../config/siteContent';
import Hero from '../components/sections/Hero';
import Contents from '../components/sections/Contents';
import Chapters from '../components/sections/Chapters';
import Numbers from '../components/sections/Numbers';
import Group from '../components/sections/Group';
import PromiseSection from '../components/sections/Promise';
import Closing from '../components/sections/Closing';

/** Section ids (from config) → components. To add a section: build it, add it
 *  here, and list its id in `sections` in src/config/servicesPage.js. */
const REGISTRY = {
  hero: Hero,
  contents: Contents,
  chapters: Chapters,
  numbers: Numbers,
  group: Group,
  promise: PromiseSection,
  closing: Closing,
};

export default function ServicesPage() {
  const { hash } = useLocation();
  // Footer links like /services#logistics glide to that chapter
  useEffect(() => {
    if (!hash) return undefined;
    const t = setTimeout(() => scrollToId(hash.slice(1)), 700);
    return () => clearTimeout(t);
  }, [hash]);

  useEffect(() => {
    document.title = seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = seo.description;
  }, []);

  return (
    <main>
      {sections.filter((s) => s.enabled).map((s) => {
        const Section = REGISTRY[s.id];
        return Section ? <Section key={s.id} /> : null;
      })}
    </main>
  );
}
