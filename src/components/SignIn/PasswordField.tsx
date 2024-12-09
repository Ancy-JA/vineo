import React from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { PasswordFieldProps } from '@/components/Types';

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  showPassword,
  setShowPassword,
  error = false,
  helperText,
}) => {
  return (
    <div>
      <label htmlFor={id} className="mt-12 mb-2 block text-[#394A59]">
        {label}
      </label>
      <div className="relative mb-1 shadow-all-sides-xl">
        <input
          id={id}
          name={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full border bg-gray-100/60 p-4 ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
      </div>
      {/* Display helper text if provided */}
      {helperText && <p className={`mt-1 text-md ${error ? 'text-red-500' : 'text-gray-500'}`}>{helperText}</p>}
    </div>
  );
};

export default PasswordField;
