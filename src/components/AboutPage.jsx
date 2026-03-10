import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Truck, Users } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';
import OwnerSection from './OwnerSection.jsx';

export default function AboutPage() {
  const bg = '/gallery/about-bg.jpeg';
  const phrases = ['Safe', 'Fast', 'Reliable'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(120);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  useEffect(() => {
    if (isMobile) {
      setText('Safe • Fast • Reliable');
      return;
    }
    const current = phrases[loop % phrases.length];
    const next = isDeleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1);
    const t = setTimeout(() => {
      setText(next);
      if (!isDeleting && next === current) {
        setIsDeleting(true);
        setSpeed(80);
      } else if (isDeleting && next === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
        setSpeed(120);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, loop, speed, isMobile]);
  const stats = [
    { label: 'Years Experience', value: '10+', Icon: Shield },
    { label: 'Moves Completed', value: '5000+', Icon: Truck },
    { label: 'Happy Clients', value: '100%', Icon: Users },
  ];
  const headingSteps = 30;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center">
        <img src={imageSrc(bg)} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-extrabold text-white leading-tight typing-heading"
            style={{ '--typing-steps': headingSteps, '--typing-ch': `${headingSteps}ch` }}
          >
            About <span className="text-amber-400">Trustway</span> <span className="text-emerald-400">Packers & Movers</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
            <span className="text-slate-300">We are </span>
            <span className="typewriter font-semibold text-amber-400">{text}</span>
          </motion.div>
          <p className="mt-4 text-slate-200 max-w-2xl">
            Delivering trust, safety and care with every move. Learn about our journey and why families and businesses across India choose us for seamless relocation.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 text-white flex items-center gap-3"
              >
                <s.Icon className="text-amber-400" />
                <div>
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-xs text-slate-200/90">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Moving Made Easy, With Care & Trust</h2>
            <p className="text-slate-600 mb-4">
              We provide safe, fast, and reliable shifting solutions for homes, offices, and businesses. From packing to delivery, every step is stress‑free and transparent.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Professional packing with premium materials</li>
              <li>• GPS‑enabled secure transportation</li>
              <li>• Dedicated move manager and support</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OwnerSection />
    </div>
  );
}
