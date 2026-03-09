import { motion } from 'motion/react';

export default function GalleryPage() {
  const features = [
    { title: 'Real Moves', desc: 'Genuine snapshots from our relocation journeys.', icon: '📸', color: 'bg-rose-50' },
    { title: 'Happy Clients', desc: 'Every smile tells a success story of trust.', icon: '😊', color: 'bg-emerald-50' },
    { title: 'Nationwide Reach', desc: 'Serving families & businesses across India.', icon: '🚚', color: 'bg-indigo-50' },
  ];
  const images = [
    '/gallery/gallery8.jpeg',
    '/gallery/gallery6.jpeg',
    '/gallery/gallery5.jpeg',
    '/gallery/gallery4.jpeg',
    '/gallery/gallery3.jpeg',
    '/gallery/gallery2.jpeg',
    '/gallery/gallery1.jpeg',
  ];
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <img
          src="/gallery/gallery-bg.jpeg"
          alt="Gallery background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight text-center">
              <span
                className="typing-heading typing-center"
                style={{ ['--typing-steps']: 26, ['--typing-ch']: '26ch' }}
              >
                Explore Our Moving Moments
              </span>
            </h1>
            <p className="mt-6 text-slate-200/90 md:text-lg">
              Discover the real stories of trust, care, and commitment through the lens of our work. Every picture captures a
              journey with Trustway Packers & Movers.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {features.map(({ title, desc, icon, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-2xl ${color} p-5 shadow-md backdrop-blur border border-white/20 text-slate-900`}
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="font-bold mt-2">{title}</div>
                  <div className="text-xs text-slate-600 mt-1">{desc}</div>
                </motion.div>
              ))}
            </div>
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
            Our Work Photos
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.06 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group"
              >
                <img
                  src={src}
                  alt={`Work ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
