import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { quoteForm as f } from '../../config/contactPage';
import { company } from '../../config/siteContent';
import { motionConfig } from '../../config/motion';
import { Reveal, RevealLines } from '../ui/Reveal';
import Label from '../ui/Label';
import { TextLink, roman } from '../ui/Button';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input = 'w-full border-0 border-b border-line bg-transparent px-0 py-2 font-serif text-[26px] text-ink placeholder:text-muted/60 transition-colors focus:border-b-2 focus:border-gold-display focus:outline-none focus:ring-0 md:text-[30px]';
const fieldLabel = 'text-[11px] uppercase tracking-[0.22em] text-muted md:text-xs';

function Field({ id, label, error, children, optional }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={fieldLabel}>{label}{optional && <span className="normal-case tracking-normal"> (optional)</span>}</label>
      {children}
      {error && <span id={`${id}-err`} className="text-[13px] text-[#9A3B2E]">{error}</span>}
    </div>
  );
}

/** Pill-shaped radio buttons (real radios underneath, so keyboard & screen readers work). */
function Chips({ name, legend, options, value, onChange, error, note }) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className={`${fieldLabel} mb-3`}>{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((o) => (
          <label key={o.value} className="cursor-pointer">
            <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="peer sr-only" />
            <span className="inline-flex min-h-[46px] items-center rounded-full border border-line px-5 text-sm text-ink transition-colors hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:font-semibold peer-checked:text-ivory peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold-text">
              {value === o.value && <span aria-hidden="true" className="mr-1.5">✓</span>}{o.label}
            </span>
          </label>
        ))}
      </div>
      {note && <span className="text-xs text-gold-text">{note}</span>}
      {error && <span className="text-[13px] text-[#9A3B2E]">{error}</span>}
    </fieldset>
  );
}

/** CONTACT 3 — three-step quote form. Arriving from a Services button
 *  (/contact?service=construction) pre-selects that service. */
