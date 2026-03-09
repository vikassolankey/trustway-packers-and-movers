import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Star, ArrowRight } from 'lucide-react';
import { HeroScene } from './ThreeScene.jsx';
import { imageSrc } from '../lib/ui.js';

export default function Hero({ onOpenModal }) {
  const line1 = 'Fast & Reliable';
  const line2 = 'Trustway Movers';
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [phase, setPhase] = useState(1);
  const [blink, setBlink] = useState(true);
  const bgs = ['/gallery/hero.png', '/gallery/home-bg1.jpeg', '/gallery/home-bg2.jpeg', '/gallery/home-bg3.jpeg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    let j = 0;
    let active = true;
    const tick = () => {
      if (!active) return;
      if (i < line1.length) {
        setT1(line1.slice(0, i + 1));
        i += 1;
        setPhase(1);
      } else if (j < line2.length) {
        setT2(line2.slice(0, j + 1));
        j += 1;
        setPhase(2);
      } else {
        active = false;
        return;
      }
      setTimeout(tick, 60);
    };
    tick();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgs.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${bgs[bgIndex]}')` }}
          aria-hidden="true"
        />
      </div>
      <HeroScene />
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <Shield size={14} />
            100% Safe & Secure Moving
          </div>
          <motion.h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            <span className="inline-block">
              {t1}
              <span className={`inline-block align-baseline ml-1 w-1 h-[1em] ${phase === 1 && blink ? 'bg-slate-400' : 'bg-transparent'}`} />
            </span>
            <br />
            <span className="text-gradient inline-block mt-2">
              {t2}
              <span className={`inline-block align-baseline ml-1 w-1 h-[1em] ${phase === 2 && blink ? 'bg-slate-400' : 'bg-transparent'}`} />
            </span>
          </motion.h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">Move your home and office safely with Trustway Packers and Movers Aligarh. We handle your belongings with care and precision.</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onOpenModal} className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group">
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
                  src={imageSrc(`https://picsum.photos/seed/user${i}/100/100`)}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  alt="User"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/gallery/logo.png';
                  }}
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

    </section>
  );
}

