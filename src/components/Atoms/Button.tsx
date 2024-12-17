import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  noPadding?: boolean; // New prop to disable default padding
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
  children,
  noPadding = false,
}) => {
  const baseStyles = `rounded font-domine focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-200 flex items-center justify-center gap-2`;
  const variantStyles = {
    primary: 'bg-customPink text-white hover:bg-darkPink',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-customPink text-customPink hover:bg-pink-100',
    transparent: 'bg-transparent text-customPink hover:text-darkPink',
  };
  const sizeStyles = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'px-12 py-3',
  };

  const isDisabled = disabled || loading;

  const paddingClass = noPadding ? 'p-0' : sizeStyles[size];

  const content = children || (
    <>
      {loading && <span className="loader-spinner"></span>}
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <a
          className={`${baseStyles} ${variantStyles[variant]} ${paddingClass} ${className} ${
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
      className={`${baseStyles} ${variantStyles[variant]} ${paddingClass} ${className} ${
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
