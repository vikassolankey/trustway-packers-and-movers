import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import PinterestIcon from './icons/PinterestIcon.jsx';
import { cn } from '../lib/ui.js';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '/#/about' },
    { name: 'Services', href: '/#/services' },
    { name: 'Gallery', href: '/#/gallery' },
    { name: 'Video', href: '/#/video' },
    { name: 'Contact Us', href: '/#/contact' },
    { name: 'Branches', href: '/#/branches' },
  ];

  const barState = isMobileMenuOpen
    ? 'top-0 bg-white shadow-lg py-3'
    : isScrolled
      ? 'top-0 glass shadow-lg py-3'
      : 'top-10 md:top-12 bg-transparent';
  return (
    <nav className={cn('fixed left-0 right-0 z-40 transition-all duration-300 px-6 py-4', barState)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/gallery/logo.png" alt="Trustway Logo" className="h-15 w-auto rounded-md " />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Instagram, Linkedin, PinterestIcon, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 p-6 md:hidden flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-slate-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin, PinterestIcon, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
