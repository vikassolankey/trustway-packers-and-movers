import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';

export default function Testimonials() {
  const reviews = [
    { name: 'Rahul Sharma', role: 'Home Owner', text: 'Trustway made my move from Delhi to Bangalore absolutely seamless. The team handled fragile items with care.', rating: 5 },
    { name: 'Priya Patel', role: 'IT Professional', text: 'Transparent pricing and real-time updates. The entire experience was stress-free.', rating: 5 },
    { name: 'Amit Verma', role: 'Business Owner', text: 'Relocated my office over a weekend with minimal downtime. Highly recommended!', rating: 4 },
    { name: 'Simran Kaur', role: 'Designer', text: 'Packing quality was excellent. Everything arrived without a scratch.', rating: 5 },
    { name: 'Ankit Mehta', role: 'Entrepreneur', text: 'On-time pickup and delivery. Courteous staff and neat work.', rating: 5 },
    { name: 'Neha Gupta', role: 'Professor', text: 'Professional team and smooth coordination throughout the journey.', rating: 5 },
    { name: 'Vikram Singh', role: 'Photographer', text: 'Handled delicate equipment with great care. Would book again.', rating: 4 },
    { name: 'Riya Jain', role: 'HR Manager', text: 'Great communication and clear timelines. No surprises.', rating: 5 },
    { name: 'Mohit Rao', role: 'Consultant', text: 'Affordable and reliable service for my intercity move.', rating: 4 },
    { name: 'Ayesha Khan', role: 'Doctor', text: 'Staff was polite and efficient. The move finished ahead of schedule.', rating: 5 },
    { name: 'Saurabh Yadav', role: 'Engineer', text: 'Vehicle transport was quick and hassle-free.', rating: 4 },
    { name: 'Kritika Bose', role: 'Marketer', text: 'Excellent experience from start to finish. Value for money.', rating: 5 },
  ];

  const columns = [0, 1, 2].map((c) => reviews.filter((_, i) => i % 3 === c));

  return (
    <section id="testimonials" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg">Real stories from families and businesses we've helped move.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, ci) => (
            <div key={ci} className="overflow-hidden h-[460px]">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 30 + ci * 4, ease: 'linear', repeat: Infinity }}
                className="flex flex-col gap-6"
              >
                {[...col, ...col].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-[1.5rem] shadow-xl shadow-slate-200/40 border border-slate-100">
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={imageSrc(`https://picsum.photos/seed/review${ci}-${i}/100/100`)} className="w-10 h-10 rounded-full" alt={review.name} referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-bold">{review.name}</h4>
                        <p className="text-sm text-slate-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

