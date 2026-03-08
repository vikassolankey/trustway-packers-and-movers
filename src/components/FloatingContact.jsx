import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const phone = '919627209705';
  const waText = encodeURIComponent('Hello Trustway Packers and Movers');
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative flex items-center gap-3">
        <a
          href={`tel:+${phone}`}
          className="w-14 h-14 rounded-full bg-emerald-600 shadow-xl shadow-emerald-600/30 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
          aria-label="Call"
        >
          <Phone size={22} />
        </a>
        <a
          href={`https://wa.me/${phone}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-600 shadow-xl shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
  );
}
