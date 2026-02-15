'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Bunda Rini",
    role: "Ibu Rumah Tangga",
    text: "Baru kali ini nemu kurma yang pas banget buat anak-anak. Dagingnya tebal, bijinya kecil. Papa Gembul emang juara!",
    initial: "R"
  },
  {
    name: "Pak Haji Slamet",
    role: "Pengusaha",
    text: "Alhamdulillah, buat stok puasa dan hampers lebaran sangat pantas. Kemasannya mewah, rasanya premium.",
    initial: "H"
  },
  {
    name: "Kak Sarah",
    role: "Mahasiswi",
    text: "Suka banget sama Kurma Sukari-nya! Lumer di mulut kayak karamel. Pengiriman juga cepet banget.",
    initial: "S"
  },
   {
    name: "Dr. Farhan",
    role: "Dokter Umum",
    text: "Kualitas kurma Ajwa-nya asli. Sangat saya rekomendasikan untuk kesehatan jantung & imun tubuh.",
    initial: "F"
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-[#FDF8E8] relative overflow-hidden">
      
      {/* JUDUL SECTION */}
      <div className="text-center mb-16 px-6 relative z-10">
         <span className="text-[#D4AF37] font-bold tracking-widest uppercase">Kata Mereka</span>
         <h2 className="font-abril text-4xl md:text-5xl text-[#3E2723] mt-2">Keluarga Papa Gembul</h2>
      </div>

      {/* --- MARQUEE AREA --- */}
      {/* Masking Gradient: Biar pinggir kiri-kanan nge-fade halus */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
        
        {/* CONTAINER ANIMASI (Menggunakan class dari globals.css) */}
        <div className="animate-marquee flex gap-6 px-4">
          
          {/* LOOPING 2x Agar tidak putus */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {testimonials.map((item, idx) => (
                <div 
                  key={`${i}-${idx}`} 
                  // DESAIN KARTU BARU: "Dark Sultan Theme"
                  // bg-[#3E2723]: Coklat Tua (Kontras dengan bg krem)
                  // text-[#FDF8E8]: Teks warna terang (Mudah dibaca)
                  className="w-[300px] md:w-[400px] bg-[#3E2723] p-6 md:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl flex-shrink-0 relative group hover:scale-[1.02] transition-transform duration-300"
                >
                    {/* Ikon Kutipan (Transparan) */}
                    <Quote className="absolute top-6 right-6 text-[#D4AF37]/10 w-12 h-12 group-hover:text-[#D4AF37]/30 transition-colors" />
                    
                    {/* Bintang Emas */}
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map((star) => (
                            <Star key={star} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                    </div>

                    {/* Isi Testimoni */}
                    <p className="text-[#FDF8E8]/90 text-sm md:text-base leading-relaxed mb-6 italic font-medium">
                        "{item.text}"
                    </p>

                    {/* Profil User */}
                    <div className="flex items-center gap-4 border-t border-[#D4AF37]/20 pt-4">
                        {/* Avatar Bulat */}
                        <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#3E2723] font-abril text-xl shadow-lg border-2 border-[#FDF8E8]">
                             {item.initial}
                        </div>
                        <div>
                            <h4 className="font-bold text-[#FDF8E8] text-base">{item.name}</h4>
                            <p className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">{item.role}</p>
                        </div>
                    </div>
                </div>
              ))}
            </React.Fragment>
          ))}

        </div>
      </div>

    </section>
  );
}