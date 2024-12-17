import React from 'react';

interface LinkAtomProps {
  href: string; // Link destination
  children: React.ReactNode; // Content inside the link
  target?: '_blank' | '_self' | '_parent' | '_top'; // Optional: Opens link in a new tab, etc.
  rel?: string; // Optional: Security-related attribute for external links
  className?: string; // Optional: Allows passing custom styles
}

const Link: React.FC<LinkAtomProps> = ({
  href,
  children,
  target = '_self',
  rel,
  className = '',
}) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`hover:text-customPink font-semibold transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

export default Link;
