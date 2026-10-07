import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MechanicalPage from './pages/MechanicalPage';
import ContactPage from './pages/ContactPage';
import { introWillPlay, markIntroSeen } from './lib/intro';
import { motionConfig } from './config/motion';
import { lockScroll, startSmoothScroll } from './lib/smoothScroll';

/** Every page shares the Navbar, Footer, opening curtain and smooth scrolling.
 *  Unknown addresses go to the home page. */
export default function App() {
  const [loading, setLoading] = useState(introWillPlay);

  useEffect(() => startSmoothScroll(), []);

  // Keep the page still while the intro plays
  useEffect(() => {
    lockScroll(loading);
    return () => lockScroll(false);
  }, [loading]);

  const introDone = () => { markIntroSeen(); setLoading(false); };

  return (
    <MotionConfig reducedMotion={motionConfig.enabled ? 'user' : 'always'}>
      <AnimatePresence>{loading && <Loader key="intro" onDone={introDone} />}</AnimatePresence>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/mechanical" element={<MechanicalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </MotionConfig>
  );
}
