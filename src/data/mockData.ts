// src/data/mockData.ts
import { Product, Testimonial } from '@/types';

export const products: Product[] = [

  {
    id: '1',
    name: 'Golden Oasis',
    tagline: 'Premium Selection',
    description: 'Kurma pilihan terbaik standar ekspor. Pas untuk hidangan keluarga.',
    price: 'Rp 45.000',
    originalPrice: 'Rp 68.000',
    weight: '1000gr',
    color: 'bg-orange-700',
    textColor: 'text-orange-50',
    image: '/images/go.png'
  },
  {
    id: '2',
    name: 'Golden Oasis',
    tagline: 'Premium Selection',
    description: 'Kurma pilihan terbaik standar ekspor. Pas untuk hidangan keluarga.',
    price: 'Rp 28.000',
    originalPrice: 'Rp 39.000',
    weight: '500gr',
    color: 'bg-orange-700',
    textColor: 'text-orange-50',
    image: '/images/go.png'
  }
];

export const testimonials: Testimonial[] = [
  { name: "Bunda Rina", role: "Ibu Rumah Tangga", text: "Kurmanya beneran premium! Anak-anak biasanya gak suka kurma, tapi pas coba Sukari Papa Gembul malah ketagihan." },
  { name: "Pak Haji Dedi", role: "Pengusaha", text: "Ajwa-nya asli, teksturnya pas banget. Packaging mewah, cocok buat hampers lebaran nanti." },
  { name: "Siska Kohl", role: "Food Lover", text: "Medjoolnya guede banget! Legit parah. Fix bakal langganan terus di sini." }
];