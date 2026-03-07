import { motion } from 'motion/react';
import { Phone, Truck } from 'lucide-react';

export default function CTA({ onOpenModal }) {
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
}

