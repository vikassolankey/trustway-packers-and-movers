import { motion } from 'motion/react';
import { ChevronRight, Box as BoxIcon, Warehouse, Truck, Car, MapPin, Package } from 'lucide-react';
import { cn } from '../lib/ui.js';
import { ServicesScene } from './ThreeScene.jsx';

export default function Services() {
  const services = [
    { title: 'Household Shifting', desc: 'Safe and secure relocation of your home belongings with premium packing.', icon: <BoxIcon className="text-blue-600" size={32} />, color: 'bg-blue-50' },
    { title: 'Office Relocation', desc: 'Minimize downtime with our efficient and professional office moving services.', icon: <Warehouse className="text-indigo-600" size={32} />, color: 'bg-indigo-50' },
    { title: 'Industrial Shifting', desc: 'Specialized moving services for heavy machinery and industrial equipment.', icon: <Truck className="text-emerald-600" size={32} />, color: 'bg-emerald-50' },
    { title: 'Car & Bike Transport', desc: 'Specially designed carriers for safe transportation of your vehicles.', icon: <Car className="text-amber-600" size={32} />, color: 'bg-amber-50' },
    { title: 'Local & Domestic', desc: 'Seamless moving services across the city or anywhere in India.', icon: <MapPin className="text-rose-600" size={32} />, color: 'bg-rose-50' },
    { title: 'Packing & Unpacking', desc: 'Expert packing using high-quality materials to ensure zero damage.', icon: <Package className="text-violet-600" size={32} />, color: 'bg-violet-50' },
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
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2">
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
}

