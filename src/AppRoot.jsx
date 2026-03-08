import { useEffect, useState } from 'react';
import { BackgroundParticles } from './components/ThreeScene.jsx';
import { Navbar, Footer, TopHeader, FloatingContact } from './components/layout/index.js';
import { Hero, QuoteForm, AboutUs, Services, HowItWorks, Stats, TrustedCompanies, Gallery, WhyChooseUs, RatesCharges, Testimonials } from './components/sections/index.js';
import CTA from './components/CTA.jsx';
import Certificates from './components/Certificates.jsx';
import AboutPage from './components/AboutPage.jsx';
import BookingModal from './components/BookingModal.jsx';
import ServicesPage from './components/ServicesPage.jsx';

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
  if (route === '#/certificates') {
    return (
      <div className="relative">
        <TopHeader />
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <main>
          <div className="pt-24">
            <Certificates />
          </div>
        </main>
        <Footer />
        <FloatingContact />
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }
  if (route === '#/about') {
    return (
      <div className="relative">
        <TopHeader />
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <main>
          <div className="pt-24">
            <AboutPage />
          </div>
        </main>
        <Footer />
        <FloatingContact />
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }
  if (route === '#/services') {
    return (
      <div className="relative">
        <TopHeader />
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <main>
          <div className="pt-24">
            <ServicesPage />
            <div className="-mt-32 md:-mt-40 lg:-mt-44">
              <Services />
            </div>
          </div>
        </main>
        <Footer />
        <FloatingContact />
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }
  return (
    <div className="relative">
      <BackgroundParticles />
      <TopHeader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
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
      <Footer />
      <FloatingContact />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
