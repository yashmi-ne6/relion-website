import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { company, headerCta, navigation } from '../../config/siteContent';
import { motionConfig } from '../../config/motion';
import { lockScroll, scrollToTop } from '../../lib/smoothScroll';
import { Button, roman } from '../ui/Button';

/** Light top bar: logo · centred links · quote button. It gains a soft ivory
 *  backing once you scroll. Below 1024px the links move into a full-screen menu. */
export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { scrollToTop(); setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    lockScroll(open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${scrolled && !open ? 'border-b border-line bg-ivory/85 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-header max-w-[1440px] items-center justify-between gap-6 px-gutter">
        <Link to="/" className="relative z-[61] flex-shrink-0" aria-label={`${company.name} — home`}>
          <img src={company.logo.src} alt={company.logo.alt} className="h-10 w-auto md:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 text-sm font-medium lg:flex">
          {navigation.map((item) => (
            <Link key={item.path} to={item.path} aria-current={pathname === item.path ? 'page' : undefined} className={`transition-colors hover:text-gold-text ${pathname === item.path ? 'gold-underline font-semibold' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-[61] flex items-center gap-3">
          <Button href={headerCta.href} variant="outline" className="hidden min-h-[44px] px-6 text-sm sm:inline-flex">{headerCta.text}</Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-ivory lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 9h16" /><path d="M4 15h16" /></>)}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[60] flex flex-col bg-ivory px-gutter pb-10 pt-[calc(var(--header-h)+24px)] lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: motionConfig.menu.duration, ease: motionConfig.ease }}
          >
            <nav aria-label="Mobile" className="flex flex-col border-t border-gold">
              {navigation.map((item, i) => (
                <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: motionConfig.ease }}>
                  <Link to={item.path} onClick={() => setOpen(false)} aria-current={pathname === item.path ? 'page' : undefined} className="flex items-baseline gap-5 border-b border-line py-4">
                    <span className="w-8 font-serif text-lg text-gold-display">{roman(i)}</span>
                    <span className={`font-serif text-[clamp(2rem,8vw,2.75rem)] leading-none ${pathname === item.path ? 'italic text-gold-display' : ''}`}>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 pt-8 text-sm text-ink-soft">
              <a href={company.phone.href} className="gold-underline self-start">{company.phone.display}</a>
              <a href={`mailto:${company.email}`} className="break-all">{company.email}</a>
              <Button href={headerCta.href} className="mt-4 sm:hidden">{headerCta.text}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
