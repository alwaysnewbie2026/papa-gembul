'use client';
import { useEffect, useRef } from 'react';
import { products } from '@/data/mockData';
import ProductCard from '../ui/ProductCard'; // Import komponen baru
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Catalog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       // Animasi untuk class 'gsap-fade-up' yang ada di dalam ProductCard
       gsap.utils.toArray('.gsap-fade-up').forEach((el: any) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="katalog" ref={sectionRef} className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 section-title">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase">Best Seller</span>
          <h2 className="font-abril text-5xl md:text-6xl text-[#3E2723] mt-2">Koleksi Spesial</h2>
        </div>

        {/* Grid Katalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            /* Panggil Component ProductCard di sini */
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}