import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
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
            <p className="leading-relaxed">
              Trustway Packers And Movers Aligarh - India's most trusted and reliable moving service. Owned by <strong>Tomar</strong>. We make moving simple, safe, and stress-free.
            </p>
            <div className="text-xs space-y-1">
              <p>GSTIN: 09EMMPB2450Q1ZL</p>
              <p>UDYAM: UP-02-0162382</p>
            </div>
            <div className="translate-wrapper">
              <div className="translate-label">Select Language</div>
              <div id="google_translate_element" />
              <div className="mt-1 text-[10px] text-slate-500">Powered by Google Translate</div>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'How It Works', 'Pricing', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Storage Solutions', 'Packing Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
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
                <span>Shop No. A103 Ground Floor, Dilshad Colony, Aligarh Bypass Rd, nearby Indian Oil Petrol, opposite Waqar Hospital, Dhorra, Jamalpur Ka Nagla, Aligarh, UP 202001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 9258157772</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>trustwaypackersandmovers@gmail.com</span>
                  <span>info@trustwaypackersandmovers.co.in</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2024 Trustway Packers And Movers Aligarh. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href="#"
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

