import SectionPage from '../components/layout/SectionPage';
import { mechClosing, mechSections, mechSeo } from '../config/mechanicalPage';
import MechHero from '../components/mechanical/MechHero';
import MechCore from '../components/mechanical/MechCore';
import MechDetail from '../components/mechanical/MechDetail';
import MechProcess from '../components/mechanical/MechProcess';
import MechEmergency from '../components/mechanical/MechEmergency';
import MechTrust from '../components/mechanical/MechTrust';
import Closing from '../components/sections/Closing';

/** Section ids (from src/config/mechanicalPage.js → mechSections) → components. */
const REGISTRY = {
  hero: MechHero,
  core: MechCore,
  detail: MechDetail,
  process: MechProcess,
  emergency: MechEmergency,
  trust: MechTrust,
  closing: () => <Closing content={mechClosing} />,
};

export default function MechanicalPage() {
  return <SectionPage sections={mechSections} registry={REGISTRY} seo={mechSeo} />;
}
