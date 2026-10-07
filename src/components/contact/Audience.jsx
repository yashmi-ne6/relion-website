import { audience } from '../../config/contactPage';
import { Reveal } from '../ui/Reveal';
import Label from '../ui/Label';
import { Button } from '../ui/Button';

/** CONTACT 4 — homeowners call us, businesses see workforce services. */
export default function Audience() {
  return (
    <section className="px-gutter py-20 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-2 md:gap-8">
        {audience.map((a, i) => (
          <Reveal key={a.eyebrow} delay={i * 0.1} className={`flex min-h-[380px] flex-col justify-between gap-10 rounded-3xl border p-8 md:p-12 ${i === 0 ? 'border-gold bg-paper' : 'border-line bg-sage'}`}>
            <Label line={false}>{a.eyebrow}</Label>
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[clamp(2.75rem,5vw,4rem)] font-medium leading-none">{a.titleMain} <em className="italic">{a.titleItalic}</em></h2>
              <p className="max-w-[420px] text-base leading-relaxed text-ink-soft">{a.body}</p>
            </div>
            <Button href={a.button.href} variant={a.variant} className="self-start">{a.button.text}</Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
