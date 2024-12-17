import React from 'react';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel'; // Input types
  placeholder?: string; // Placeholder text
  value?: string; // Input value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Custom classes for styling
  disabled?: boolean; // Disabled state
  name?: string; // Name attribute for input
  required?: boolean; // Mark as required
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
  name,
  required = false,
}) => {
  const baseStyles = `w-full border border-customGray rounded-3xl p-5 pr-20 bg-transparent outline-none text-xl md:text-2xl transition-colors duration-200`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${className}`}
      disabled={disabled}
      name={name}
      required={required}
    />
  );
};

export default InputField;
