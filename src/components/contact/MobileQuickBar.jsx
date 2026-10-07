import { quickBar } from '../../config/contactPage';
import { company } from '../../config/siteContent';

/** Phones only: Call · Email, always one tap away at the bottom. */
export default function MobileQuickBar() {
  const item = 'flex min-h-[46px] items-center justify-center rounded-full text-sm font-semibold';
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-40 grid grid-cols-2 gap-2 rounded-full border border-line bg-paper/95 p-2 shadow-[0_20px_40px_-20px_rgb(31_61_58/.35)] backdrop-blur md:hidden">
      <a href={company.phone.href} className={`${item} bg-ink text-ivory`}>{quickBar.call}</a>
      <a href={`mailto:${company.email}`} className={`${item} border border-ink`}>{quickBar.email}</a>
    </nav>
  );
}
