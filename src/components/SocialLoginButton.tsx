import React from 'react';
import Image from 'next/image';

interface SocialLoginButtonProps {
  iconSrc: string;
  altText: string;
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ iconSrc, altText, onClick }) => (
  <button type="button" onClick={onClick} className="flex items-center justify-center mt-4">
    <Image src={iconSrc} alt={altText} width={24} height={24} className="mr-2" />
  </button>
);

export default SocialLoginButton;
