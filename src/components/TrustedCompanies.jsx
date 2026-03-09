import { motion } from 'motion/react';
import { imageSrc } from '../lib/ui.js';

export default function TrustedCompanies() {
  const logos = [
    { name: 'Whirlpool', url: 'https://whirlpool.com', logo: 'https://cdn.simpleicons.org/whirlpool/334155' },
    { name: 'SBI', url: 'https://sbi.co.in', logo: 'https://cdn.simpleicons.org/statebankofindia/334155' },
    { name: 'Federal Bank', url: 'https://federalbank.co.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Federal_Bank_logo.svg/512px-Federal_Bank_logo.svg.png' },
    { name: 'Indian Oil', url: 'https://iocl.com', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Indian_Oil_Logo.svg/512px-Indian_Oil_Logo.svg.png' },
    { name: 'Punjab National Bank', url: 'https://pnbindia.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/PNB_logo.svg/512px-PNB_logo.svg.png' },
    { name: 'Wipro', url: 'https://wipro.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wipro_Logo.svg/512px-Wipro_Logo.svg.png' },
    { name: 'Reliance Industries', url: 'https://ril.com', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png' },
    { name: 'Mahindra', url: 'https://mahindra.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mahindra_and_Mahindra_Logo.svg/512px-Mahindra_and_Mahindra_Logo.svg.png' },
    { name: 'TCS', url: 'https://tcs.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png' },
    { name: 'HDFC Bank', url: 'https://hdfcbank.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png' },
    { name: 'ONGC', url: 'https://ongcindia.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/ONGC_Logo.svg/512px-ONGC_Logo.svg.png' },
    { name: 'Maruti Suzuki', url: 'https://marutisuzuki.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Maruti_Suzuki_logo_2011.svg/512px-Maruti_Suzuki_logo_2011.svg.png' },
  ];
  const logos2 = [
    { name: 'Bharat Petroleum', url: 'https://bharatpetroleum.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/BPCL_logo.svg/512px-BPCL_logo.svg.png' },
    { name: 'Nestlé', url: 'https://nestle.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nestl%C3%A9_textlogo_blue.svg/512px-Nestl%C3%A9_textlogo_blue.svg.png' },
    { name: 'Asian Paints', url: 'https://asianpaints.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Asian_Paints_Logo.svg/512px-Asian_Paints_Logo.svg.png' },
    { name: 'Bosch', url: 'https://bosch.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bosch-brand.svg/512px-Bosch-brand.svg.png' },
    { name: 'ITC', url: 'https://itcportal.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ITC_Limited_Logo.svg/512px-ITC_Limited_Logo.svg.png' },
    { name: 'L&T', url: 'https://larsentoubro.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/L%26T.svg/512px-L%26T.svg.png' },
    { name: 'Microsoft', url: 'https://microsoft.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png' },
    { name: 'Google', url: 'https://google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png' },
    { name: 'Amazon', url: 'https://amazon.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png' },
    { name: 'Flipkart', url: 'https://flipkart.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flipkart_logo.svg/512px-Flipkart_logo.svg.png' },
  ];

  const combined = [...logos, ...logos2];
  const row = [...combined, ...combined];

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
          className="flex items-stretch gap-6 md:gap-8 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {row.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="shrink-0 w-36 md:w-44 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center py-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <div className="h-12 md:h-14 flex items-center">
                <img
                  src={imageSrc(item.logo)}
                  alt={item.name}
                  className="max-h-12 md:max-h-14 object-contain opacity-100 transition-all"
                  // onError={(e) => {
                  //   e.currentTarget.onerror = null;
                  //   e.currentTarget.src = '/gallery/logo.png';
                  // }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 text-xs md:text-sm font-medium text-slate-600 text-center px-2">
                {item.name}
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
