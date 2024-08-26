import React from 'react';
import styled from 'styled-components';

function SignUpPage() {
  const handleSignInWithSpotify = () => {
    window.location.href = "https://localhost:8443/login/oauth2/code/spotify";;
  };

  return (
    <MainContainer>
      <h1>Sign Up</h1>
      <Button onClick={handleSignInWithSpotify}>Sign Up with Spotify</Button>
    </MainContainer>
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

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1ed760;
  }
`;

export default SignUpPage;