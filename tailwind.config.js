/** Tailwind maps semantic names to the CSS variables in src/styles/tokens.css.
 *  Change a colour or font there, not here. */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      colors: {
        ivory: v('--color-ivory'),
        paper: v('--color-paper'),
        sage: v('--color-sage'),
        sand: v('--color-sand'),
        ink: v('--color-ink'),
        'ink-soft': v('--color-ink-soft'),
        muted: v('--color-muted'),
        gold: v('--color-gold'),
        'gold-display': v('--color-gold-display'),
        'gold-text': v('--color-gold-text'),
        line: v('--color-line'),
      },
      spacing: { gutter: 'var(--gutter)', header: 'var(--header-h)' },
    },
  },
  plugins: [],
};
