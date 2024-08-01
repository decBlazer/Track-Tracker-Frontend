import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/reusable/NavBar';
import SearchBar from '../components/reusable/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');


    return (
        <div style={{ height: '100%', margin: 0, padding: 0}}>
        <NavBar />
        <MainContainer>
        <h1>Search Results for: {query}</h1>
        </MainContainer>
      </div>
      );
}


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #4a7c59, #1d402f);
  color: white;
    width: 100%;      
`;


export default SearchPage;