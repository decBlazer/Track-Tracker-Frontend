import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a track..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px 0 0 4px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #1db954;
  color: white;
  cursor: pointer;
`;

export default SearchBar;