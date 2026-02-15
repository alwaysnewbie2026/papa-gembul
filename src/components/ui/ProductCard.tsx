'use client';

import React from 'react';
import { Product } from '@/types';
import { MessageCircle, Store, Truck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  
  // Fungsi WA (Offline)
  const handleWA = () => {
    const phone = "6285111205354";
    const text = `Halo Papa Gembul! Saya mau ambil sendiri (Offline) ${product.name} harga ${product.priceOffline}. Shareloc dong!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Fungsi TikTok (Online)
  const handleTikTok = () => {
    if (product.linkOnline) {
      window.open(product.linkOnline, '_blank');
    } else {
      // Fallback kalau link lupa diisi
      alert("Link TikTok belum tersedia, hubungi WA ya!");
    }
  };

  // Fungsi Default (Satu Tombol)
  const handleGeneralOrder = () => {
      const phone = "6285111205354";
      const text = `Halo Papa Gembul! Saya mau pesan ${product.name}.`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="gsap-fade-up group relative bg-[#FDF8E8] rounded-3xl overflow-hidden border-2 md:border-4 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:shadow-[2px_2px_0px_0px_#3E2723] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 flex flex-col w-full">
      
      {/* --- BAGIAN GAMBAR --- */}
      <div className={`h-56 md:h-72 ${product.color} relative overflow-hidden shrink-0`}>
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <h3 className={`font-abril text-6xl md:text-8xl opacity-20 ${product.textColor} rotate-[-10deg] absolute -bottom-4 -left-4 scale-150 select-none whitespace-nowrap z-0`}>
            {product.id.split('-')[0]} 
          </h3>
          <div className="relative w-full h-full z-20 p-6 transition-transform duration-500 group-hover:scale-110">
            <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl filter" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          {product.originalPrice && (
            <div className="absolute top-4 left-4 z-30 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">PROMO</div>
          )}
          <div className="absolute bottom-4 left-0 right-0 z-30 text-center px-4">
             <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase border border-current px-3 py-1 rounded-full ${product.textColor} bg-black/30 backdrop-blur-md`}>
                {product.tagline}
             </span>
          </div>
      </div>

      {/* --- BAGIAN KONTEN --- */}
      <div className="p-4 md:p-6 flex flex-col flex-grow bg-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-abril text-xl md:text-2xl text-[#3E2723] leading-none">{product.name}</h3>
            <span className="font-bold text-[#D4AF37] text-[10px] md:text-xs font-jakarta bg-[#3E2723] px-2 py-1 rounded-md shrink-0 ml-2 h-fit">{product.weight}</span>
          </div>
          
          <p className="text-[#5D4037] text-sm leading-relaxed mb-6">{product.description}</p>

          <div className="mt-auto pt-4 border-t border-dashed border-gray-300">
            
            {/* LOGIKA PILIHAN TOMBOL */}
            {product.priceOffline ? (
                <div className="space-y-3">
                    
                    {/* 1. TOMBOL OFFLINE (WA) */}
                    <div 
                        onClick={handleWA}
                        className="flex justify-between items-center bg-[#25D366]/10 p-2 pr-3 rounded-xl border border-[#25D366] cursor-pointer hover:bg-[#25D366] hover:text-white transition-all group/wa"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-[#25D366] text-white p-2 rounded-lg group-hover/wa:bg-white group-hover/wa:text-[#25D366]">
                                <Store size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">Ambil Sendiri</span>
                                <div className="flex items-center gap-2">
                                     <span className="text-xs line-through decoration-red-500 opacity-60">{product.originalPriceOffline}</span>
                                     <span className="font-bold text-lg">{product.priceOffline}</span>
                                </div>
                            </div>
                        </div>
                        <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover/wa:opacity-100 group-hover/wa:translate-x-0 transition-all" />
                    </div>

                    {/* 2. TOMBOL ONLINE (TIKTOK) */}
                    <div 
                        onClick={handleTikTok}
                        className="flex justify-between items-center bg-black/5 p-2 pr-3 rounded-xl border border-black cursor-pointer hover:bg-black hover:text-white transition-all group/tt"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-black text-white p-2 rounded-lg group-hover/tt:bg-white group-hover/tt:text-black">
                                {/* Icon TikTok SVG */}
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">Kirim / TikTok</span>
                                <div className="flex items-center gap-2">
                                     <span className="text-xs line-through decoration-red-500 opacity-60">{product.originalPriceOnline}</span>
                                     <span className="font-bold text-lg">{product.priceOnline}</span>
                                </div>
                            </div>
                        </div>
                        <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover/tt:opacity-100 group-hover/tt:translate-x-0 transition-all" />
                    </div>

                </div>
            ) : (
                // TOMBOL STANDAR (Satu Tombol Besar)
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                     <div className="flex flex-col items-start">
                        {product.originalPrice && <span className="text-gray-400 text-sm line-through decoration-red-500 font-medium">{product.originalPrice}</span>}
                        <span className="text-2xl md:text-3xl font-bold text-[#3E2723] font-abril">{product.price}</span>
                    </div>
                    <button onClick={handleGeneralOrder} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                        <MessageCircle size={20} /> <span>Pesan</span>
                    </button>
                </div>
            )}

          </div>
      </div>
    </div>
  );
}