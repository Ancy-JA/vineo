import React from 'react';

interface LoadingButtonProps {
  isLoading: boolean;
  text: string;
  loadingText: string;
  [key: string]: any;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, text, loadingText, ...props }) => (
  
  <button
    disabled={isLoading}
    className={`w-full rounded-lg bg-[#F78A79] px-4 py-3 font-bold text-white hover:bg-[#F66F65] focus:outline-none focus:ring-2 focus:ring-[#F78A79] ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
    {...props}
  >
    {isLoading ? loadingText : text}
  </button>
);

export default LoadingButton;
