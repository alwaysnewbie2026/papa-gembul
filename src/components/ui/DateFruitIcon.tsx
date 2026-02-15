import React from 'react';

interface IconProps {
  className?: string;
}

export default function DateFruitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2C16.5,2 20,5.5 20,10C20,16 16,21 12,22C8,21 4,16 4,10C4,5.5 7.5,2 12,2M12,4C8.5,4 6,7 6,10C6,14.5 9,18.5 12,19.5C15,18.5 18,14.5 18,10C18,7 15.5,4 12,4Z" />
      <path d="M10,8C10.5,7 11.5,6.5 12.5,7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M11,12C10,13 10,14 11,15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
    </svg>
  );
}