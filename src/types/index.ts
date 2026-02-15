// src/types/index.ts

export interface Product {
id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice?: string; // Tanda tanya artinya opsional
  weight: string;
  color: string;
  textColor: string;
  image: string; // Tambahan baru
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}