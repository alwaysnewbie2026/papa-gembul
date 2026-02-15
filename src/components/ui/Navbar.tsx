'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek navbar berubah warna saat discroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false); // Tutup menu HP saat diklik
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = ['Beranda', 'Tentang', 'Proses', 'Katalog', 'Testimoni'];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'py-3 bg-[#FDF8E8]/95 shadow-md backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="font-abril text-2xl md:text-3xl tracking-tighter text-[#D4AF37] cursor-pointer relative z-50" onClick={() => scrollTo('home')}>
          PAPA GEMBUL.
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 font-bold text-[#5D4037] text-sm tracking-wide items-center">
          {navLinks.map((item) => (
             <button 
               key={item} 
               onClick={() => scrollTo(item === 'Beranda' ? 'home' : item.toLowerCase().replace(' ', '-'))}
               className="hover:text-[#D4AF37] transition-colors uppercase relative group"
             >
               {item}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
             </button>
          ))}
          <button 
             onClick={() => window.open('https://wa.me/6285111205354', '_blank')}
             className="bg-[#3E2723] text-[#FDF8E8] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all shadow-lg hover:shadow-[#D4AF37]/50"
          >
             Order Now
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Visible on Mobile) */}
        <button 
          className="md:hidden text-[#3E2723] relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE FULLSCREEN MENU */}
        <div className={`fixed inset-0 bg-[#FDF8E8] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navLinks.map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item === 'Beranda' ? 'home' : item.toLowerCase().replace(' ', '-'))}
                className="font-abril text-4xl text-[#3E2723] hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/6285111205354', '_blank')}
              className="mt-8 bg-[#3E2723] text-[#FDF8E8] px-10 py-4 rounded-full font-bold text-xl shadow-xl"
            >
              Order Via WhatsApp
            </button>
        </div>
      </div>
    </nav>
  );
}