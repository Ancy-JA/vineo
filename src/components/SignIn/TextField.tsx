import React from 'react';
import {TextFieldProps} from '@/components/Types';

export default function TextField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-gray-700">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border bg-gray-100/60 p-3 ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
}
