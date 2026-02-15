'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DateFruitIcon from '../ui/DateFruitIcon';
import Image from 'next/image'; // PERFORMANCE BOOST

export default function Hero() {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-char', 
        { y: 100, opacity: 0, rotate: 10 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.1, duration: 1.2, ease: "power4.out" }
      )
      .fromTo('.hero-fade',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
        "-=0.8"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <header id="home" ref={comp} className="relative pt-32 pb-12 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh] md:min-h-screen">
       
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37] rounded-full blur-[100px] md:blur-[150px]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E65100] rounded-full blur-[100px] md:blur-[150px]"></div>
       </div>

       <div className="max-w-5xl mx-auto z-10 w-full">
         <div className="hero-fade mb-6 inline-block px-4 py-1.5 border border-[#D4AF37] rounded-full bg-[#FFFBF0]/50 backdrop-blur-sm shadow-sm">
           <span className="text-[#D4AF37] font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase">Premium Dates Selection</span>
         </div>
         
         {/* Responsive Typography: text-6xl di HP, text-9xl di Desktop */}
         <h1 className="font-abril text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] text-[#3E2723] mb-6 md:mb-10 tracking-tight">
           <span className="block overflow-hidden"><span className="hero-text-char inline-block">PAPA</span></span>
           <span className="block overflow-hidden"><span className="hero-text-char inline-block text-[#D4AF37] drop-shadow-md">GEMBUL</span></span>
         </h1>

         <p className="hero-fade text-base md:text-2xl max-w-xl mx-auto mb-8 md:mb-12 font-medium text-[#5D4037] leading-relaxed px-4">
           Rasakan kenikmatan kurma premium dari tanah suci. <br className="hidden md:block"/>Dikemas spesial untuk keluarga Indonesia.
         </p>

         <div className="hero-fade flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
            <button 
              onClick={() => document.getElementById('katalog')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#3E2723] rounded-xl font-bold text-lg shadow-[4px_4px_0px_0px_#3E2723] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#3E2723] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              Lihat Katalog
            </button>
            <button 
               onClick={() => document.getElementById('tentang')?.scrollIntoView({behavior: 'smooth'})}
               className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#3E2723] text-[#3E2723] rounded-xl font-bold text-lg hover:bg-[#3E2723] hover:text-[#FDF8E8] transition-all"
            >
               Cerita Kami
            </button>
         </div>
       </div>
       
       {/* Mascot Area - Responsive Sizing */}
       <div className="hero-fade mt-12 md:mt-20 relative select-none pointer-events-none">
<div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#FDF8E8] border-4 md:border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden relative z-10">
   {/* Container Lingkaran */}
<div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#FDF8E8] border-4 md:border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden relative z-10">
    
    {/* Next.js Image Component 
       - 'fill': Membuat gambar mengisi penuh container induknya (pengganti absolute inset-0).
       - 'object-cover': Memastikan gambar tidak gepeng/terdistorsi, tapi tercrop rapi mengikuti lingkaran.
       - Tidak ada 'opacity', jadi gambar tampil 100% jelas di depan gradasi.
    */}
    <Image 
      src="/images/mascot.png" 
      alt="Mascot Papa Gembul" 
      fill
      className="object-cover"
      sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px" // Optional: membantu browser memilih ukuran gambar yang pas
    />
    
</div>

</div>
          
          {/* Animated Decorations */}
          <div className="absolute -left-4 md:-left-16 bottom-0 md:bottom-10 text-[#5D4037] opacity-80 rotate-[-15deg] z-0 animate-bounce" style={{animationDuration: '3s'}}>
              <DateFruitIcon className="w-16 h-16 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          <div className="absolute -right-4 md:-right-16 top-0 md:top-10 text-[#5D4037] opacity-80 rotate-[15deg] z-0 animate-bounce" style={{animationDuration: '4s'}}>
              <DateFruitIcon className="w-16 h-16 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
       </div>
    </header>
  );
}