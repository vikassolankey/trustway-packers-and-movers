import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Truck, Award, Users } from 'lucide-react';

export default function AboutUs({ onOpenModal }) {
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
    const nextText = isDeleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1);
    const timeout = setTimeout(() => {
      setText(nextText);
      if (!isDeleting && nextText === current) {
        setIsDeleting(true);
        setSpeed(80);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
        setSpeed(120);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loop, speed, isMobile]);

  const stats = [
    { label: 'Industry Experience', value: '10+ Yrs', icon: <Award className="text-amber-400" size={24} /> },
    { label: 'Successful Moves', value: '5000+', icon: <Truck className="text-amber-400" size={24} /> },
    { label: 'Happy Customers', value: '10K+', icon: <Users className="text-amber-400" size={24} /> },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            About <span className="text-accent">Trustway</span> Packers & Movers
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-600 text-lg mb-2">
            We specialize in safe, fast, and stress‑free relocations. From household shifting to office relocation and
            vehicle transport, our dedicated team ensures speed, safety, and reliability at every step.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-8">
            <span className="text-slate-500">We are </span>
            <span className="typewriter font-semibold text-amber-500">{text}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={onOpenModal}
              className="bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all shadow-md active:scale-95"
            >
              Get a Free Quote
            </button>
            <a href="#contact" className="px-6 py-3 rounded-full border border-slate-300 font-semibold hover:bg-white transition-all">
              Contact Us
            </a>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-start gap-2"
              >
                <div>{s.icon}</div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img src="/gallery/truck-bg.jpeg" alt="About Trustway" className="w-full h-[380px] md:h-[460px] object-cover" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
