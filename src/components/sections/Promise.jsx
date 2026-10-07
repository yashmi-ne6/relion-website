import { promise } from '../../config/servicesPage';
import { motionConfig } from '../../config/motion';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';

const numeral = (i) => ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'][i] || String(i + 1);

function Words() {
  return (
    <div className="flex flex-shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14">
      {promise.words.map((w) => (
        <span key={w} className="flex items-center gap-10 md:gap-14">
          <span className="font-serif text-[clamp(2.5rem,5vw,4rem)] italic leading-none">{w}</span>
          <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  );
}

/** SECTION 6 — slow scrolling word strip, then the six reasons as a manifesto. */
export default function Promise() {
  return (
    <section className="py-20 md:py-24">
      <div className="overflow-hidden border-y border-gold py-5 md:py-7" aria-hidden="true">
        <div className="marquee flex w-max" style={{ '--marquee-seconds': `${motionConfig.marquee.seconds}s` }}>
          <Words />
          <Words />
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1320px] gap-12 px-gutter lg:mt-24 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5 self-start lg:sticky lg:top-[calc(var(--header-h)+40px)]">
          <Reveal><Label>{promise.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[<>{promise.titleMain} <em className="italic">{promise.titleItalic}</em></>]} />
          <Reveal delay={0.15} as="p" className="text-base leading-relaxed text-ink-soft">{promise.intro}</Reveal>
          <ul className="sr-only">{promise.words.map((w) => <li key={w}>{w}</li>)}</ul>
        </div>

        <ol className="grid gap-x-16 sm:grid-cols-2">
          {promise.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.1} y={16} className="flex gap-5 border-t border-line py-7">
              <span className="w-9 flex-shrink-0 font-serif text-3xl leading-none text-gold-display" aria-hidden="true">{numeral(i)}</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[17px] font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
