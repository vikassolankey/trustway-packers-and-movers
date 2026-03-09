import { motion } from 'motion/react';
import { imageSrc } from '../lib/ui.js';

export default function BranchesPage() {
  const branches = [
    { state: 'Uttar Pradesh', city: 'Agra', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200' },
    { state: 'Maharashtra', city: 'Mumbai', img: 'https://cdn.pixabay.com/photo/2014/07/11/23/08/gateway-of-india-390800_1280.jpg', spot: 'Gateway of India' },
    { state: 'Delhi', city: 'New Delhi', img: 'https://www.thestatesman.com/wp-content/uploads/2019/11/india-gate.jpg', spot: 'India Gate' },
    { state: 'Rajasthan', city: 'Jaipur', img: 'https://tse2.mm.bing.net/th/id/OIP.6K4NuN_yb3RGrEyvQPE7lwHaE_?rs=1&pid=ImgDetMain&o=7&rm=3', spot: 'Hawa Mahal' },
    { state: 'West Bengal', city: 'Kolkata', img: 'https://tse2.mm.bing.net/th/id/OIP.V0LqRMzcro4z1j1bu0S1gAHaFS?rs=1&pid=ImgDetMain&o=7&rm=3', spot: 'Victoria Memorial' },
     { state: 'Punjab', city: 'Amritsar', img: 'https://th.bing.com/th/id/OIP.2BFYu206-F_H-l3tCD5M1QHaFJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', spot: 'Golden Temple' },
  ];
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
        <img
          src="/gallery/branch-bg.png"
          alt="Branches background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 " />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
              Our Branches Across India
            </h1>
            <p className="mt-6 text-slate-200/90 md:text-lg">
              Serving you nationwide with local teams and trusted partners. Find us in major cities across India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-8 md:mb-12 text-center"
          >
            States & Cities We Serve
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {branches.map((b, i) => (
              <motion.div
                key={`${b.state}-${b.city}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.06 }}
                className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={imageSrc(b.img)}
                    alt={`${b.state} - ${b.spot}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      // e.currentTarget.src = '/gallery/logo.png';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-primary font-semibold">{b.state}</div>
                  <div className="text-lg font-bold">{b.city}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
