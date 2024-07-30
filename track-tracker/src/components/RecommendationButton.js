import React from 'react';
import styled from 'styled-components';

const RecommendationButton = () => {
  return (
    <ButtonContainer>
      <Button>B</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default RecommendationButton;