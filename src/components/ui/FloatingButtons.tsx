'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWA = (productName: string = '') => {
    const phone = "6285111205354"; 
    const text = `Halo Papa Gembul! Saya tertarik dengan ${productName || 'Produk Anda'}. Boleh info lebih lanjut?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-6 z-40 bg-[#3E2723] text-[#D4AF37] p-3 rounded-full shadow-xl transition-all duration-300 border-2 border-[#D4AF37] ${showScrollUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={24} />
      </button>

      <button 
        onClick={() => handleWA()}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 border-4 border-white"
      >
        <MessageCircle size={28} fill="white" />
        <span className="font-bold hidden md:block">Chat Admin</span>
      </button>
    </>
  );
}