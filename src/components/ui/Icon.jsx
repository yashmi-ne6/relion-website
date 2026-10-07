import { Users, Wrench, TrendingUp, Shield, Clock, Award, Circle } from 'lucide-react';

/** Icons available to content configs by name. To use a new icon: import it from
 *  lucide-react (https://lucide.dev/icons) and add it to this map. */
const ICONS = { Users, Wrench, TrendingUp, Shield, Clock, Award };

export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] ?? Circle;
  return <Cmp aria-hidden="true" {...props} />;
}
