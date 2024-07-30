import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import RecommendationButton from '../components/RecommendationButton';

const HomePage = () => {
    console.log('HomePage rendered'); // Debugging output
  return (
    <div>
      <NavBar />
      <MainContainer>
        <WelcomeText>Welcome to Track Tracker!</WelcomeText>
        <SearchText>Search for any track, any track you want.</SearchText>
        <SearchBar />
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
  height: 100vh;
  background: linear-gradient(to bottom, #4a7c59, #1d402f);
  color: white;
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
