// src/data/mockData.ts
import { Product, Testimonial } from '@/types';

export const products: Product[] = [

{
// --- VARIAN 1KG (SI JUMBO) ---
  
id: 'golden-1kg',
    name: 'Golden Oasis (JUMBO)',
    tagline: 'Puas Sekeluarga',
    description: 'Stok wajib buat sekeluarga biar gak rebutan. Daging tebal, biji kecil, manisnya pas!',
    price: 'Rp 45.000', 
    weight: '1000gr',
    color: 'bg-[#3E2723]',
    textColor: 'text-[#FDF8E8]',
    image: '/images/go.png',
    
    // DATA HARGA & LINK
    priceOffline: 'Rp 45.000',
    originalPriceOffline: 'Rp 65.000',
    
    priceOnline: 'Rp 55.000',
    originalPriceOnline: 'Rp 75.000',
    linkOnline: 'https://shop-id.tokopedia.com/view/product/1734407856074425631?encode_params=MIIBpgQMxEw-GIlLwRodzF87BIIBgloKB_yBSUf4jyZmd0mERexFQEO9H5JOaNPxpSGFMvjfwIt4F5uXmf2qZIBK9jekIwYLHBAnwTogZT0NH19S-4nQSHln0nvWPgN0H-ig6-AJWsm45Re_HDgnCXqdgIFBm7SVQlzmQno-kvizCHDLF6d_wQYMLwAe5Y1v5o78aDzwllfbq58cZQzz2btCGy_lfcYXjhPEFYtAm_3PBfoy5LHZAEfJ9OKlNVk_fufJ1RJmcK6ium3oyxj_mEUnGAMPVYZhirktdUKBd7bkoBnMGTQpZORPoR-3MYwsapmZ2ssIFK6cdr-w4KZMaTORkMkKe3XxaAYu2cXp-JEjezhZRMm9uiuOMcc7cLFeIoGcIAyhF6P1qsRRoTE-EVhCnXHmSB5tHbjtUeROsBJ5bBdmfDvIVB8J7xwBiTvt-kDOmRpWBVPqfsB2CSEz1Wr_qFwpKBvUbUrInzgh5JJG_f0OUV-8CgVIKiRknsWsFDQnmsd008gesy5wxsbi-KzNvsXOzeQuBBA7on_AzIgZp4TVkVYGpUuL&region=ID&locale=id-ID&source=seller_center&hide_tips=&no-cache=1&e=1', // Ganti link produk TikTok asli
  },

  // --- VARIAN 500GR ---
  {
    id: 'golden-500gr',
    name: 'Golden Oasis (HEMAT)',
    tagline: 'Solusi Tanggal Tua',
    description: 'Pas banget buat yang mau icip-icip dulu. Awas ketagihan!',
    price: 'Rp 28.000', 
    weight: '500gr',
    color: 'bg-[#D4AF37]',
    textColor: 'text-[#3E2723]',
    image: '/images/go.png',

    priceOffline: 'Rp 25.000',
    originalPriceOffline: 'Rp 35.000',
    
    priceOnline: 'Rp 32.000',
    originalPriceOnline: 'Rp 45.000',
    linkOnline: 'https://shop-id.tokopedia.com/view/product/1734407859471811871?encode_params=MIIBpgQMHZ7GekOGdOowMnBYBIIBgtBlUdVsrigK0oRIMCQhVXlmjxjivB5lXy3bo8KzsC_QTLjXpv8CP5mmWLbzvA-921-y8aS6SqkdYBjToFsnpVwXurwAGUDo-GRij_N2NRQ_9Z1o7GyvOyuqKVi_pqsOtfwdOD6Nl2Nth6VVRcA6ggFMKmBmO7d9nqe-lC0O-5HjnoFuYbWzfblkpEs9Pl2cDx9cv3bZbMXZan02p7Ib-Kq28ZEoXZv9ycPzv-JOeh0AvNau0ovtrku8HL2gmD47GI6JAq9eoD-BIzDXYUGpahxBQ8M7DAfVPSWR73UGAZTEJfA71_-sYdCa_ENriZTuWgLKd5H8YO5M2Gu5_b1rNC_xat80pNA_A44ul4SaoFBFk10yVERugMzcrBopRLnrTnsXpPtVYNO0JEn-M1SR8j2bCxM53FyA4RaPuwuhOV36DM_woQgmRBoMqWVCjL_2K4lf_n-XTOdX-hXHSlkRfdYWXcw-54zqgGsaq7SJA88E62c2swwfx_zIJ7hjcBBwbwu-BBCtYQkEGioeLtK3LU1fbIp9&region=ID&locale=id-ID&source=seller_center&hide_tips=&no-cache=1&e=1', // Ganti link produk TikTok asli
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