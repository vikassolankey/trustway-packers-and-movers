import { motion } from 'motion/react';
import { cn } from '../lib/ui.js';

const columns = ['Shifting Type', 'Up to 50 KM', 'Up to 500 KM', 'Up to 1000 KM', 'Up to 1500 KM', 'Within 2500 KM'];

const rows = [
  ['1 BHK Home', 'Rs. 7,000 - 11,000', 'Rs. 12,000 - 16,000', 'Rs. 20,000 - 25,000', 'Rs. 26,000 - 32,000', 'Rs. 30,000 - 35,000'],
  ['2 BHK Home', 'Rs. 12,000 - 15,000', 'Rs. 20,000 - 23,000', 'Rs. 25,000 - 30,000', 'Rs. 32,000 - 40,000', 'Rs. 40,000 - 45,000'],
  ['3 BHK Home', 'Rs. 15,000 - 18,000', 'Rs. 25,000 - 30,000', 'Rs. 35,000 - 40,000', 'Rs. 45,000 - 50,000', 'Rs. 50,000 - 65,000'],
  ['4 BHK / Villa', 'Rs. 25,000 - 30,000', 'Rs. 35,000 - 40,000', 'Rs. 50,000 - 60,000', 'Rs. 55,000 - 65,000', 'Rs. 70,000 - 90,000'],
  ['Car Transportation', 'Rs. 9,000 - 11,500', 'Rs. 12,000 - 14,500', 'Rs. 17,000 - 20,000', 'Rs. 21,000 - 25,000', '-'],
  ['Bike Transportation', 'Rs. 3,000 - 7,000', 'Rs. 7,000 - 10,500', 'Rs. 10,000 - 15,000', 'Rs. 15,000 - 18,000', '-'],
];

export default function RatesCharges() {
  return (
    <section id="rates" className="relative py-20 overflow-hidden">
      <img
        src="/gallery/truck-bg.jpeg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-110 z-0 pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-white/40 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-display font-extrabold text-center mb-8 text-primary">
          Rates & Charges <span className="text-gradient">Trustway Packers and Movers</span>
        </motion.h2>
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200 bg-white/80 backdrop-blur">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="px-6 py-4 text-sm font-semibold text-primary whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <motion.tr key={r[0]} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={idx % 2 ? 'bg-white' : 'bg-slate-50/40'}>
                  {r.map((cell, i) => {
                    const cellClass = i === 0 ? 'text-primary font-semibold' : 'text-amber-700';
                    return (
                      <td key={i} className={cn('px-6 py-4 text-sm whitespace-nowrap', cellClass)}>
                        {cell}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3 text-center">Prices are indicative and vary by distance, goods volume, and additional services.</p>
      </div>
    </section>
  );
}
