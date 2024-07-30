import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
  background-color: white;
  cursor: pointer;
`;

export default SearchBar;