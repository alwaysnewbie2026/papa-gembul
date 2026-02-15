'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image'; <-- Kita matikan dulu Next Image biar ketahuan masalahnya

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       // Kita ubah targetnya spesifik ke teks saja dulu biar gambar gak kena dampak
       gsap.utils.toArray('.animasi-teks').forEach((el: any) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: el, start: "top 85%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tentang" ref={sectionRef} className="py-24 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* --- BAGIAN FOTO (Hapus class gsap-fade-up agar tidak hilang) --- */}
          <div className="md:w-1/2">
              <div className="relative">
                  {/* Dekorasi Garis */}
                  <div className="absolute top-4 left-4 w-full h-full border-4 border-[#D4AF37] rounded-3xl"></div>
                  
                  {/* Container Foto */}
                  <div className="w-full h-[400px] bg-gray-300 rounded-3xl relative z-10 overflow-hidden shadow-xl flex items-center justify-center">
                    
                    {/* KITA PAKAI IMG BIASA DULU UNTUK PENGECEKAN */}
                    {/* Jika ini muncul, berarti path benar. Jika icon pecah, berarti path salah */}
                    <img 
                        src="/images/foto.png" 
                        alt="Cek Foto"
                        className="w-full h-full object-cover"
                    />
                    
                  </div>
              </div>
          </div>

          {/* --- BAGIAN TEKS (Tetap pakai animasi) --- */}
          <div className="md:w-1/2 animasi-teks">
              <div className="mb-6">
                  <span className="text-[#D4AF37] font-bold tracking-widest uppercase">Tentang Kami</span>
                  <h2 className="font-abril text-4xl md:text-5xl text-[#3E2723] mt-2">Kualitas Sultan,<br/>Harga Teman.</h2>
              </div>
              <p className="text-[#5D4037] text-lg leading-relaxed mb-6">
                  "Papa Gembul" lahir dari keinginan sederhana: menghadirkan kurma berkualitas terbaik yang biasanya hanya ada di hotel bintang lima, langsung ke meja makan keluarga Indonesia.
              </p>
              <div className="flex gap-8">
                  <div>
                      <h4 className="font-abril text-4xl text-[#D4AF37]">100%</h4>
                      <p className="text-sm font-bold">Original</p>
                  </div>
                  <div>
                      <h4 className="font-abril text-4xl text-[#D4AF37]">5000+</h4>
                      <p className="text-sm font-bold">Terjual</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}