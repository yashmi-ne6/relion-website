import SectionPage from '../components/layout/SectionPage';
import { aboutClosing, aboutSections, aboutSeo } from '../config/aboutPage';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutDirector from '../components/about/AboutDirector';
import AboutMission from '../components/about/AboutMission';
import AboutTeam from '../components/about/AboutTeam';
import AboutStandards from '../components/about/AboutStandards';
import Closing from '../components/sections/Closing';

/** Section ids (from src/config/aboutPage.js → aboutSections) → components. */
const REGISTRY = {
  hero: AboutHero,
  story: AboutStory,
  director: AboutDirector,
  mission: AboutMission,
  team: AboutTeam,
  standards: AboutStandards,
  closing: () => <Closing content={aboutClosing} />,
};

export default function AboutPage() {
  return <SectionPage sections={aboutSections} registry={REGISTRY} seo={aboutSeo} />;
}
