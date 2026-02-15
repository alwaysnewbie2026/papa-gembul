'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DateFruitIcon from '../ui/DateFruitIcon';
import Image from 'next/image';

export default function Hero() {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimasi: GSAP hanya jalan di layar besar (>768px)
    if (window.innerWidth < 768) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-char', { y: 100, opacity: 0, rotate: 10 }, { y: 0, opacity: 1, rotate: 0, stagger: 0.1, duration: 1.2, ease: "power4.out" })
        .fromTo('.hero-fade', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.8");
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <header id="home" ref={comp} className="relative pt-32 pb-12 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh] md:min-h-screen">
       
       {/* Background: Gradient Biasa di HP (Ringan), Glowing di Laptop (Mewah) */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
           <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37] rounded-full blur-[150px]"></div>
           <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E65100] rounded-full blur-[150px]"></div>
           <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#FFF8E1] to-transparent"></div>
       </div>

       <div className="max-w-5xl mx-auto z-10 w-full">
         <div className="hero-fade mb-6 inline-block px-4 py-1.5 border border-[#D4AF37] rounded-full bg-[#FFFBF0]/50 backdrop-blur-sm shadow-sm">
           <span className="text-[#D4AF37] font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase">Premium Dates Selection</span>
         </div>
         
         <h1 className="font-abril text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] text-[#3E2723] mb-6 md:mb-10 tracking-tight">
           <span className="block overflow-hidden"><span className="hero-text-char inline-block">PAPA</span></span>
           <span className="block overflow-hidden"><span className="hero-text-char inline-block text-[#D4AF37] drop-shadow-md">GEMBUL</span></span>
         </h1>

         <p className="hero-fade text-base md:text-2xl max-w-xl mx-auto mb-8 md:mb-12 font-medium text-[#5D4037] leading-relaxed px-4">
           Lebih manis dari janji dia, lebih legit dari omongan tetangga. <br className="hidden md:block"/>was khilaf, beli sekilo nanti nyesel... nyesel kenapa gak beli dua kilo!.
         </p>

         <div className="hero-fade flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
            <button onClick={() => document.getElementById('katalog')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#3E2723] rounded-xl font-bold text-lg shadow-[4px_4px_0px_0px_#3E2723] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#3E2723] transition-all">
              Lihat Katalog
            </button>
            <button onClick={() => document.getElementById('tentang')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#3E2723] text-[#3E2723] rounded-xl font-bold text-lg hover:bg-[#3E2723] hover:text-[#FDF8E8] transition-all">
               Cerita Kami
            </button>
         </div>
       </div>
       
       {/* Mascot Area */}
       <div className="hero-fade mt-12 md:mt-20 relative select-none pointer-events-none">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#FDF8E8] border-4 md:border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden relative z-10">
               {/* Gunakan Image dengan priority agar cepat muncul */}
               <Image 
                 src="/images/mascot.png" 
                 alt="" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 768px) 300px, 500px"
                 priority 
               />
          </div>
       </div>
    </header>
  );
}