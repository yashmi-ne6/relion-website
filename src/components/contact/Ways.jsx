import { useState } from 'react';
import { ways } from '../../config/contactPage';
import { onAnchorClick } from '../../lib/smoothScroll';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { roman } from '../ui/Button';

/** Copy-to-clipboard pill that briefly says "Copied ✓". */
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked — the mailto link still works */ }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`min-h-[40px] rounded-full border px-4 text-[13px] font-semibold transition-colors ${copied ? 'border-ink bg-ink text-ivory' : 'border-ink text-ink hover:bg-ink hover:text-ivory'}`}
    >
      {copied ? ways.copiedLabel : ways.copyLabel}
    </button>
  );
}

/** CONTACT 2 — phone, email, address and hours, numbered I–IV. */
export default function Ways() {
  return (
    <section id={ways.id} className="scroll-mt-[var(--header-h)] px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{ways.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[<>{ways.titleMain} <em className="italic">{ways.titleItalic}</em></>]} />
          <Reveal delay={0.15} as="p" className="text-base leading-relaxed text-ink-soft">{ways.intro}</Reveal>
        </div>

        <ul className="border-t border-gold">
          {ways.items.map((w, i) => {
            const isHash = w.href?.startsWith('#');
            return (
              <Reveal as="li" key={w.label} delay={i * 0.08} y={16} className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 border-b border-line py-6 md:grid-cols-[64px_130px_minmax(0,1fr)_auto] md:gap-x-4 md:py-8">
                <span className="row-span-2 font-serif text-3xl text-gold-display md:row-span-1 md:text-4xl" aria-hidden="true">{roman(i)}</span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-muted md:text-xs">{w.label}</span>
                {w.href ? (
                  <a
                    href={w.href}
                    onClick={isHash ? onAnchorClick(w.href.slice(1)) : undefined}
                    {...(w.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`break-words font-serif leading-tight ${w.value.length > 24 ? 'text-[clamp(1.15rem,2.4vw,1.9rem)] [overflow-wrap:anywhere]' : 'text-[clamp(1.6rem,4vw,2.75rem)]'} transition-colors hover:text-gold-display`}
                  >
                    {w.value}
                  </a>
                ) : (
                  <span className="font-serif text-[clamp(1.6rem,4vw,2.75rem)] leading-tight">{w.value}</span>
                )}
                <span className="col-start-2 md:col-start-auto md:justify-self-end">
                  {w.copy ? <CopyButton text={w.value} /> : w.hint ? <span className="text-[13px] text-muted">{w.hint}</span> : null}
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
