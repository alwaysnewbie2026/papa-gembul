'use client';

import React, { useState } from 'react';
import { Phone, Instagram, MapPin, Mail, ArrowRight, Copy, Check, CreditCard } from 'lucide-react';

export default function Footer() {
  // State untuk notifikasi copy
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Data Rekening (Ganti dengan nomor asli Anda)
  const paymentMethods = [
    { id: 'bca', bank: 'BCA', number: '0389911269', owner: 'A.N Adisti Ayuningtyas KH (istri papa)', color: 'bg-blue-600' },
    { id: 'Dana', bank: 'Dana', number: '089604150929', owner: 'A.N Adisti Ayuningtyas KH (istri papa)', color: 'bg-yellow-600' },

  ];

  // Fungsi Copy to Clipboard
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    // Reset icon check setelah 2 detik
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <footer className="bg-[#2D1B18] text-[#FDF8E8] pt-20 pb-10 px-6 border-t-8 border-[#D4AF37] relative overflow-hidden font-jakarta">
      
      {/* Pattern Background (Hiasan) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 relative z-10">
          
          {/* KOLOM 1: BRAND & INFO (Lebar 4 kolom) */}
          <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="font-abril text-4xl text-[#D4AF37] mb-2">PAPA GEMBUL.</h3>
                <p className="text-sm font-bold tracking-widest uppercase text-gray-400">Premium Dates Specialist</p>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                  Menghadirkan kurma pilihan terbaik dari tanah suci langsung ke meja makan keluarga Indonesia. Garansi 100% original dan berkualitas.
              </p>
              <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group cursor-pointer">
                      <MapPin size={20} className="mt-1 group-hover:animate-bounce" />
                      <span className="text-sm">Jl. Sriwijaya No 10, Sukabumi, Jawa Barat, Indonesia.</span>
                  </div>
                  <a 
  href="https://www.tiktok.com/@papa.gembul00" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group cursor-pointer"
>
    {/* Ikon TikTok (SVG Custom) */}
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
    
    {/* Username TikTok */}
    <span className="text-sm font-medium">@papa.gembul00</span>
</a>
              </div>
          </div>
          
          {/* KOLOM 2: NAVIGASI FULL (Lebar 2 kolom) */}
          <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-6 text-[#D4AF37]">Menu Utama</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                  {['Beranda', 'Tentang Kami', 'Proses Order', 'Katalog Produk', 'Testimoni Pembeli'].map((item, idx) => (
                    <li key={idx} onClick={() => scrollTo(item === 'Beranda' ? 'home' : item.split(' ')[0].toLowerCase())} className="hover:text-[#FDF8E8] hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                      <ArrowRight size={12} className="opacity-50" /> {item}
                    </li>
                  ))}
              </ul>
          </div>

           {/* KOLOM 3: PRODUK (Lebar 2 kolom) */}
           <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-6 text-[#D4AF37]">Kategori</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                  {['Kurma Mesir Golden Oasis'].map((item, idx) => (
                    <li key={idx} onClick={() => scrollTo('katalog')} className="hover:text-[#FDF8E8] hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                      <ArrowRight size={12} className="opacity-50" /> {item}
                    </li>
                  ))}
              </ul>
          </div>

           {/* KOLOM 4: PEMBAYARAN ESTETIK (Lebar 4 kolom) */}
           <div className="lg:col-span-4">
              <h4 className="font-bold text-lg mb-6 text-[#D4AF37]">Metode Pembayaran</h4>
              <p className="text-xs text-gray-400 mb-4">Klik pada kartu untuk menyalin No. Rekening</p>
              
              <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div 
                      key={method.id}
                      onClick={() => handleCopy(method.number, method.id)}
                      className="group relative bg-[#3E2723] p-4 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#4E342E] transition-all cursor-pointer flex items-center justify-between shadow-lg overflow-hidden"
                    >
                        {/* Hiasan background card */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${method.color}`}></div>
                        
                        <div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D4AF37] overflow-hidden">
  
  {/* LOGIKA PEMILIHAN LOGO */}
  {method.id === 'bca' ? (
    // --- LOGO BCA (Teks Bold) ---
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontWeight="900" fontSize="11px" fontFamily="sans-serif">
        BCA
      </text>
    </svg>
  ) : method.id === 'dana' ? (
    // --- LOGO DANA (Dompet Digital) ---
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-2-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-1h16v-5z"/>
    </svg>
  ) : (
    // --- LOGO DEFAULT (Kartu Kredit/Bank Lain) ---
    <CreditCard size={20} />
  )}

</div>
                            <div>
                                <h5 className="font-bold text-[#FDF8E8] text-sm">{method.bank} <span className="text-[10px] font-normal text-gray-400">({method.owner})</span></h5>
                                <p className="font-mono text-[#D4AF37] text-lg tracking-wider">{method.number}</p>
                            </div>
                        </div>

                        {/* Tombol Copy / Ceklis */}
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#3E2723] transition-colors">
                            {copiedId === method.id ? <Check size={16} /> : <Copy size={16} />}
                        </div>

                        {/* Toast Notification Kecil (Floating) */}
                        {copiedId === method.id && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366] text-white text-xs px-3 py-1 rounded-full font-bold shadow-xl animate-pulse whitespace-nowrap z-20">
                            Disalin!
                          </div>
                        )}
                    </div>
                  ))}
              </div>
          </div>
          
      </div>
      
      {/* GARIS PEMBATAS & COPYRIGHT */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Papa Gembul Premium Dates. All rights reserved.
          </div>
        <div className="flex gap-6">
             <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Syarat & Ketentuan</span>
             <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Kebijakan Privasi</span>
          </div>

      </div>
    </footer>
  );
}