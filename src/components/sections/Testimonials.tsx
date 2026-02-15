'use client';

import React from 'react';
import { testimonials } from '@/data/mockData';
import { Star, Quote } from 'lucide-react';

// Kita gandakan data agar looping terlihat halus (seamless)
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-[#3E2723] text-[#FDF8E8] relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 mb-12 text-center">
          <h2 className="font-abril text-4xl md:text-5xl text-[#FDF8E8]">Kata Mereka</h2>
          <p className="text-[#D4AF37] mt-2 text-lg">Ribuan keluarga puas dengan Papa Gembul</p>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="relative w-full overflow-hidden mask-linear-gradient">
          <div className="flex w-max gap-6 animate-scroll pause-on-hover px-6">
              {duplicatedTestimonials.map((testi, i) => (
                  <div 
                    key={i} 
                    className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#5D4037]/40 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors relative group"
                  >
                      <Quote className="absolute top-6 right-6 text-[#D4AF37] opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
                      
                      <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                          {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#D4AF37" />)}
                      </div>
                      
                      <p className="text-base md:text-lg italic mb-6 leading-relaxed text-gray-200">"{testi.text}"</p>
                      
                      <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#3E2723] font-bold text-lg">
                              {testi.name[0]}
                          </div>
                          <div>
                              <h4 className="font-bold text-base md:text-lg">{testi.name}</h4>
                              <p className="text-[#D4AF37] text-xs md:text-sm">{testi.role}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      
      {/* Gradient Mask for fading effect on sides */}
      <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-[#3E2723] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-[#3E2723] to-transparent z-20 pointer-events-none"></div>

    </section>
  );
}