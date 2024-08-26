import React from 'react';
import styled from 'styled-components';

const SongCard = ({ song }) => {
  return (
    <Card>
      <Artwork src={song.artwork} alt={`${song.name} artwork`} />
      <Details>
        <SongName>{song.name}</SongName>
        <ArtistName>{song.artist}</ArtistName>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px; 
  width: 300px; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
  margin: 16px; 
`;

const Artwork = styled.img`
  width: 100%;
  height: auto; 
  border-radius: 8px;
`;

const Details = styled.div`
  text-align: center;
  margin-top: 12px; 
`;

const SongName = styled.h2`
  font-size: 24px; 
  margin: 12px 0; 
`;

const ArtistName = styled.p`
  font-size: 18px; 
  color: #666;
`;

export default SongCard;
