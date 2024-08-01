import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/reusable/NavBar';
import SearchBar from '../components/reusable/SearchBar';
import { useNavigate } from 'react-router-dom';
import SongCard from '../components/reusable/SongCard';

const HomePage = () => {

    const navigate = useNavigate();

    const navigateToSearch = (query) => {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    const songs = [
      {
          artwork: 'https://i.scdn.co/image/ab67616d00001e02b3c1d5eacb5a6762c3d236b8',
          name: 'Song Name 1',
          artist: 'Artist Name 1',
      },
      {
          artwork: 'https://i.scdn.co/image/ab67616d00001e02b3c1d5eacb5a6762c3d236b8',
          name: 'Song Name 2',
          artist: 'Artist Name 2',
      },
      {
          artwork: 'https://i.scdn.co/image/ab67616d00001e02b3c1d5eacb5a6762c3d236b8',
          name: 'Song Name 3',
          artist: 'Artist Name 3',
      },
  ];


  return (
    <div style={{ height: '100%', margin: 0, padding: 0}}>
    <NavBar />
    <MainContainer>

      <WelcomeText>Welcome to Track Tracker!</WelcomeText>

      <SearchText>Search for any track, any track you want. (and review!)</SearchText>
      <SearchBar onSearch={navigateToSearch} />

      <SongsContainer>
      {songs.map((song, index) => (
                        <SongCard key={index} song={song} />
                    ))}
      </SongsContainer>

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


const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 2rem;
`;

export default HomePage;
