import { motion } from 'motion/react';

export default function VideoPage() {
  const pins = ['https://www.youtube.com/shorts/nRJH0nWMeZw',
    'https://www.youtube.com/shorts/cjnFvJAJ6o0',
    'https://www.youtube.com/shorts/AHFM5kIL2Rw',
    'https://www.youtube.com/shorts/gRzLKCksZ_s',
    'https://www.youtube.com/shorts/JOuCQyffsXc',
    'https://www.youtube.com/shorts/zwnLclrW16s'

  ];

  const toYouTubeEmbed = (href) => {
    try {
      const u = new URL(href);
      if (/youtu\.be$/i.test(u.hostname)) {
        const id = u.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1`;
      }
      if (/youtube\.com$/i.test(u.hostname)) {
        if (u.pathname.startsWith('/shorts/')) {
          const id = u.pathname.split('/shorts/')[1].split('/')[0];
          return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1`;
        }
        if (u.pathname === '/watch' && u.searchParams.get('v')) {
          const id = u.searchParams.get('v');
          return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1`;
        }
      }
    } catch {
      /* ignore */
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
        <img
          src="/gallery/viedo-bg.jpeg"
          alt="Videos background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
              <span
                className="typing-heading typing-center"
                style={{ ['--typing-steps']: 22, ['--typing-ch']: '22ch' }}
              >
                Watch Our Work in Action
              </span>
            </h1>
            <p className="mt-5 text-slate-200/90 md:text-lg">
              Real relocations, trusted by families and businesses across India.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {['Skilled Team', 'On-Time Delivery', 'Nationwide Service'].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-white/90 p-5 shadow-md border border-white/30"
                >
                  <div className="font-bold text-slate-900">{t}</div>
                  <div className="text-xs text-slate-600 mt-1">Verified quality you can rely on</div>
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
            Featured Videos
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pins.map((href, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.06 }}
                className="relative rounded-2xl border border-slate-200 shadow-sm p-2 bg-white overflow-hidden"
              >
                {(() => {
                  const embed = toYouTubeEmbed(href);
                  if (embed) {
                    return (
                      <div className="aspect-[9/16] rounded-xl overflow-hidden">
                        <iframe
                          title={`Video ${i + 1}`}
                          src={embed}
                          className="w-full h-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    );
                  }
                  return (
                    <a href={href} className="block" target="_blank" rel="noopener noreferrer">
                      <div className="aspect-[9/16] bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                        Open Video
                      </div>
                    </a>
                  );
                })()}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
