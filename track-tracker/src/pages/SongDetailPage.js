import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import NavBar from '../components/reusable/NavBar';

const SongDetailPage = () => {
  const { songId } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchSongDetails = async () => {
        try {
            const response = await axios.get(`https://localhost:8443/song/${songId}`);
            setSong(response.data);
          } catch (err) {
            setError('Failed to fetch song details');
          } finally {
            setLoading(false);
          }
    };

    fetchSongDetails();
  }, [songId]);

  return (
    <div style={{ height: '100%', margin: 0, padding: 0 }}>
      <NavBar />
      <Container>
        {loading ? (
          <LoadingText>Loading...</LoadingText>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : song ? (
          <>
            {song.artwork ? (
              <AlbumArt src={song.artwork} alt={`${song.name} artwork`} />
            ) : (
              <NoImageText>No album artwork available</NoImageText>
            )}
            <SongInfo>
              <Title>{song.name || 'Unknown Title'}</Title>
              <Artist>{song.artist || 'Unknown Artist'}</Artist>
              <Album>{song.album || 'Unknown Album'}</Album>
              <Popularity>Popularity: {song.popularity.toFixed(1)}/100</Popularity>
            </SongInfo>
          </>
        ) : (
          <ErrorText>No song data available</ErrorText>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #075E6D, #1A1919);
  color: white;
  min-height: 100vh;
`;

const AlbumArt = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SongInfo = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Artist = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Album = styled.h3`
  font-size: 1.2rem;
  color: #ccc;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #ddd;
`;

const LoadingText = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1.2rem;
`;

const NoImageText = styled.p`
  color: #ccc;
  font-size: 1rem;
`;

const Popularity = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #ddd;
  text-align: center;
`;

export default SongDetailPage;
