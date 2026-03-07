import { useState } from 'react';
import { BackgroundParticles } from './components/ThreeScene.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Stats from './components/Stats.jsx';
import Gallery from './components/Gallery.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import RatesCharges from './components/RatesCharges.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import TopHeader from './components/TopHeader.jsx';

export default function AppRoot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative">
      <BackgroundParticles />
      <TopHeader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <QuoteForm />
        <Services />
        <HowItWorks />
        <Stats />
        <Gallery />
        <WhyChooseUs />
        <RatesCharges />
        <Testimonials />
        <CTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