export default function QuoteForm() {
  const [params] = useSearchParams();
  const preset = f.services.find((s) => s.id === params.get('service'))?.id || '';
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(0);            // furthest completed step
  const [status, setStatus] = useState('idle');   // idle | sending | sent | mailto | error
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({ name: '', company: '', email: '', phone: '', service: preset, staffing: '', workers: '', startDate: '', location: '', message: '', website: '' });
  const cardRef = useRef(null);

  useEffect(() => { if (preset) setData((d) => ({ ...d, service: preset })); }, [preset]);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e?.target ? e.target.value : e }));
  const serviceLabel = useMemo(() => f.services.find((s) => s.id === data.service)?.label || '', [data.service]);

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!data.name.trim()) e.name = 'Please enter your name.';
      if (!EMAIL.test(data.email)) e.email = 'Please enter a valid email.';
    }
    if (s === 1 && !data.service) e.service = 'Please choose a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const go = (to) => {
    setStep(to);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const next = () => { if (validate(step)) { setDone((d) => Math.max(d, step + 1)); go(step + 1); } };

  const summary = () => [
    `Name: ${data.name}`, `Company: ${data.company || '—'}`, `Email: ${data.email}`, `Phone: ${data.phone || '—'}`,
    `Service: ${serviceLabel}`, `Staffing: ${data.staffing || '—'}`, `Workers: ${data.workers || '—'}`,
    `Start date: ${data.startDate || '—'}`, `Location: ${data.location || '—'}`, '', data.message,
  ].join('\n');

  const submit = async (e) => {
    e.preventDefault();
    if (step < 2) return next();
    if (data.website) return; // spam trap
    if (!f.endpoint) {
      const subject = encodeURIComponent(`Quote request — ${serviceLabel || 'Relion'}`);
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(summary())}`;
      setStatus('mailto');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(f.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, service: serviceLabel, _subject: `Quote request — ${serviceLabel}` }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const finished = status === 'sent' || status === 'mailto';
  const slide = { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 }, transition: { duration: 0.45, ease: motionConfig.ease } };

  return (
    <section id={f.id} className="bg-sage px-gutter py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <Reveal><Label>{f.label}</Label></Reveal>
          <RevealLines className="font-serif text-[clamp(3rem,6vw,4rem)] font-medium leading-none" lines={[f.titleMain, <em key="i" className="italic">{f.titleItalic}</em>]} />
          <Reveal delay={0.15} as="p" className="text-base leading-relaxed text-ink-soft">{f.intro}</Reveal>

          <ol className="mt-4 hidden border-t border-gold lg:block" aria-label="Form steps">
            {f.steps.map((s, i) => {
              const reachable = i <= done && !finished;
              const current = i === step && !finished;
              return (
                <li key={s} className="border-b border-[#CFD8CC]">
                  <button type="button" disabled={!reachable} onClick={() => go(i)} aria-current={current ? 'step' : undefined} className={`flex w-full items-center gap-5 py-4 text-left ${current ? 'font-semibold text-ink' : 'text-muted'} ${reachable ? 'hover:text-ink' : 'cursor-default'}`}>
                    <span className="w-9 font-serif text-[28px] font-normal text-gold-display">{roman(i)}</span>
                    {s}
                    <span className="ml-auto text-sm" aria-hidden="true">{i < step || finished ? '✓' : current ? '•' : ''}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div ref={cardRef} className="scroll-mt-[calc(var(--header-h)+16px)] rounded-3xl border border-line bg-paper p-6 shadow-[0_40px_60px_-40px_rgb(31_61_58/.25)] sm:p-10 lg:p-14">
          <AnimatePresence mode="wait">
            {finished ? (
              <motion.div key="thanks" {...slide} className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center" role="status">
                <img src={company.logo.src} alt="" className="h-24 w-auto" />
                <span className="h-px w-28 bg-gold" aria-hidden="true" />
                <h3 className="font-serif text-[clamp(2.75rem,6vw,3.5rem)] font-medium leading-none">{f.thanks.titleMain} <em className="italic text-gold-display">{f.thanks.titleItalic}</em></h3>
                <p className="max-w-[420px] text-base leading-relaxed text-ink-soft">{status === 'mailto' ? f.thanks.mailtoBody : f.thanks.body}</p>
                <TextLink href={f.thanks.link.href}>{f.thanks.link.text}</TextLink>
              </motion.div>
            ) : (
              <motion.form key={`step-${step}`} {...slide} onSubmit={submit} noValidate className="flex min-h-[460px] flex-col gap-9">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[clamp(1.9rem,4vw,2.5rem)] font-medium leading-tight">{roman(step)} · {f.steps[step]}</h3>
                  <span className="flex-shrink-0 text-[13px] text-muted">Step {step + 1} of 3</span>
                </div>

                {/* honeypot: hidden from people, bots fill it */}
                <input type="text" name="website" value={data.website} onChange={set('website')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                {step === 0 && (
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field id="q-name" label="Your name" error={errors.name}>
                      <input id="q-name" autoComplete="name" value={data.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'q-name-err' : undefined} className={input} />
                    </Field>
                    <Field id="q-company" label="Company" optional>
                      <input id="q-company" autoComplete="organization" value={data.company} onChange={set('company')} className={input} />
                    </Field>
                    <Field id="q-email" label="Email" error={errors.email}>
                      <input id="q-email" type="email" autoComplete="email" value={data.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'q-email-err' : undefined} className={input} />
                    </Field>
                    <Field id="q-phone" label="Phone" optional>
                      <input id="q-phone" type="tel" autoComplete="tel" value={data.phone} onChange={set('phone')} className={input} />
                    </Field>
                  </div>
                )}

                {step === 1 && (
                  <div className="flex flex-col gap-9">
                    <Chips name="service" legend="Which service?" options={f.services.map((s) => ({ value: s.id, label: s.label }))} value={data.service} onChange={set('service')} error={errors.service} note={preset && data.service === preset ? f.prefillNote : ''} />
                    <Chips name="staffing" legend="Type of staffing" options={f.staffingTypes.map((t) => ({ value: t, label: t }))} value={data.staffing} onChange={set('staffing')} />
                    <div className="grid gap-8 sm:grid-cols-3">
                      <Field id="q-workers" label="How many workers" optional>
                        <input id="q-workers" type="number" min="1" inputMode="numeric" value={data.workers} onChange={set('workers')} className={input} />
                      </Field>
                      <Field id="q-start" label="Start date" optional>
                        <input id="q-start" type="date" value={data.startDate} onChange={set('startDate')} className={input} />
                      </Field>
                      <Field id="q-location" label="Job location" optional>
                        <input id="q-location" placeholder="City or site" value={data.location} onChange={set('location')} className={input} />
                      </Field>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <Field id="q-message" label="Your message" optional>
                    <textarea id="q-message" rows={6} placeholder={f.messagePlaceholder} value={data.message} onChange={set('message')} className={`${input} resize-y text-[22px] leading-snug md:text-[24px]`} />
                  </Field>
                )}

                {status === 'error' && <p className="text-sm text-[#9A3B2E]" role="alert">{f.errorText}</p>}

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-7">
                  {step > 0 ? (
                    <button type="button" onClick={() => go(step - 1)} className="gold-underline text-[15px] font-semibold">← Back</button>
                  ) : <span />}
                  <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-[54px] items-center rounded-full bg-ink px-8 text-[15px] font-semibold text-ivory transition-colors hover:bg-ink-soft disabled:opacity-60">
                    {step < 2 ? `Next: ${f.steps[step + 1]} →` : status === 'sending' ? 'Sending…' : 'Send request →'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
