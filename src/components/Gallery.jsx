import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';

export default function Gallery() {
  const fallback = [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
  ];
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/gallery');
        const list = (await r.json()) ?? [];
        setImages([...list, ...fallback]);
      } catch {
        setImages([...fallback]);
      }
    })();
  }, []);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Work in Action</h2>
          <p className="text-slate-600 text-lg">Glimpses of our professional packing and moving operations across India.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg">
              <img
                src={imageSrc(src)}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = imageSrc(fallback[i % fallback.length]);
                }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                  <ChevronRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

