import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Search.scss';

interface SearchProps {
  onInputChange: () => void; 
  handleInputClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (query: string) => void; 
}

const Search: React.FC<SearchProps> = ({ onInputChange, handleInputClick, inputRef, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onInputChange(); 
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
        ref={inputRef}
      />
      <button onClick={handleSearchClick}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
