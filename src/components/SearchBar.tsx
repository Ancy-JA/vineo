// SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, placeholder }) => (
  <div className="mb-4">
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={onSearchChange}
      className="w-70 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SearchBar;
