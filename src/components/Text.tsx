// components/Text.tsx
import React from 'react';

interface TextProps {
  content: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }) => {
  return <p className={`text-sm md:text-base text-description font-inter ${className}`}>{content}</p>;
};

export default Text;
