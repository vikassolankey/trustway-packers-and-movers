import { motion } from 'motion/react';
import { imageSrc } from '../lib/ui.js';

export default function TrustedCompanies() {
  const logos = [
    { name: 'Whirlpool', url: 'https://whirlpool.com', logo: 'https://th.bing.com/th/id/OIP.JnLzXqBCz1Pc-rB76vm55gHaCS?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'SBI', url: 'https://sbi.co.in', logo: 'https://th.bing.com/th/id/OIP.qsrGATcdBK99FiVBKrmnlgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Indian Oil', url: 'https://iocl.com', logo: 'https://th.bing.com/th/id/OIP.Wz4nETWQgxdzXTgueKYWlgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Punjab National Bank', url: 'https://pnbindia.in', logo: 'https://tse4.mm.bing.net/th/id/OIP.GIF74LU4bpdBgDO9HfU6tgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Wipro', url: 'https://wipro.com', logo: 'https://th.bing.com/th/id/OIP.YjODjDA0O2rDqD_LQUzKDgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Reliance Industries', url: 'https://ril.com', logo: 'https://1000logos.net/wp-content/uploads/2021/08/Reliance-Industries-Limited-RIL-Logo-1966.png' },
    { name: 'Mahindra', url: 'https://mahindra.com', logo: 'https://tse4.mm.bing.net/th/id/OIP._mKN-XWUleASlO4pPHqXeQHaD3?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'TCS', url: 'https://tcs.com', logo: 'https://tse1.mm.bing.net/th/id/OIP.PWb0ottxUtR1QhSE8nS67gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'HDFC Bank', url: 'https://hdfcbank.com', logo: 'https://logodix.com/logo/840369.jpg' },
    { name: 'ONGC', url: 'https://ongcindia.com', logo: 'https://th.bing.com/th/id/OIP.SExkoSOwHgHDscFkb0b2hQAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Maruti Suzuki', url: 'https://marutisuzuki.com', logo: 'https://crystalpng.com/wp-content/uploads/2025/08/Maruti-Suzuki-Logo-png-1024x1024.png' },
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
