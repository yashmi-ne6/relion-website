import { homeCallBar as c } from '../../config/homePage';
import { company } from '../../config/siteContent';
import { SmartLink } from '../ui/Button';

/** Phones only: Call now · Book a technician, fixed at the bottom of the home page. */
export default function MobileCallBar() {
  const item = 'flex min-h-[48px] items-center justify-center rounded-full text-sm font-semibold';
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-40 grid grid-cols-[1fr_1.4fr] gap-2 rounded-full border border-line bg-paper/95 p-2 shadow-[0_20px_40px_-20px_rgb(31_61_58/.35)] backdrop-blur md:hidden">
      <a href={company.phone.href} className={`${item} border border-ink`}>{c.call}</a>
      <SmartLink href={c.bookHref} className={`${item} bg-ink text-ivory`}>{c.book}</SmartLink>
    </nav>
  );
}
