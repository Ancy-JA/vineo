import React from 'react';

interface HeadingProps {
  text: string; // The text of the heading
  level?: 'h1' | 'h2' | 'h3' | 'h4'; // Heading levels
  size?: 'small' | 'medium' | 'large' | 'xlarge'; // Font size variants
  align?: string; // Text alignment (supports responsive classes)
  bold?: boolean; // Bold text
  color?: string; // Custom text color
  className?: string; // Additional custom styles
}

const Heading: React.FC<HeadingProps> = ({
  text,
  level = 'h1', // Default heading level
  size = 'large', // Default size
  align = 'text-center', // Default alignment (responsive-friendly)
  bold = false, // Default weight
  color = 'text-customGray', // Default text color
  className = '', // Custom styles
}) => {
  const Tag = level; // Dynamically set the heading tag

  const sizeStyles = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl lg:text-5xl',
    xlarge: 'text-4xl md:text-5xl',
  };

  const weightStyles = bold ? 'font-bold' : 'font-normal';

  return (
    <Tag
      className={`${sizeStyles[size]} ${align} font-domine ${color} ${weightStyles} ${className}`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
