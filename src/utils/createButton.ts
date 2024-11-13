// src/utils/createButton.ts

import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outlined';
  extraClasses?: string;
}

const CreateButton = ({
  text,
  onClick,
  variant = 'primary',
  extraClasses = '',
}: ButtonProps): JSX.Element => {
  const baseClasses = 'font-semibold py-2 px-6 rounded-md shadow-lg transition-colors';

  const variantClasses: Record<string, string> = {
    primary: 'bg-customPink hover:bg-[#e55e5e] text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outlined: 'border border-customPink text-customPink hover:bg-gray-100',
  };

  // Validate variant to avoid TypeScript error
  const buttonVariant = variantClasses[variant] || variantClasses.primary;

  // Combine base and variant classes
  const buttonClasses = `${baseClasses} ${buttonVariant} ${extraClasses}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default CreateButton;
