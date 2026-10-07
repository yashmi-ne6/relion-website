import { motionConfig } from '../config/motion';
import { heroStart } from './intro';

export { heroStart };

/** Props for a motion element that fades/lifts in once the hero is ready. */
export const heroFade = (delay, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionConfig.fade.duration, ease: motionConfig.ease, delay: heroStart() + delay },
});
