import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/reusable/NavBar';
import SearchBar from '../components/reusable/SearchBar';
import RecommendationButton from '../components/reusable/RecommendationButton';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search');
    };

  return (
    <div style={{ height: '100%', margin: 0, padding: 0}}>
    <NavBar />
    <MainContainer>
      <WelcomeText>Welcome to Track Tracker!</WelcomeText>
      <SearchText>Search for any track, any track you want. (and review!)</SearchText>
      <SearchBar onSearch={navigateToSearch} />
      <RecommendationText>Or look for recommendations!</RecommendationText>
      <RecommendationButton />
    </MainContainer>
  </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #075E6D, #1A1919);
  color: white;
    width: 100%;      
`;

const WelcomeText = styled.h1`
  margin-top: 2rem;
`;

const SearchText = styled.h2`
  margin-top: 1rem;
`;

const RecommendationText = styled.h3`
  margin-top: 2rem;
`;

export default HomePage;
