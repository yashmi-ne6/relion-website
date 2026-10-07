import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactSections, contactSeo, ways } from '../config/contactPage';
import { scrollToId } from '../lib/smoothScroll';
import ContactHero from '../components/contact/ContactHero';
import Ways from '../components/contact/Ways';
import QuoteForm from '../components/contact/QuoteForm';
import Audience from '../components/contact/Audience';
import Faq from '../components/contact/Faq';
import Where from '../components/contact/Where';
import ContactClosing from '../components/contact/ContactClosing';
import MobileQuickBar from '../components/contact/MobileQuickBar';

const REGISTRY = {
  hero: ContactHero,
  ways: Ways,
  form: QuoteForm,
  audience: Audience,
  faq: Faq,
  where: Where,
  closing: ContactClosing,
};

export default function ContactPage() {
  const { search, hash } = useLocation();

  useEffect(() => {
    document.title = contactSeo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = contactSeo.description;
  }, []);

  // Coming from a "Book …" / "Get … Staff" button (?service=…) or an old "#quote"
  // link: glide down to the phone / email / address list.
  useEffect(() => {
    const h = hash.slice(1);
    const target = h === 'quote' ? ways.id : h || (new URLSearchParams(search).has('service') ? ways.id : null);
    if (!target) return undefined;
    const t = setTimeout(() => scrollToId(target), 700);
    return () => clearTimeout(t);
  }, [search, hash]);

  return (
    <>
      <main className="pb-20 md:pb-0">
        {contactSections.filter((s) => s.enabled).map((s) => {
          const Section = REGISTRY[s.id];
          return Section ? <Section key={s.id} /> : null;
        })}
      </main>
      <MobileQuickBar />
    </>
  );
}
