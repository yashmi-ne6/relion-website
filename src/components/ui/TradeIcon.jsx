/** Fine line icons drawn for Relion's trades and perks. `name` comes from the
 *  page configs (plumbing | gas | hvac | heating | fix | crew | job | projects | growth | pay). */
const PATHS = {
  plumbing: (
    <>
      <path d="M3 7h7a3 3 0 0 1 3 3v11" />
      <path d="M3 4.5v5" />
      <path d="M10.5 21h5" />
      <path d="M19 3c1.5 2 2.5 3.4 2.5 4.7a2.5 2.5 0 0 1-5 0C16.5 6.4 17.5 5 19 3z" />
    </>
  ),
  gas: (
    <>
      <path d="M12 3c3 3.5 5 6 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2.5-5 .3 1.6 1 2.6 2 3 0-2.5.2-4.5.5-7z" />
      <path d="M12 14.5c1 .9 1.5 1.8 1.5 2.6a1.5 1.5 0 0 1-3 0c0-.8.5-1.7 1.5-2.6z" />
      <path d="M5 21h14" />
    </>
  ),
  hvac: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.4" />
      <path d="M12 10.6C12 7 13.6 5.4 15.2 5.6s1.9 2.6-1 4.6" />
      <path d="M13.3 12.7c3.1 1.8 3.7 4 2.9 5.4s-3.2.8-3.6-2.8" />
      <path d="M10.7 12.7C7.6 14.5 5.4 14 4.6 12.6s1-3.2 4.2-1.8" />
    </>
  ),
  heating: (
    <>
      <rect x="3" y="9" width="18" height="10" rx="2" />
      <path d="M7 9v10M11 9v10M15 9v10" />
      <path d="M5 19v2M19 19v2" />
      <path d="M8 3c-1 1.2 1 1.8 0 3M12 3c-1 1.2 1 1.8 0 3M16 3c-1 1.2 1 1.8 0 3" />
    </>
  ),
  fix: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z" />,
  crew: <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M14 15.2c.6-.1 1.3-.2 2-.2 3.3 0 6 2 6 5" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  job: <path d="M4 8h16v11H4zM9 8V5h6v3M4 13h16" />,
  projects: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V10l7-5 7 5v11" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  growth: (
    <>
      <path d="M4 20 10 14l4 4 6-8" />
      <path d="M15 10h5v5" />
    </>
  ),
  pay: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5" />
      <path d="M12 6.5v11" />
    </>
  ),
};

export default function TradeIcon({ name, className = 'h-16 w-16', strokeWidth = 0.9 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
