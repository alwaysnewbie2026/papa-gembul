'use client';

import React from 'react';
import { Product } from '@/types';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  
  const handleOrder = () => {
    const phone = "6285111205354";
    const text = `Halo Papa Gembul! Saya mau pesan ${product.name} harga promo ${product.price}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    // Hapus h-full agar kartu bisa memanjang (grow) sesuai isi teks
    <div className="gsap-fade-up group relative bg-[#FDF8E8] rounded-3xl overflow-hidden border-2 md:border-4 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:shadow-[2px_2px_0px_0px_#3E2723] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 flex flex-col w-full">
      
      {/* --- BAGIAN GAMBAR --- */}
      <div className={`h-56 md:h-72 ${product.color} relative overflow-hidden shrink-0`}>
          
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          
          {/* Tipografi Background */}
          <h3 className={`font-abril text-6xl md:text-8xl opacity-20 ${product.textColor} rotate-[-10deg] absolute -bottom-4 -left-4 scale-150 select-none whitespace-nowrap z-0`}>
            {product.id.split('-')[0]} 
          </h3>

          {/* FOTO PRODUK */}
          <div className="relative w-full h-full z-20 p-6 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl filter"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* BADGE DISKON */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4 z-30 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              PROMO SERU
            </div>
          )}

          {/* BADGE TAGLINE */}
          <div className="absolute bottom-4 left-0 right-0 z-30 text-center px-4">
             <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase border border-current px-3 py-1 rounded-full ${product.textColor} bg-black/30 backdrop-blur-md`}>
                {product.tagline}
             </span>
          </div>
      </div>

      {/* --- BAGIAN KONTEN --- */}
      <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-abril text-2xl md:text-3xl text-[#3E2723] leading-none">{product.name}</h3>
            <span className="font-bold text-[#D4AF37] text-xs font-jakarta bg-[#3E2723] px-2 py-1 rounded-md shrink-0 ml-2 h-fit">
                {product.weight}
            </span>
          </div>
          
          {/* DESKRIPSI UTUH (FIX: Hapus line-clamp-2) */}
          {/* text-justify agar rapi kiri-kanan */}
          <p className="text-[#5D4037] text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mt-auto pt-4 border-t border-dashed border-gray-300">
            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                
                {/* HARGA */}
                <div className="flex flex-col items-start">
                    {product.originalPrice && (
                        <span className="text-gray-400 text-sm line-through decoration-red-500 decoration-2 font-medium">
                            {product.originalPrice}
                        </span>
                    )}
                    <span className="text-2xl md:text-3xl font-bold text-[#3E2723] font-abril">
                        {product.price}
                    </span>
                </div>

                {/* TOMBOL BELI */}
                <button 
                    onClick={handleOrder}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg group-hover:bg-[#3E2723]"
                >
                    <MessageCircle size={20} />
                    <span>Beli</span>
                </button>
            </div>
          </div>
      </div>
    </div>
  );
}