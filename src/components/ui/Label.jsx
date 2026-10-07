/** Small uppercase gold label with a short gold line — sits above headings. */
export default function Label({ children, className = '', line = 'left' }) {
  const rule = <span className="h-px w-10 flex-shrink-0 bg-gold" aria-hidden="true" />;
  return (
    <p className={`flex items-center gap-3.5 text-[11px] uppercase tracking-[0.28em] text-gold-text md:text-[13px] ${className}`}>
      {(line === 'left' || line === 'both') && rule}
      <span>{children}</span>
      {line === 'both' && rule}
    </p>
  );
}
