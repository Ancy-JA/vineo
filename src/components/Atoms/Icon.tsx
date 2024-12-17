import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SocialMediaIconProps {
  href: string; // Link URL
  src: string; // Image source
  alt: string; // Alternative text for the image
  size?: number; // Optional size for width/height
  className?: string; // Custom classes for styling
}

const Icon: React.FC<SocialMediaIconProps> = ({
  href,
  src,
  alt,
  size = 24, // Default size is 24px
  className = '',
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div
      className={`flex items-center justify-center rounded-full hover:bg-gray-100 transition-transform ${className}`}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  </Link>
);
export default Icon;
