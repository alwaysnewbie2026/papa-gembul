import React from 'react';
import dynamic from 'next/dynamic'; // Untuk Lazy Load section berat
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import DateFruitIcon from '@/components/ui/DateFruitIcon';

// ✅ PERBAIKAN: Import FloatingButtons secara biasa (Static)
// Karena komponen ini sudah punya 'use client' di dalamnya, dia aman.
// Menggunakan dynamic({ ssr: false }) di sini lah yang menyebabkan error build.
import FloatingButtons from '@/components/ui/FloatingButtons';

// --- CODE SPLITTING (OPTIMASI PERFORMANCE) ---
// Kita gunakan dynamic import untuk bagian bawah halaman.
// Browser tidak akan memprioritaskan download kode ini di awal.
// Hapus { ssr: true } karena itu default, kodenya jadi lebih bersih.
const About = dynamic(() => import('@/components/sections/About'));
const Process = dynamic(() => import('@/components/sections/Process'));
const Catalog = dynamic(() => import('@/components/sections/Catalog'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Footer = dynamic(() => import('@/components/ui/Footer'));

export default function Home() {
  return (
    <main className="overflow-x-hidden selection:bg-[#D4AF37] selection:text-white">
      {/* Navbar & Hero dimuat instan untuk LCP (Largest Contentful Paint) yang bagus */}
      <Navbar />
      <Hero />

      {/* MARQUEE (Running Text) */}
      <div className="bg-[#3E2723] py-4 overflow-hidden border-y-4 border-[#D4AF37] rotate-[-1deg] origin-left scale-105 z-20 relative shadow-xl">
        <div className="flex w-max animate-marquee">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8 px-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 text-[#FDF8E8] font-abril text-2xl md:text-3xl uppercase tracking-wider">
                   <span>Premium Dates</span>
                   <span className="text-[#D4AF37]"><DateFruitIcon className="w-6 h-6 md:w-8 md:h-8" /></span>
                   <span>Papa Gembul</span>
                   <span className="text-[#D4AF37]">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* RENDER OPTIMIZATION */}
      {/* content-visibility: auto membuat browser menunda rendering bagian ini sampai discroll */}
      <div className="content-visibility-auto">
        <About />
        <Process />
        <Catalog />
        <Testimonials />
        <Footer />
      </div>

      {/* Tombol Melayang */}
      <FloatingButtons />
    </main>
  );
}