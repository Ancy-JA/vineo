import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

interface SearchBarProps {
  onSearchChange: (debouncedTerm: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced function for calling onSearchChange in the parent
  const debouncedOnChange = useCallback(
    debounce((term: string) => onSearchChange(term), 500),
    [onSearchChange]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedOnChange(term); // Trigger debounced change
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="w-70 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
