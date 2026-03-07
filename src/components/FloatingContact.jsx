import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const phone = '919627209705';
  const waText = encodeURIComponent('Hello Trustway Packers and Movers');
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                href={`tel:+${phone}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="w-14 h-14 rounded-full bg-emerald-600 shadow-xl shadow-emerald-600/30 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                aria-label="Call"
              >
                <Phone size={22} />
              </motion.a>
              <motion.a
                href={`https://wa.me/${phone}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="w-14 h-14 rounded-full bg-green-600 shadow-xl shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </motion.a>
            </>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className={`w-16 h-16 rounded-full ${open ? 'bg-rose-600 hover:bg-rose-700' : 'bg-primary hover:bg-primary-dark'} shadow-2xl text-white flex items-center justify-center transition-colors`}
          aria-label="Contact menu"
        >
          {open ? <X size={24} /> : <Phone size={24} />}
        </button>
      </div>
    </div>
  );
}
