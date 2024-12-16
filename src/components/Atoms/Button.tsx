import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string; // Button label
  onClick?: () => void; // Click event handler
  variant?: 'primary' | 'secondary' | 'outline' | 'transparent'; // Styling variants
  size?: 'small' | 'medium' | 'large'; // Button sizes
  href?: string; // If the button is a link
  disabled?: boolean; // Disabled state
  loading?: boolean; // Loading state
  className?: string; // Additional custom styles
  icon?: React.ReactNode; // Optional icon
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  href,
  disabled = false,
  loading = false,
  className = '',
  icon,
}) => {
  const baseStyles = `rounded font-domine focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-200 flex items-center justify-center gap-2`;
  const variantStyles = {
    primary: 'bg-customPink text-white hover:bg-darkPink',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-customPink text-customPink hover:bg-pink-100',
    transparent: 'bg-transparent text-customPink hover:text-darkPink', // New variant for buttons with no background or border
  };
  const sizeStyles = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'px-12 py-3',
  };

  const isDisabled = disabled || loading;

  const content = (
    <>
      {loading && <span className="loader-spinner"></span>}
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <a
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={onClick}
          aria-disabled={isDisabled}
        >
          {content}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default Button;
