
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice?: string; 
  
  priceOffline?: string;
  originalPriceOffline?: string;
  
  priceOnline?: string;
  originalPriceOnline?: string;
  linkOnline?: string; // <-- TAMBAHAN: Link ke TikTok Shop/Shopee
  
  weight: string;
  color: string;
  textColor: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initial?: string; // Opsional
  avatar?: string;  // Opsional
}