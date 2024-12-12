// components/Text.tsx
import React from 'react';

interface TextProps {
  content: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }) => {
  return <div className={`text-sm md:text-base text-description font-inter ${className}`}>{content}</div>;
};

export default Text;
