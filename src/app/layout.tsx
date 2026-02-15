import type { Metadata } from 'next';
import { Abril_Fatface, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const abril = Abril_Fatface({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-abril' 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta' 
});

export const metadata: Metadata = {
  title: 'Papa Gembul - Premium Dates',
  description: 'Pusat kurma premium pilihan terbaik untuk keluarga.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${abril.variable} ${jakarta.variable} font-jakarta bg-[#FDF8E8] text-[#3E2723]`}>
        {children}
      </body>
    </html>
  );
}