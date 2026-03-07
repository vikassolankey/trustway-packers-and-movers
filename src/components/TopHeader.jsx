import { Mail, Phone } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-black text-white text-xs md:text-sm border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-amber-400 font-semibold">UDYAM:</span>
          <span className="text-white/90">UP-02-0162382</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="text-amber-400 font-semibold">GSTIN:</span>
          <span className="text-white/90">09EMMPB2450Q1ZL</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="mailto:v.ssolankig@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail size={14} className="text-amber-400" />
            <span className="text-white/90">trustwaypackersandmovers@gmail.com</span>
          </a>
          <a href="tel:+919258157772" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone size={14} className="text-amber-400" />
            <span className="text-white/90">+91 9258157772</span>
          </a>
        </div>
      </div>
    </div>
  );
}
