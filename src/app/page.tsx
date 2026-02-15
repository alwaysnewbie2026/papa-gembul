import React from 'react';
import Navbar from '@/components/ui/Navbar';
import FloatingButtons from '@/components/ui/FloatingButtons';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Catalog from '@/components/sections/Catalog';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/ui/Footer';
import DateFruitIcon from '@/components/ui/DateFruitIcon';

export default function Home() {
  return (
    <main className="overflow-x-hidden selection:bg-[#D4AF37] selection:text-white">
      {/* Navigasi Atas */}
      <Navbar />

      {/* Bagian Hero (Judul Besar) */}
      <Hero />

      {/* --- Marquee / Running Text Section --- */}
      {/* Kita taruh di sini sebagai pemisah antara Hero dan About */}
      <div className="bg-[#3E2723] py-4 overflow-hidden border-y-4 border-[#D4AF37] rotate-[-1deg] origin-left scale-105 z-20 relative shadow-xl">
        {/* Container animasi */}
        <div className="flex w-max animate-marquee">
          {/* Kita duplikat kontennya supaya looping-nya halus (seamless) */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8 px-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 text-[#FDF8E8] font-abril text-2xl md:text-4xl uppercase tracking-wider">
                   <span>Premium Dates</span>
                   <span className="text-[#D4AF37]"><DateFruitIcon className="w-8 h-8" /></span>
                   <span>Papa Gembul</span>
                   <span className="text-[#D4AF37]">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Tentang Kami */}
      <About />

      {/* Bagian Proses Order */}
      <Process />

      {/* Bagian Katalog Produk */}
      <Catalog />

      {/* Bagian Testimoni */}
      <Testimonials />

      {/* Footer Bawah */}
      <Footer />

      {/* Tombol Melayang (WA & Scroll Up) */}
      <FloatingButtons />
    </main>
  );
}