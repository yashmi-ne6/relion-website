import { motion } from 'framer-motion';
import { homeMap as c } from '../../config/homePage';
import { motionConfig } from '../../config/motion';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { Button } from '../ui/Button';

const INK = 'rgb(var(--color-ink))';
const GOLD = 'rgb(var(--color-gold-display))';
const GLOW = 'rgb(var(--color-gold))';
const SAGE = 'rgb(var(--color-sage))';

/* Simplified British Columbia, drawn on a 760 × 680 grid (north at the top). */
const MAINLAND = 'M61 40 L546 40 L546 345 L600 420 L650 500 L699 600 L470 600 L464 585 L431 559 L393 524 L354 498 L342 447 L316 396 L283 330 L275 310 L290 244 L239 193 L150 91 L61 52 Z';
const ISLAND = 'M325 500 L360 515 L410 560 L455 600 L470 630 L455 640 L430 620 L395 590 L350 550 L320 520 Z';
const HAIDA = 'M205 335 L225 340 L250 400 L265 440 L255 445 L232 410 L210 370 Z';

/** HOME 8 — line map of BC; the service cities appear one by one. */
export default function HomeMap() {
  return (
    <section className="bg-sage/50 px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{c.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(2.75rem,5.4vw,4rem)] font-medium leading-none" lines={[<>{c.titleMain} <em className="italic">{c.titleItalic}</em></>]} />
          <Reveal delay={0.1} as="p" className="text-base leading-relaxed text-ink-soft">{c.text}</Reveal>
          <Reveal delay={0.15} as="ul" className="grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-line pt-5">
            {c.cities.map((city) => (
              <li key={city.name} className="flex items-center gap-2.5 text-[15px]"><span className="h-2 w-2 rounded-full bg-gold-display" aria-hidden="true" />{city.name}</li>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-2"><Button href={c.button.href} variant="outline" {...(c.button.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{c.button.text}</Button></Reveal>
        </div>

        <svg viewBox="0 0 760 680" fill="none" className="mx-auto h-auto w-full max-w-[720px] max-sm:[&_.city]:text-[30px]" role="img" aria-label={`Map of British Columbia showing ${c.cities.map((x) => x.name).join(', ')}`}>
          <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
            <path d={MAINLAND} fill={SAGE} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
            <path d={ISLAND} fill={SAGE} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
            <path d={HAIDA} fill={SAGE} stroke={INK} strokeWidth="1.2" strokeLinejoin="round" />
            <text x="330" y="150" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="34" fontStyle="italic" fill={GOLD}>British Columbia</text>
          </motion.g>
          {c.cities.map((city, i) => (
            <motion.g
              key={city.name}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: motionConfig.ease, delay: 0.5 + i * 0.18 }}
              style={{ transformOrigin: `${city.x}px ${city.y}px` }}
            >
              <motion.circle
                cx={city.x}
                cy={city.y}
                fill={GLOW}
                initial={{ r: 10, opacity: 0.45 }}
                animate={{ r: [10, 26], opacity: [0.45, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <circle cx={city.x} cy={city.y} r="15" fill={GLOW} opacity="0.3" />
              <circle cx={city.x} cy={city.y} r="5.5" fill={GOLD} />
              <text
                x={city.side === 'left' ? city.x - 14 : city.x + 14}
                y={city.y + 5}
                textAnchor={city.side === 'left' ? 'end' : 'start'}
                className="city"
                fontFamily="Manrope, sans-serif"
                fontSize={c.cities.length === 1 ? 22 : 15}
                fontWeight="600"
                fill={INK}
              >
                {city.name}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </section>
  );
}
