import { motion } from 'motion/react';
import { Shield, Star, CheckCircle2, Clock, MapPin, Truck } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';

export default function WhyChooseUs() {
  const features = [
    { title: 'Trusted Professionals', desc: 'Background-verified and highly trained packing specialists.', icon: <Shield className="text-blue-500" /> },
    { title: 'Affordable Pricing', desc: 'Transparent quotes with no hidden costs or surprises.', icon: <Star className="text-amber-500" /> },
    { title: 'Safe Delivery', desc: 'Zero-damage guarantee with comprehensive insurance options.', icon: <CheckCircle2 className="text-emerald-500" /> },
    { title: '24/7 Support', desc: 'Dedicated move managers to assist you at every step.', icon: <Clock className="text-indigo-500" /> },
    { title: 'Nationwide Service', desc: 'Extensive network covering 500+ cities across India.', icon: <MapPin className="text-rose-500" /> },
    { title: 'Real-time Tracking', desc: 'Track your shipment live with our GPS-enabled fleet.', icon: <Truck className="text-violet-500" /> },
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
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={imageSrc('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')} alt="Warehouse" className="w-full h-[600px] object-cover" referrerPolicy="no-referrer" />
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
}
