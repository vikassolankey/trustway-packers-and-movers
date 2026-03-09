import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundParticles } from './components/ThreeScene.jsx';
import { Navbar, Footer, TopHeader, FloatingContact } from './components/layout/index.js';
import { Hero, QuoteForm, AboutUs, Services, HowItWorks, Stats, TrustedCompanies, Gallery, WhyChooseUs, RatesCharges, Testimonials } from './components/sections/index.js';
import CTA from './components/CTA.jsx';
import Certificates from './components/Certificates.jsx';
import AboutPage from './components/AboutPage.jsx';
import BookingModal from './components/BookingModal.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import VideoPage from './components/VideoPage.jsx';
import BranchesPage from './components/BranchesPage.jsx';
import ContactPage from './components/ContactPage.jsx';

export default function AppRoot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [route, setRoute] = useState(typeof window !== 'undefined' ? window.location.hash : '');
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [route]);
  useEffect(() => {
    try {
      const key = 'tw_enquiry_seen_at';
      const last = parseInt(localStorage.getItem(key) || '0', 10);
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      if (!last || now - last > oneDay) {
        const t = setTimeout(() => setIsModalOpen(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      const t = setTimeout(() => setIsModalOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);
  useEffect(() => {
    if (!isModalOpen) return;
    try {
      localStorage.setItem('tw_enquiry_seen_at', `${Date.now()}`);
    } catch {
      /* ignore */
    }
  }, [isModalOpen]);
  let page = null;
  if (route === '#/certificates') {
    page = (
      <div className="pt-24">
        <Certificates />
      </div>
    );
  } else if (route === '#/about') {
    page = (
      <div className="pt-24">
        <AboutPage />
      </div>
    );
  } else if (route === '#/services') {
    page = (
      <div className="pt-24">
        <ServicesPage />
        <div className="-mt-32 md:-mt-40 lg:-mt-44">
          <Services />
        </div>
      </div>
    );
  } else if (route === '#/gallery') {
    page = (
      <div className="pt-24">
        <GalleryPage />
      </div>
    );
  } else if (route === '#/video') {
    page = (
      <div className="pt-24">
        <VideoPage />
      </div>
    );
  } else if (route === '#/branches') {
    page = (
      <div className="pt-24">
        <BranchesPage />
      </div>
    );
  } else if (route === '#/contact') {
    page = (
      <div className="pt-24">
        <ContactPage />
      </div>
    );
  } else {
    page = (
      <>
        <BackgroundParticles />
        <main>
          <Hero onOpenModal={() => setIsModalOpen(true)} />
          <AboutUs onOpenModal={() => setIsModalOpen(true)} />
          <Services />
          <HowItWorks />
          <Stats />
          <TrustedCompanies />
          <Gallery />
          <WhyChooseUs />
          <RatesCharges />
          <Testimonials />
          <QuoteForm />
          <CTA onOpenModal={() => setIsModalOpen(true)} />
        </main>
      </>
    );
  }
  return (
    <div className="relative">
      <TopHeader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <AnimatePresence mode="wait">
        <motion.div
          key={route || 'home'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
