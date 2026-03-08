import { motion } from 'motion/react';
import { ShieldCheck, ThumbsUp, MapPin } from 'lucide-react';

export default function ServicesPage() {
  const features = [
    { title: 'Safe Relocation', desc: 'Handled with extra care', Icon: ShieldCheck },
    { title: 'Trusted Service', desc: '100% customer satisfaction', Icon: ThumbsUp },
    { title: 'PAN India Network', desc: 'Seamless nationwide moves', Icon: MapPin },
  ];
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <img
          src="/gallery/service-bg.jpeg"
          alt="Services background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1
              className="typing-heading text-4xl md:text-6xl font-display font-extrabold text-white leading-tight"
              style={{ ['--typing-steps']: 34, ['--typing-ch']: '34ch' }}
            >
              Our Premium Relocation Services
            </h1>
            <p className="mt-6 text-slate-200/90 md:text-lg">
              At Trustway Packers & Movers, we specialize in providing hassle‑free, secure, and
              on‑time moving solutions. Explore our wide range of services tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services-list" className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-semibold shadow-lg hover:bg-amber-300 transition-colors">
                View Services
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full bg-white/95 text-slate-900 font-semibold shadow-lg hover:bg-white transition-colors">
                Contact Us
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {features.map(({ title, desc, Icon }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass bg-white/90 rounded-2xl p-4 flex items-center gap-3 shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold">{title}</div>
                    <div className="text-xs text-slate-600">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

