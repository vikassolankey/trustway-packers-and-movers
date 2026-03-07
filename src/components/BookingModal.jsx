import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    items: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      setStatus('error');
      setErrorMsg('Missing EmailJS config');
      return;
    }
    try {
      const msg = [
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email || 'N/A'}`,
        `Moving From: ${formData.movingFrom}`,
        `Moving To: ${formData.movingTo}`,
        `Moving Date: ${formData.movingDate}`,
        `Items: ${formData.items || 'N/A'}`,
      ].join('\n');
      const params = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'N/A',
        moving_from: formData.movingFrom,
        moving_to: formData.movingTo,
        moving_date: formData.movingDate,
        items: formData.items || 'N/A',
        submitted_at: new Date().toISOString(),
        message: msg,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', movingFrom: '', movingTo: '', movingDate: '', items: '' });
      }, 2000);
    } catch (e) {
      setStatus('error');
      // eslint-disable-next-line no-console
      console.error('EmailJS send error', e);
      setErrorMsg(e?.text || e?.message || 'Email send failed');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-primary">Book Your Move</h2>
                  <p className="text-slate-500">Fill in the details to get started.</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">Booking Successful!</h3>
                  <p className="text-slate-500">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Moving From</label>
                      <input required type="text" placeholder="City, Area" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={formData.movingFrom} onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Moving To</label>
                      <input required type="text" placeholder="City, Area" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={formData.movingTo} onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Moving Date</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={formData.movingDate} onChange={(e) => setFormData({ ...formData, movingDate: e.target.value })} />
                  </div>
                  <button disabled={status === 'loading'} type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-50">
                    {status === 'loading' ? 'Processing...' : 'Confirm Booking'}
                  </button>
                  {status === 'error' && <p className="text-center text-rose-500 text-sm font-medium">{errorMsg || 'Something went wrong. Please try again.'}</p>}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
