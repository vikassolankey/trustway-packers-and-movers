import { motion } from 'motion/react';
import { imageSrc } from '../lib/ui.js';

export default function TrustedCompanies() {
  const logos = [
    { name: 'Whirlpool', url: 'https://whirlpool.com', domain: 'whirlpool.com' },
    { name: 'SBI', url: 'https://onlinesbi.sbi', domain: 'onlinesbi.sbi' },
    { name: 'Federal Bank', url: 'https://federalbank.co.in', domain: 'federalbank.co.in' },
    { name: 'Indian Oil', url: 'https://indianoil.in', domain: 'indianoil.in' },
    { name: 'Punjab National Bank', url: 'https://pnbindia.in', domain: 'pnbindia.in' },
    { name: 'Wipro', url: 'https://wipro.com', domain: 'wipro.com' },
    { name: 'Reliance Industries', url: 'https://ril.com', domain: 'relianceindustries.com' },
    { name: 'Mahindra', url: 'https://mahindra.com', domain: 'mahindra.com' },
    { name: 'TCS', url: 'https://tcs.com', domain: 'tcs.com' },
    { name: 'HDFC Bank', url: 'https://hdfcbank.com', domain: 'hdfcbank.com' },
    { name: 'ONGC', url: 'https://ongcindia.com', domain: 'ongcindia.com' },
    { name: 'Maruti Suzuki', url: 'https://marutisuzuki.com', domain: 'marutisuzuki.com' },
  ];
  const logos2 = [
    { name: 'Bharat Petroleum', url: 'https://bpcl.in', domain: 'bpcl.in' },
    { name: 'Nestlé', url: 'https://nestle.com', domain: 'nestle.com' },
    { name: 'Asian Paints', url: 'https://asianpaints.com', domain: 'asianpaints.com' },
    { name: 'Bosch', url: 'https://bosch.com', domain: 'bosch.com' },
    { name: 'ITC', url: 'https://itcportal.com', domain: 'itcportal.com' },
    { name: 'L&T', url: 'https://larsentoubro.com', domain: 'larsentoubro.com' },
    { name: 'Microsoft', url: 'https://microsoft.com', domain: 'microsoft.com' },
    { name: 'Google', url: 'https://google.com', domain: 'google.com' },
    { name: 'Amazon', url: 'https://amazon.in', domain: 'amazon.in' },
    { name: 'Flipkart', url: 'https://flipkart.com', domain: 'flipkart.com' },
  ];

  const row = [...logos, ...logos];
  const row2 = [...logos2, ...logos2];
  const clearbit = (d) => `https://logo.clearbit.com/${d}`;
  const gFavicon = (d) => `https://www.google.com/s2/favicons?domain=${d}&sz=128`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold">Trusted by Leading Companies</h3>
        <p className="text-slate-600 mt-2">
          Proudly associated with <span className="text-amber-500 font-semibold">10+ companies</span> who trust us for
          relocation and transport needs.
        </p>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-8 md:gap-12 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {row.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="shrink-0 w-32 h-16 md:w-40 md:h-20 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <img
                src={imageSrc(clearbit(item.domain))}
                alt={item.name}
                className="max-h-12 md:max-h-14 object-contain opacity-100 transition-all"
                onError={(e) => {
                  const tried = e.currentTarget.getAttribute('data-fallback');
                  if (!tried) {
                    e.currentTarget.src = gFavicon(item.domain);
                    e.currentTarget.setAttribute('data-fallback', 'fav');
                  } else {
                    e.currentTarget.src = '/gallery/logo.png';
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </a>
          ))}
        </motion.div>
        <motion.div
          className="mt-6 flex items-center gap-8 md:gap-12 px-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
        >
          {row2.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="shrink-0 w-32 h-16 md:w-40 md:h-20 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <img
                src={imageSrc(clearbit(item.domain))}
                alt={item.name}
                className="max-h-12 md:max-h-14 object-contain opacity-100 transition-all"
                onError={(e) => {
                  const tried = e.currentTarget.getAttribute('data-fallback');
                  if (!tried) {
                    e.currentTarget.src = gFavicon(item.domain);
                    e.currentTarget.setAttribute('data-fallback', 'fav');
                  } else {
                    e.currentTarget.src = '/gallery/logo.png';
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
