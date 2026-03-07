import { motion } from 'motion/react';
import { BadgeCheck, Download, Eye } from 'lucide-react';
import { imageSrc } from '../lib/ui.js';

export default function Certificates() {
  const docs = [
    { title: 'GST Certificate', badge: 'Government',  desc: 'Official Goods and Services Tax registration certificate ensuring compliance and trust.' },
    { title: 'Udyam Certificate', badge: 'Government', desc: 'Official Udyam Registration certificate recognizing MSME business identity.' },
    { title: 'Affidavit Certificate', badge: 'Government',  desc: 'Verified legal affidavit document confirming business authenticity.' },
  ];

  const bg = '/gallery/certi-bg.png';
  const fallback = '/gallery/certi-bg.png';

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center">
        <img
          src={imageSrc(bg)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = imageSrc(fallback))}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-display font-extrabold text-white leading-tight">
            Our <span className="text-amber-400">Official</span> <br /> <span className="text-emerald-400">Documents</span>
          </motion.h1>
          <p className="mt-6 text-slate-200 max-w-2xl">
            Transparency and trust are at the core of everything we do. Explore our certificates and legal registrations that prove our authenticity and compliance.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#verified" className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 text-black font-semibold shadow-lg">View Certificates</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-slate-200 bg-white font-semibold shadow-lg">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="verified" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold">
              <span className="text-slate-900">VERIFIED </span><span className="text-amber-500">CERTIFICATES</span>
            </h2>
            <p className="text-slate-600 mt-3">We value transparency and credibility. Explore our official documents that validate our services and authenticity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {docs.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{d.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">{d.badge}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">{d.desc}</p>
               
                <div className="flex gap-3">
                  <a href={imageSrc(d.img)} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black font-semibold shadow hover:brightness-95">
                    <Eye size={16} /> View
                  </a>
                  <a href={imageSrc(d.img)} download className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-emerald-500 text-emerald-700 font-semibold hover:bg-emerald-50">
                    <Download size={16} /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'Government Approved', desc: 'All certificates are verified and approved by government authorities.' },
              { title: '100% Authentic', desc: 'Genuine legal documents that ensure transparency and trust.' },
              { title: 'Trusted Brand', desc: 'Serving thousands of happy customers with credibility for years.' },
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <BadgeCheck className="mx-auto text-emerald-600 mb-3" />
                <h4 className="font-bold">{f.title}</h4>
                <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
