import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Package } from 'lucide-react';

export default function QuoteForm() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [moveType, setMoveType] = useState('Home Shifting');
  const [estimate, setEstimate] = useState(null);

  const calcEstimate = () => {
    const s = `${pickup}-${drop}`.toLowerCase();
    let hash = 0;
    for (let i = 0; i < s.length; i++) hash = (hash + s.charCodeAt(i)) % 100000;
    const km = 20 + (hash % 1480);
    const base =
      moveType === 'Home Shifting'
        ? 7000
        : moveType === 'Office Relocation'
        ? 12000
        : moveType === 'Vehicle Transport'
        ? 5000
        : 3000;
    const rate =
      moveType === 'Home Shifting'
        ? 10
        : moveType === 'Office Relocation'
        ? 14
        : moveType === 'Vehicle Transport'
        ? 8
        : 6;
    const calc = base + rate * km;
    const low = Math.round(calc * 0.9);
    const high = Math.round(calc * 1.1);
    return { km, low, high };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(pickup && drop && date && moveType)) return;
    setEstimate(calcEstimate());
  };

  return (
    <section className="py-20 relative z-10 -mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-2">Get an Instant Estimate</h2>
            <p className="text-slate-500">Tell us about your move and get a price in seconds</p>
          </div>

          <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Pickup Location
              </label>
              <input value={pickup} onChange={(e)=>setPickup(e.target.value)} type="text" placeholder="City or Pincode" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Drop Location
              </label>
              <input value={drop} onChange={(e)=>setDrop(e.target.value)} type="text" placeholder="City or Pincode" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar size={16} className="text-primary" /> Move Date
              </label>
              <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Package size={16} className="text-primary" /> Type of Move
              </label>
              <select value={moveType} onChange={(e)=>setMoveType(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                <option value="Home Shifting">Home Shifting</option>
                <option value="Office Relocation">Office Relocation</option>
                <option value="Vehicle Transport">Vehicle Transport</option>
                <option value="Storage">Storage</option>
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-4 mt-4">
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 active:scale-[0.98]">Calculate Estimate</button>
            </div>
          </form>
          {estimate && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center">
              <div className="inline-flex flex-col items-center gap-1 bg-white/70 backdrop-blur rounded-2xl px-6 py-4 border border-slate-200">
                <div className="text-xs text-slate-500">Estimated Distance ~ {estimate.km} km</div>
                <div className="text-lg font-bold text-slate-800">
                  ₹{estimate.low.toLocaleString('en-IN')} - ₹{estimate.high.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-slate-500">Indicative range. Final price varies with inventory and services.</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
