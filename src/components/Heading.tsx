// components/Heading.tsx
import React from 'react';

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <div className={`text-lg md:text-xl font-semibold font-domine text-customGray  ${className}`}>{title}</div>;
};

export default Heading;
