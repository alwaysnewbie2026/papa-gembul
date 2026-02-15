// src/data/mockData.ts
import { Product, Testimonial } from '@/types';

export const products: Product[] = [

{
    id: 'golden-1kg',
    name: 'Golden Oasis (JUMBO)',
    tagline: 'Puas Sekeluarga',
    // Deskripsi Ala Papa Gembul: Nge-gas, Lucu, Mendesak
    description: 'Sekilo cuma 45rb?! Ini mah sedekah berkedok jualan. Stok wajib buat sekeluarga biar gak rebutan. Awas, mikir kelamaan = kehabisan barang!',
    price: 'Rp 45.000',
    originalPrice: 'Rp 68.000', // Diskon Gila
    weight: '1000gr',
    color: 'bg-[#3E2723]', // Warna Coklat Tua
    textColor: 'text-[#FDF8E8]',
    image: '/images/go.png' // Pastikan nama file fotonya ini
  },

  // --- VARIAN 500GR (SI IRIT CERDAS) ---
  {
    id: 'golden-500gr',
    name: 'Golden Oasis (HEMAT)',
    tagline: 'Solusi Tanggal Tua',
    // Deskripsi Ala Papa Gembul: Bandingin sama harga kuota/bakso
    description: 'Cuma 28rb? Lebih murah dari paket data kamu! Pas banget buat yang mau icip-icip dulu atau stok di laci kantor (hati-hati dicomot temen kerja).',
    price: 'Rp 28.000',
    originalPrice: 'Rp 39.000',
    weight: '500gr',
    color: 'bg-[#D4AF37]', // Warna Emas
    textColor: 'text-[#3E2723]',
    image: '/images/go.png' // Pakai foto yang sama gpp
  },
];

const testimonials = [
  {
    name: "Bu Hj. Halimah",
    role: "Ketua Pengajian",
    text: "Kemarin bawa Golden Oasis 1kg buat takjil di Masjid. Masya Allah, langsung ludes diserbu ibu-ibu! Katanya dagingnya tebal, gak pelit. Besok mau pesen 5kg lagi buat acara Maulid ya Pa!",
    initial: "H"
  },
  {
    name: "Pak Bambang",
    role: "Pensiunan BUMN",
    text: "Iseng beli yang 500gr (28rb) buat temen ngopi sore. Ternyata pas banget! Gak terlalu lembek, gak keras, manisnya sopan di lidah. Solusi ngemil sehat daripada gorengan terus.",
    initial: "B"
  },
  {
    name: "Bu Siti",
    role: "Bendahara RT",
    text: "Awalnya ragu kok murah banget 28 ribu? Pas barang nyampe, kaget... ini mah kualitas supermarket! Suami saya yang biasanya gak suka kurma malah jadi rebutan sama anak. Nyesel cuma beli satu.",
    initial: "S"
  },
   {
    name: "Pak Dedi",
    role: "Karyawan Swasta",
    text: "Disuruh istri beli Golden Oasis 1kg. Kirain bakal awet sebulan, eh baru 3 hari udah tinggal bijinya doang 🤣. Anak-anak doyan banget. Emang bener kata Papa Gembul, nyesel gak beli dua kilo!",
    initial: "D"
  },
  {
    name: "Bu Ningsih",
    role: "Ibu Rumah Tangga",
    text: "Kurma Golden Oasis ini penyelamat wibawa saya di depan Mertua. Pas disuguhin, Mertua muji kok kurmanya enak & bersih. Alhamdulillah, makasih Papa Gembul udah bikin mantu ini disayang Mertua!",
    initial: "N"
  },
];