'use client';

import React, { useEffect, useRef } from 'react';
import { ShoppingBag, MessageCircle, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       // Animasi kartu muncul satu per satu
       gsap.utils.toArray('.process-card').forEach((el: any, index) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: index * 0.2, // Stagger manual dengan delay
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proses" ref={sectionRef} className="py-20 px-6 bg-[#FDF8E8]">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16 section-title">
            <h2 className="font-abril text-4xl md:text-5xl text-[#3E2723]">Cara Pesan Simpel</h2>
            <div className="w-24 h-2 bg-[#D4AF37] mx-auto rounded-full mt-4"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="process-card p-8 bg-white rounded-3xl shadow-lg border-b-8 border-[#3E2723] hover:-translate-y-2 transition-transform">
               <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                  <ShoppingBag size={40} />
               </div>
               <h3 className="font-abril text-2xl mb-3">1. Pilih Varian</h3>
               <p className="text-gray-600">Cek katalog di bawah dan tentukan kurma favoritmu.</p>
            </div>

            {/* Step 2 */}
            <div className="process-card p-8 bg-white rounded-3xl shadow-lg border-b-8 border-[#3E2723] hover:-translate-y-2 transition-transform">
               <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                  <MessageCircle size={40} />
               </div>
               <h3 className="font-abril text-2xl mb-3">2. Chat Admin</h3>
               <p className="text-gray-600">Klik tombol beli, otomatis terhubung ke WhatsApp.</p>
            </div>

            {/* Step 3 */}
            <div className="process-card p-8 bg-white rounded-3xl shadow-lg border-b-8 border-[#3E2723] hover:-translate-y-2 transition-transform">
               <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                  <Truck size={40} />
               </div>
               <h3 className="font-abril text-2xl mb-3">3. Kurma Datang</h3>
               <p className="text-gray-600">Duduk manis, kurma premium sampai di depan rumah.</p>
            </div>
         </div>
      </div>
    </section>
  );
}