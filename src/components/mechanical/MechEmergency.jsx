import { mechEmergency as e } from '../../config/mechanicalPage';
import { Reveal } from '../ui/Reveal';
import Label from '../ui/Label';
import { Button } from '../ui/Button';

/** MECHANICAL 5 — urgent-help card with the phone number and a gas safety note. */
export default function MechEmergency() {
  return (
    <section className="px-gutter py-20 md:py-24">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col gap-10 rounded-[28px] border border-gold bg-paper px-6 py-10 sm:px-10 md:px-16 md:py-14 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-1 flex-col gap-4">
          <Label>{e.label}</Label>
          <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-medium leading-none">
            {e.titleMain} <em className="italic text-gold-display">{e.titleItalic}</em>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-relaxed text-ink-soft">{e.hours}</p>
          <p className="max-w-[620px] border-l-2 border-gold bg-sand/60 px-4 py-3 text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">{e.gasNote.strong}</strong> {e.gasNote.text} {e.gasNote.number}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <a href={e.phone.href} className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none transition-colors hover:text-gold-text">{e.phone.display}</a>
          <Button href={e.phone.href} className="min-h-[54px] px-8">{e.button}</Button>
        </div>
      </Reveal>
    </section>
  );
}
