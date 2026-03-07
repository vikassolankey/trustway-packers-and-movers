import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PackageCheck, Smile, Building2, MapPinned, ShieldCheck, Boxes, Clock4, Users } from 'lucide-react';

function Counter({ to = 0, duration = 1200, formatter }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{formatter ? formatter(val) : val}</span>;
}

const items = [
  { icon: PackageCheck, label: 'Deliveries Completed', value: 250000, suffix: 'K+', accent: '+95%' },
  { icon: Smile, label: 'Happy Customers', value: 120000, suffix: 'K+', accent: '+90%' },
  { icon: MapPinned, label: 'Cities Covered', value: 500, suffix: '', accent: '+60%' },
  { icon: Building2, label: 'Corporate Clients', value: 8000, suffix: 'K+', accent: '+4.5%' },
  { icon: ShieldCheck, label: 'Years of Trust', value: 25, suffix: '', accent: '+10%' },
  { icon: Boxes, label: 'Parcels Packed', value: 750000, suffix: 'K+', accent: '+70%' },
  { icon: Clock4, label: 'On-Time Delivery', value: 98, suffix: '%', accent: '95%' },
  { icon: Users, label: 'Team Members', value: 5000, suffix: 'K+', accent: '+50%' },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover blur-[2px]"
        style={{ backgroundImage: "url('/gallery/stats.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/40" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-display font-extrabold text-center mb-12 text-white">
          Trusted by Thousands, <span className="text-gradient">Moving India Forward</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-emerald-300">{it.accent}</span>
                </div>
                <div className="text-3xl font-extrabold mb-1 text-white">
                  <Counter
                    to={it.value}
                    formatter={(n) => {
                      if (it.suffix === 'K+') return `${Math.round(n / 1000)}K+`;
                      if (it.suffix === '%') return `${n}%`;
                      return `${n}`;
                    }}
                  />
                </div>
                <div className="text-slate-100 text-sm">{it.label}</div>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center text-xs text-slate-200 mt-6">Statistics are indicative and updated periodically.</p>
      </div>
    </section>
  );
}
