/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Format gambar modern (kecil & tajam)
    formats: ['image/avif', 'image/webp'],
    // Izinkan gambar dari folder public dan domain luar
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Optimasi ukuran untuk berbagai device
    deviceSizes: [320, 420, 768, 1024, 1200], 
    imageSizes: [16, 32, 48, 64, 96],
    // Cache gambar lebih lama
    minimumCacheTTL: 60,
  },
  // Hapus console.log saat production biar bersih
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;