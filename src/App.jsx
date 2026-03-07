import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Truck,
  Package,
  Shield,
  Clock,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Warehouse,
  Car,
  Box as BoxIcon,
} from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HeroScene, ServicesScene, BackgroundParticles, PackageScene } from './components/ThreeScene.jsx';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function proxied(src) {
  try {
    return src;
  } catch {
    return src;
  }
}

function imageSrc(src) {
  if (!src) return src;
  return /^https?:\/\//i.test(src) ? proxied(src) : src;
}

import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    items: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      setStatus('error');
      setErrorMsg('Missing EmailJS config');
      return;
    }
    try {
      const msg = [
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email || 'N/A'}`,
        `Moving From: ${formData.movingFrom}`,
        `Moving To: ${formData.movingTo}`,
        `Moving Date: ${formData.movingDate}`,
        `Items: ${formData.items || 'N/A'}`,
      ].join('\n');
      const params = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'N/A',
        moving_from: formData.movingFrom,
        moving_to: formData.movingTo,
        moving_date: formData.movingDate,
        items: formData.items || 'N/A',
        submitted_at: new Date().toISOString(),
        message: msg,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', movingFrom: '', movingTo: '', movingDate: '', items: '' });
      }, 2000);
    } catch (e) {
      setStatus('error');
      // eslint-disable-next-line no-console
      console.error('EmailJS send error', e);
      setErrorMsg(e?.text || e?.message || 'Email send failed');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-primary">Book Your Move</h2>
                  <p className="text-slate-500">Fill in the details to get started.</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">Booking Successful!</h3>
                  <p className="text-slate-500">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Moving From</label>
                      <input
                        required
                        type="text"
                        placeholder="City, Area"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.movingFrom}
                        onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Moving To</label>
                      <input
                        required
                        type="text"
                        placeholder="City, Area"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.movingTo}
                        onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Moving Date</label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.movingDate}
                      onChange={(e) => setFormData({ ...formData, movingDate: e.target.value })}
                    />
                  </div>
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Processing...' : 'Confirm Booking'}
                  </button>
                  {status === 'error' && (
                    <p className="text-center text-rose-500 text-sm font-medium">{errorMsg || 'Something went wrong. Please try again.'}</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all  bg-white duration-300 px-6 py-4',
        isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/gallery/logo.png"
            alt="Trustway Logo"
            className="h-15 w-auto rounded-md "
          />
        
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 active:scale-95"
          >
            Get a Quote
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button onClick={onOpenModal} className="bg-primary text-white w-full py-3 rounded-xl font-semibold mt-2">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <HeroScene />
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <Shield size={14} />
            100% Safe & Secure Moving
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            Fast & Reliable <br />
            <span className="text-gradient">Trustway Movers</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Move your home and office safely with Trustway Packers and Movers Aligarh. We handle your belongings with care and precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenModal}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group"
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all border border-slate-200 flex items-center gap-2">
              Our Services
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={proxied(`https://picsum.photos/seed/user${i}/100/100`)}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">Trusted by 10,000+ Families</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const QuoteForm = () => {
  return (
    <section className="py-20 relative z-10 -mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-2">Get an Instant Estimate</h2>
            <p className="text-slate-500">Tell us about your move and get a price in seconds</p>
          </div>

          <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Pickup Location
              </label>
              <input type="text" placeholder="City or Pincode" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Drop Location
              </label>
              <input type="text" placeholder="City or Pincode" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar size={16} className="text-primary" /> Move Date
              </label>
              <input type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Package size={16} className="text-primary" /> Type of Move
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                <option>Home Shifting</option>
                <option>Office Relocation</option>
                <option>Vehicle Transport</option>
                <option>Storage</option>
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-4 mt-4">
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 active:scale-[0.98]">Calculate Estimate</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Household Shifting',
      desc: 'Safe and secure relocation of your home belongings with premium packing.',
      icon: <BoxIcon className="text-blue-600" size={32} />,
      color: 'bg-blue-50',
    },
    {
      title: 'Office Relocation',
      desc: 'Minimize downtime with our efficient and professional office moving services.',
      icon: <Warehouse className="text-indigo-600" size={32} />,
      color: 'bg-indigo-50',
    },
    {
      title: 'Industrial Shifting',
      desc: 'Specialized moving services for heavy machinery and industrial equipment.',
      icon: <Truck className="text-emerald-600" size={32} />,
      color: 'bg-emerald-50',
    },
    {
      title: 'Car & Bike Transport',
      desc: 'Specially designed carriers for safe transportation of your vehicles.',
      icon: <Car className="text-amber-600" size={32} />,
      color: 'bg-amber-50',
    },
    {
      title: 'Local & Domestic',
      desc: 'Seamless moving services across the city or anywhere in India.',
      icon: <MapPin className="text-rose-600" size={32} />,
      color: 'bg-rose-50',
    },
    {
      title: 'Packing & Unpacking',
      desc: 'Expert packing using high-quality materials to ensure zero damage.',
      icon: <Package className="text-violet-600" size={32} />,
      color: 'bg-violet-50',
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <ServicesScene />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Premium Services</h2>
          <p className="text-slate-600 text-lg">We offer a wide range of logistics solutions tailored to your specific moving needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2"
            >
              <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110', service.color)}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold group/link">
                Learn More <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: 'Book Online',
      desc: 'Select your service and get an instant quote through our platform.',
      icon: <Calendar size={32} />,
    },
    {
      title: 'Professional Packing',
      desc: 'Our team arrives with premium materials to pack your items safely.',
      icon: <Package size={32} />,
    },
    {
      title: 'Safe Transportation',
      desc: 'Your belongings are transported in GPS-enabled secure vehicles.',
      icon: <Truck size={32} />,
    },
    {
      title: 'Doorstep Delivery',
      desc: 'We deliver and help you unpack at your new destination.',
      icon: <CheckCircle2 size={32} />,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <PackageScene />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
          <p className="text-slate-400 text-lg">Four simple steps to a stress-free moving experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />}
              <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-8 relative z-10 shadow-2xl">
                <div className="text-primary">{step.icon}</div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">{i + 1}</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const fallback = [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
  ];
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/gallery');
        const list = (await r.json()) ?? [];
        setImages([...list, ...fallback]);
      } catch {
        setImages([...fallback]);
      }
    })();
  }, []);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Work in Action</h2>
          <p className="text-slate-600 text-lg">Glimpses of our professional packing and moving operations across India.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg">
              <img
                src={imageSrc(src)}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = imageSrc(fallback[i % fallback.length]);
                }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                  <ChevronRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Trusted Professionals',
      desc: 'Background-verified and highly trained packing specialists.',
      icon: <Shield className="text-blue-500" />,
    },
    {
      title: 'Affordable Pricing',
      desc: 'Transparent quotes with no hidden costs or surprises.',
      icon: <Star className="text-amber-500" />,
    },
    {
      title: 'Safe Delivery',
      desc: 'Zero-damage guarantee with comprehensive insurance options.',
      icon: <CheckCircle2 className="text-emerald-500" />,
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated move managers to assist you at every step.',
      icon: <Clock className="text-indigo-500" />,
    },
    {
      title: 'Nationwide Service',
      desc: 'Extensive network covering 500+ cities across India.',
      icon: <MapPin className="text-rose-500" />,
    },
    {
      title: 'Real-time Tracking',
      desc: 'Track your shipment live with our GPS-enabled fleet.',
      icon: <Truck className="text-violet-500" />,
    },
  ];

  return (
    <section id="why-us" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Why Thousands Trust <br />
              <span className="text-accent">Trustway Aligarh</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">We've redefined the moving industry in India with technology, transparency, and a customer-first approach.</p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={proxied('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000') } alt="Warehouse" className="w-full h-[600px] object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2">99.8%</div>
                  <p className="text-slate-200 font-medium">Customer Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rahul Sharma',
      role: 'Home Owner',
      text: 'InstantPacker made my move from Delhi to Bangalore absolutely seamless. The team was professional and handled my fragile items with extreme care.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'IT Professional',
      text: 'Best experience with packers and movers so far. Transparent pricing and the tracking feature kept me at peace throughout the journey.',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Business Owner',
      text: 'Relocated my entire office over the weekend. Minimal downtime and everything was set up perfectly at the new location. Highly recommended!',
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg">Real stories from families and businesses we've helped move.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100">
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={proxied(`https://picsum.photos/seed/review${i}/100/100`)} className="w-12 h-12 rounded-full" alt={review.name} referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenModal }) => {
  return (
    <section className="py-20 px-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto rounded-[3rem] bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 py-20 px-12 text-center md:text-left md:flex items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to Move?</h2>
            <p className="text-blue-100 text-xl mb-8">Get your free estimate today and experience the most reliable moving service in India.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button onClick={onOpenModal} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                Book Your Move Now
              </button>
              <button className="bg-primary-dark text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark/80 transition-all flex items-center gap-2">
                <Phone size={20} /> Call Us: +91 9258157772
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <Truck size={240} className="text-white/20" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
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
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>
                  Shop No. A102 Ground Floor, Dilshad Colony, Aligarh Bypass Rd, nearby Indian Oil Petrol, opposite Waqar Hospital, Dhorra, Jamalpur Ka Nagla,
                  Aligarh, UP 202001
                </span>
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
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2024 Trustway Packers And Movers Aligarh. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <BackgroundParticles />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <QuoteForm />
        <Services />
        <HowItWorks />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <CTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

