/** Fine line drawing of a house beside a building site. Each trade is its own
 *  group; `states` says how to draw it: 'done' (green), 'active' (glowing gold)
 *  or 'future' (faint). Colours come from the theme tokens. */
const INK = 'rgb(var(--color-ink))';
const GOLD = 'rgb(var(--color-gold-display))';
const GLOW = 'rgb(var(--color-gold))';
const MUTED = 'rgb(var(--color-muted))';
const PAPER = 'rgb(var(--color-paper))';
const IVORY = 'rgb(var(--color-ivory))';

const look = (s) => ({
  stroke: s === 'active' ? GOLD : INK,
  strokeWidth: s === 'active' ? 2.6 : 1.8,
  opacity: s === 'future' ? 0.2 : 1,
  transition: 'stroke 0.6s, stroke-width 0.6s, opacity 0.6s',
});

const PARTS = {
  plumbing: (
    <>
      <rect x="96" y="610" width="38" height="58" rx="10" />
      <path d="M115 610 V375 H160" /><path d="M126 610 V392 H160" />
      <path d="M150 370 h40 v10 a20 12 0 0 1 -40 0 z" />
      <path d="M205 290 v-8 h28 v10" /><path d="M219 292 l-8 14 M225 292 v16 M231 292 l8 14" />
      <path d="M233 282 V600 H134" />
    </>
  ),
  gas: (
    <>
      <rect x="12" y="500" width="34" height="34" rx="4" /><circle cx="29" cy="517" r="7" />
      <path d="M46 517 H150" />
      <rect x="150" y="500" width="74" height="80" rx="3" /><path d="M150 516 H224" />
      <path d="M172 500 c-6 -8 0 -14 4 -20 c2 6 6 8 6 14 a5 5 0 0 1 -10 6z" />
      <path d="M200 500 c-6 -8 0 -14 4 -20 c2 6 6 8 6 14 a5 5 0 0 1 -10 6z" />
    </>
  ),
  hvac: (
    <>
      <rect x="500" y="520" width="78" height="60" rx="4" /><circle cx="539" cy="550" r="20" /><path d="M539 530 V570 M519 550 H559" />
      <path d="M520 520 V300 H450 M532 520 V312 H450" />
      <path d="M110 300 H450 M110 312 H450" />
      <path d="M150 312 v10 h20 v-10 M330 312 v10 h20 v-10" />
    </>
  ),
  heating: (
    <>
      <rect x="290" y="600" width="58" height="72" rx="4" /><rect x="304" y="636" width="30" height="20" rx="3" />
      <path d="M312 650 c-3 -5 1 -8 3 -12 c1 4 4 5 4 9 a3.5 3.5 0 0 1 -7 3z" />
      <path d="M330 600 V530 H372 M314 600 V454 H372" />
      <rect x="372" y="440" width="66" height="28" rx="4" /><path d="M386 440 v28 M400 440 v28 M414 440 v28 M428 440 v28" />
      <rect x="372" y="516" width="66" height="28" rx="4" /><path d="M386 516 v28 M400 516 v28 M414 516 v28 M428 516 v28" />
      <path d="M392 424 c-4 -5 4 -7 0 -12 M405 424 c-4 -5 4 -7 0 -12 M418 424 c-4 -5 4 -7 0 -12" />
    </>
  ),
  staffing: (
    <>
      <path d="M610 580 V340 H790 V580 M610 420 H790 M610 500 H790 M670 340 V580 M730 340 V580 M610 340 L670 420 M670 340 L610 420 M730 420 L790 500 M790 420 L730 500" />
      <path d="M850 580 V140 M640 160 H880 M850 140 L640 160 M700 160 V250 M680 250 H740 V262 H680 Z" />
      <circle cx="640" cy="388" r="7" /><path d="M640 395 V415 M630 403 H650 M632 386 a8 8 0 0 1 16 0" />
      <circle cx="760" cy="468" r="7" /><path d="M760 475 V495 M750 483 H770 M752 466 a8 8 0 0 1 16 0" />
      <circle cx="700" cy="548" r="7" /><path d="M700 555 V578 M690 563 H710 M692 546 a8 8 0 0 1 16 0" />
    </>
  ),
};

// Where each label's dot sits (x, y) and where its pill sits (tx, ty)
const PINS = {
  plumbing: [170, 378, 150, 230],
  gas: [29, 500, 76, 460],
  hvac: [539, 520, 566, 470],
  heating: [438, 454, 640, 300],
  staffing: [700, 330, 720, 96],
};

function Pin({ id, label, state }) {
  const [x, y, tx, ty] = PINS[id];
  const active = state === 'active';
  const col = active ? GOLD : INK;
  const w = label.length * 8.4 + 34;
  return (
    <g className="pin" style={{ opacity: state === 'future' ? 0.25 : 1, transition: 'opacity 0.6s' }}>
      <path d={`M${x} ${y} L${tx} ${ty}`} stroke={col} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx={x} cy={y} r="4.5" fill={col} />
      <rect x={tx - w / 2} y={ty - 17} width={w} height="34" rx="17" fill={active ? INK : PAPER} stroke={col} strokeWidth="1" style={{ transition: 'fill 0.6s' }} />
      <text x={tx} y={ty + 5} textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="600" fill={active ? IVORY : INK}>{label}</text>
    </g>
  );
}

export default function HouseDrawing({ steps, states, className = '' }) {
  const active = steps.find((s) => states[s.part] === 'active');
  return (
    <svg viewBox="0 0 900 740" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className} role="img" aria-label={`Line drawing of a house and a building site${active ? `; the ${active.title} part is highlighted` : ''}`}>
      <path d="M0 580 H900" stroke={INK} strokeWidth="1.3" />
      <path d="M0 586 H900" stroke={GLOW} strokeWidth="1" opacity="0.6" />
      <g stroke={INK} strokeWidth="1.3" opacity="0.7">
        <path d="M40 290 L260 130 L480 290" />
        <path d="M70 270 V580 M450 270 V580 M70 430 H450 M260 270 V580" />
        <path d="M70 580 V680 H450 V580" strokeDasharray="6 6" />
        <rect x="300" y="340" width="56" height="56" rx="2" /><path d="M328 340 V396 M300 368 H356" />
        <path d="M330 175 V115 H362 V198" />
        <rect x="370" y="500" width="40" height="80" />
      </g>
      <text x="80" y="704" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="2" fill={MUTED}>BASEMENT</text>

      {steps.map((s) => states[s.part] === 'active' && (
        <g key={`glow-${s.part}`} stroke={GLOW} strokeWidth="12" opacity="0.28">{PARTS[s.part]}</g>
      ))}
      {steps.map((s) => <g key={s.part} style={look(states[s.part])}>{PARTS[s.part]}</g>)}
      {steps.map((s) => <Pin key={`pin-${s.part}`} id={s.part} label={s.title} state={states[s.part]} />)}
    </svg>
  );
}
