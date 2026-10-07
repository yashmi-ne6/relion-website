/* =========================================================================
   MOTION — slow, elegant, editorial. Durations/delays in seconds.
   Everything switches off automatically for people who ask their device
   to reduce motion.
   ========================================================================= */

export const motionConfig = {
  enabled: true,
  ease: [0.22, 0.61, 0.36, 1],

  smoothScroll: { enabled: true, lerp: 0.09 },      // lower = smoother/slower scrolling

  curtain: { logo: 0.9, line: 1.1, lift: 1.0 },      // opening curtain timings
  lines: { duration: 1.1, stagger: 0.12 },           // headline lines rising into view
  fade: { duration: 0.9, stagger: 0.08 },            // paragraphs, cards, list rows
  parallax: { image: 8 },                            // % a photo drifts inside its arch frame
  hoverPreview: { spring: { stiffness: 180, damping: 22 }, rotate: -4 },
  counter: { damping: 60, stiffness: 90 },           // numbers counting up
  marquee: { seconds: 40 },                          // one loop of the promise word strip
  menu: { duration: 0.6 },
};
