import { motion } from 'motion/react';
import { Phone, Mail, User2, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const bg = '/gallery/contact-bg.jpeg';
  const phone = '+91 9258157772';
  const email = 'trustwaypackersandmovers@gmail.com';
  const owner = 'Mr Tomar';
  const address =
    'Shop No. A103 Ground Floor, Dilshad Colony, Aligarh Bypass Rd, nearby Indian Oil Petrol, opposite Waqar Hospital, Dhorra, Jamalpur Ka Nagla, Aligarh, Uttar Pradesh 202001';
  const mapsQuery = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbed = `https://www.google.com/maps?&q=${mapsQuery}&output=embed`;

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
        <img src={bg} alt="Contact background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-center mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight"
            >
              <span className="typing-heading typing-center" style={{ ['--typing-steps']: 13, ['--typing-ch']: '13ch' }}>
                Contact Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6 text-slate-200/90 md:text-lg"
            >
              We’re here to help with quick estimates and reliable support.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.a
              href={`tel:${phone.replace(/\s/g, '')}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Phone</div>
                <div className="text-slate-600">{phone}</div>
              </div>
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Email</div>
                <div className="text-slate-600">{email}</div>
              </div>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <User2 size={22} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Owner</div>
                <div className="text-slate-600">{owner}</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white"
            >
              <div className="p-6 flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Address</div>
                  <p className="text-slate-600 mt-1">{address}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-3"
                  >
                    Open in Google Maps <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open location in Google Maps">
                  <iframe
                    title="Trustway Location"
                    src={mapsEmbed}
                    className="w-full h-[340px] md:h-[420px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 shadow-lg p-6 bg-white"
            >
              <h3 className="text-xl font-bold mb-3">Quick Support</h3>
              <p className="text-slate-600">
                Call us or email for a free moving estimate and instant assistance. Our team responds quickly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-primary-dark transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${email}`}
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

