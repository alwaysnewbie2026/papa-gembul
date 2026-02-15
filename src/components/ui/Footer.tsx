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
    { id: 'bca', bank: 'BCA', number: '123 456 7890', owner: 'A.N Papa Gembul', color: 'bg-blue-600' },
    { id: 'mandiri', bank: 'MANDIRI', number: '100 000 200 300', owner: 'A.N Papa Gembul', color: 'bg-yellow-600' },
    { id: 'bri', bank: 'BRI', number: '0000 01 000000 50 0', owner: 'A.N Papa Gembul', color: 'bg-orange-600' },
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
                      <span className="text-sm">Jl. Kurma Manis No. 88, Sukabumi, Jawa Barat, Indonesia.</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group cursor-pointer">
                      <Mail size={20} />
                      <span className="text-sm">halo@papagembul.com</span>
                  </div>
                   <div className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group cursor-pointer">
                      <Instagram size={20} />
                      <span className="text-sm">halo@papagembul.com</span>
                  </div>
                   <div className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group cursor-pointer">
                      <Phone size={20} />
                      <span className="text-sm">halo@papagembul.com</span>
                  </div>
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
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                                <CreditCard size={20} />
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