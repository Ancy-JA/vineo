// components/Heading.tsx
import React from 'react';

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <h3 className={`text-lg md:text-xl font-semibold font-domine text-customGray mb-4 ${className}`}>{title}</h3>;
};

export default Heading;
