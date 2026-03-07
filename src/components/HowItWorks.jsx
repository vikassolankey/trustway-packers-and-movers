import { motion } from 'motion/react';
import { Calendar, Package, Truck, CheckCircle2 } from 'lucide-react';
import { PackageScene } from './ThreeScene.jsx';

export default function HowItWorks() {
  const steps = [
    { title: 'Book Online', desc: 'Select your service and get an instant quote through our platform.', icon: <Calendar size={32} /> },
    { title: 'Professional Packing', desc: 'Our team arrives with premium materials to pack your items safely.', icon: <Package size={32} /> },
    { title: 'Safe Transportation', desc: 'Your belongings are transported in GPS-enabled secure vehicles.', icon: <Truck size={32} /> },
    { title: 'Doorstep Delivery', desc: 'We deliver and help you unpack at your new destination.', icon: <CheckCircle2 size={32} /> },
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
}

