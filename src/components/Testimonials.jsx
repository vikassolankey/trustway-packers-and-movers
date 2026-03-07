import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';

export default function Testimonials() {
  const reviews = [
    { name: 'Rahul Sharma', role: 'Home Owner', text: 'InstantPacker made my move from Delhi to Bangalore absolutely seamless. The team was professional and handled my fragile items with extreme care.', rating: 5 },
    { name: 'Priya Patel', role: 'IT Professional', text: 'Best experience with packers and movers so far. Transparent pricing and the tracking feature kept me at peace throughout the journey.', rating: 5 },
    { name: 'Amit Verma', role: 'Business Owner', text: 'Relocated my entire office over the weekend. Minimal downtime and everything was set up perfectly at the new location. Highly recommended!', rating: 4 },
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg">Real stories from families and businesses we've helped move.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100">
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={imageSrc(`https://picsum.photos/seed/review${i}/100/100`)} className="w-12 h-12 rounded-full" alt={review.name} referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

