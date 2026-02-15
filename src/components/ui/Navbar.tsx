'use client';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = ['Beranda', 'Tentang', 'Proses', 'Katalog', 'Testimoni'];

  return (
    <nav className="absolute w-full z-50 top-0 left-0 py-4 md:py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="font-abril text-2xl md:text-3xl tracking-tighter text-[#3E2723] md:text-[#D4AF37] cursor-pointer relative z-50 drop-shadow-sm" onClick={() => scrollTo('home')}>
          PAPA GEMBUL.
        </div>

        {/* DESKTOP MENU */}
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
             className="bg-[#3E2723] text-[#FDF8E8] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all shadow-lg hover:shadow-[#D4AF37]/50 flex items-center gap-2"
          >
             <ShoppingBag size={16} /> Order Now
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-[#3E2723] relative z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE MENU FULLSCREEN */}
        <div className={`fixed inset-0 bg-[#FDF8E8] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navLinks.map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item === 'Beranda' ? 'home' : item.toLowerCase().replace(' ', '-'))}
                className="font-abril text-3xl text-[#3E2723] hover:text-[#D4AF37]"
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
}