import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Home, Info, Images, BadgeCheck, Building2, Truck, Car, Bike, PawPrint, Package, Route, Upload } from 'lucide-react';

export default function Footer() {
  const [visits, setVisits] = useState(null);
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,es,fr,de,ar,bn,ta,te,ml,pa,mr,gu,ur',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element',
          );
        }
      };
    }
    const id = 'google-translate-script';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id;
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(s);
    }
  }, []);
  useEffect(() => {
    try {
      const key = 'tw_visit_count';
      const base = 8600 + Math.floor(Math.random() * 400);
      const current = parseInt(localStorage.getItem(key) || `${base}`, 10);
      const next = current + 1;
      localStorage.setItem(key, `${next}`);
      setVisits(next);
    } catch {
      setVisits(8800);
    }
  }, []);
  const quickLinks = [
    { label: 'Home', href: '#', Icon: Home },
    { label: 'About Us', href: '/#/about', Icon: Info },
    { label: 'Services', href: '/#/services', Icon: BadgeCheck },
    { label: 'Branches', href: '#', Icon: Building2 },
    { label: 'Gallery', href: '#gallery', Icon: Images },
    { label: 'Certificates', href: '/#/certificates', Icon: BadgeCheck },
    { label: 'Contact Us', href: '#contact', Icon: Phone },
  ];
  const ourServices = [
    { label: 'Packers And Movers Service', Icon: Package },
    { label: 'Movers And Packers Service', Icon: Package },
    { label: 'Relocation Service', Icon: Route },
    { label: 'Household Shifting Service', Icon: Home },
    { label: 'Shifting Service', Icon: Route },
    { label: 'Transport Service', Icon: Truck },
    { label: 'Car Transport Service', Icon: Car },
    { label: 'Bike Transport Service', Icon: Bike },
    { label: 'Pet Transport Service', Icon: PawPrint },
    { label: 'Loading Unloading Service', Icon: Upload },
    { label: 'Packing Unpacking Service', Icon: Package },
    { label: 'Packaging Unpackaging Service', Icon: Package },
  ];
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <img src="/gallery/logo.png" alt="Trustway Logo" className="h-10 w-auto rounded-md bg-white p-1 shadow-lg" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-bold tracking-tight">TRUSTWAY</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Aligarh</span>
              </div>
            </div>
            <h4 className="text-white font-bold">About Trustway Packers & Movers</h4>
            <p className="leading-relaxed">Your trusted relocation partner across India. We specialize in safe, reliable and affordable shifting for homes, offices and vehicles.</p>
            <div className="text-xs space-y-1">
              <p>GSTIN: 09EMMPB2450Q1ZL</p>
              <p>UDYAM: UP-02-0162382</p>
              <p>ISO Certified Company</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href, Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={16} className="text-amber-400" />
                  <a href={href} className="hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {ourServices.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={16} className="text-amber-400" />
                  <a href="#" className="hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>House No. 610, Ground Floor, Panch Vihar Colony, Gali No. 5, Behind Engineers Colony, Quarsi Holi Chawk, Aligarh, Uttar Pradesh 202001<br />Owner: Akash Kumar Tomar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 9627209705</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>trustwaypackersandmovers@gmail.com</span>
                  <span>info@trustwaypackersandmovers.co.in</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 translate-wrapper">
              <div className="translate-label">Select Language</div>
              <div id="google_translate_element" />
              <div className="mt-1 text-[10px] text-slate-500">Powered by Google Translate</div>
            </div>
            <div className="mt-4 flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center text-sm mb-4">
          Visitor Count:&nbsp;<span className="text-rose-500 font-semibold">{visits ?? '—'}</span>
        </div>
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2026 Trustway Packers And Movers Aligarh. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <a  >
              Privacy Policy
            </a>
            <a  >
              Terms of Service
            </a>
            <a
              href="https://www.webworldhub.co.in/"
              className="text-amber-400 hover:text-white transition-colors font-semibold"
              aria-label="Designed by Web World Hub"
            >
              Designed by&nbsp;Web World Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

