import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/reusable/NavBar';
import SearchBar from '../components/reusable/SearchBar';
import { useNavigate, Link } from 'react-router-dom';
import SongCard from '../components/reusable/SongCard';
import axios from 'axios';
import StarRating from '../components/reusable/StarRating';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://localhost:8443/random-songs');
        setSongs(response.data);
      } catch (err) {
        setError('Failed to fetch songs');
      }
    };

    fetchSongs();
  }, []);

    const navigate = useNavigate();
    const navigateToSearch = (query) => {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    const handleRate = async (songId, rating) => {
      try {
        const response = await fetch(`https://localhost:8443/song/${songId}/rate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rating }), // Send the rating in the request body
        });
    
        if (response.ok) {
          console.log('Rating submitted successfully');
          // Optionally, refetch or update the song data here
        } else {
          console.error('Error submitting rating');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    if (error) return <p>{error}</p>;

    return (
      <div style={{ height: '100%', margin: 0, padding: 0 }}>
        <NavBar />
        <MainContainer>
          <WelcomeText>Welcome to Track Tracker!</WelcomeText>
          <SearchText>Search for any track, any track you want. (and review!)</SearchText>
          <SearchBar onSearch={navigateToSearch} />
  
          <SongsContainer>
          {songs.map((song) => (
            <Link to={`/song/${song.id}`} key={song.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <SongCard song={song} onRate ={handleRate} />
            </Link>
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
  background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
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
