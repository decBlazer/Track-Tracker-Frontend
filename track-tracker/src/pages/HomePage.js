import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/reusable/NavBar';
import SearchBar from '../components/reusable/SearchBar';
import { useNavigate } from 'react-router-dom';
import SongCard from '../components/reusable/SongCard';
import axios from 'axios';

const HomePage = () => {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
        try {
            const response = await axios.get('https://localhost:8443/random-songs');
            setSongs(response.data.items);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch songs');
            setLoading(false);
        }
    };

    fetchSongs();
}, []);

    const navigate = useNavigate();
    const navigateToSearch = (query) => {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div style={{ height: '100%', margin: 0, padding: 0}}>
    <NavBar />
    <MainContainer>

      <WelcomeText>Welcome to Track Tracker!</WelcomeText>

      <SearchText>Search for any track, any track you want. (and review!)</SearchText>
      <SearchBar onSearch={navigateToSearch} />

      <SongsContainer>
      {songs.map((song, index) => (
                    <li key={index}>
                        {song.track.name} by {song.track.artists.map(artist => artist.name).join(', ')}
                    </li>
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
