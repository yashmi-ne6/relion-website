import SectionPage from '../components/layout/SectionPage';
import { homeSections, homeSeo } from '../config/homePage';
import HomeHero from '../components/home/HomeHero';
import HomePicker from '../components/home/HomePicker';
import HomeHouse from '../components/home/HomeHouse';
import HomeWhat from '../components/home/HomeWhat';
import HomeMap from '../components/home/HomeMap';
import HomeDoors from '../components/home/HomeDoors';
import HomeIntro from '../components/home/HomeIntro';
import HomeWhy from '../components/home/HomeWhy';
import HomeProof from '../components/home/HomeProof';
import MobileCallBar from '../components/home/MobileCallBar';

/** Section ids (from src/config/homePage.js → homeSections) → components. */
const REGISTRY = {
  hero: HomeHero,
  picker: HomePicker,
  house: HomeHouse,
  what: HomeWhat,
  map: HomeMap,
  doors: HomeDoors,
  intro: HomeIntro,
  why: HomeWhy,
  proof: HomeProof,
};

export default function HomePage() {
  return (
    <>
      <SectionPage sections={homeSections} registry={REGISTRY} seo={homeSeo} className="pb-20 md:pb-0" />
      <MobileCallBar />
    </>
  );
}
