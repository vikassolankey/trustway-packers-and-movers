import { useEffect, useState } from 'react';
import { BackgroundParticles } from './components/ThreeScene.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Stats from './components/Stats.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import Gallery from './components/Gallery.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Certificates from './components/Certificates.jsx';
import RatesCharges from './components/RatesCharges.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import TopHeader from './components/TopHeader.jsx';
import FloatingContact from './components/FloatingContact.jsx';

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
