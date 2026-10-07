import { Link } from 'react-router-dom';

const isInternal = (href = '') => href.startsWith('/') && !href.startsWith('//');

/** Link that uses the router for internal paths and a plain <a> otherwise. */
export function SmartLink({ href, children, ...rest }) {
  return isInternal(href) ? <Link to={href} {...rest}>{children}</Link> : <a href={href} {...rest}>{children}</a>;
}

const base = 'inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-semibold transition-colors duration-300 min-h-[48px]';
const variants = {
  primary: 'bg-ink px-7 text-ivory hover:bg-ink-soft',
  outline: 'border border-ink px-7 text-ink hover:bg-ink hover:text-ivory',
};

/** Quiet pill button: filled green (primary) or green outline. */
export function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  return (
    <SmartLink href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </SmartLink>
  );
}

/** Text link with a fine gold underline. */
export function TextLink({ href, className = '', children, ...rest }) {
  return (
    <SmartLink href={href} className={`gold-underline text-[15px] font-semibold text-ink transition-colors hover:text-gold-text ${className}`} {...rest}>
      {children}
    </SmartLink>
  );
}

export const roman = (n) => ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] || String(n + 1);
