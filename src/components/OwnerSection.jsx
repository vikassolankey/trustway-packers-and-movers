import { motion } from 'motion/react';

export default function OwnerSection() {
  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-white border border-slate-200"
          >
            <img 
              src="/gallery/ownerimg.jpeg"
              alt="Founder of Trustway Packers & Movers"
              className="w-full h-[340px] md:h-[650px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Meet Our <span className="text-accent">Founder</span>
            </h2>
            <div className="text-slate-700">
              <div className="text-lg font-semibold text-slate-900">Mr. Satybhan Tomar </div>
              <p className="mt-2">
                With years of hands‑on experience in logistics and relocation, our founder has built
                a customer‑first culture focused on care, safety, and punctual delivery. From
                planning to final placement, every move is handled with precision, transparency, and
                accountability.
              </p>
            </div>
            <blockquote className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="italic text-slate-800">
                “Every relocation is a responsibility entrusted to us—we treat your belongings like
                our own and deliver peace of mind with every move.”
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

