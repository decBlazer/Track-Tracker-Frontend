import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaUserCog } from 'react-icons/fa';
import SignInWithSpotify from '../authentication/SignInWithSpotify';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Nav>
      <LeftContainer>
        <Logo>Track Tracker</Logo>
      </LeftContainer>
      <CenterContainer>
        <IconContainer>
          <StyledLink to="/">
            <FaHome size={24} />
          </StyledLink>
        </IconContainer>
        <SearchContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <SearchInput type="text" placeholder="Search..." autoFocus />
          ) : (
            <SearchButton>
              <FaSearch size={20} />
            </SearchButton>
          )}
        </SearchContainer>
      </CenterContainer>
      <RightContainer>
        <SignInWithSpotify />
        <Spacer /> {/* Spacer for padding */}
        <IconContainer>
          <StyledLink to="/settings">
            <FaUserCog size={24} />
          </StyledLink>
        </IconContainer>
      </RightContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  background: linear-gradient(to bottom, #000000, #484747);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
  border-bottom: 2px solid #333;
  margin: 0;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const CenterContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Adds space between home and search */
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center; /* Ensures vertical alignment */
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const IconContainer = styled.div`
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ isHovered }) => (isHovered ? '200px' : '50px')};
  transition: width 0.8s ease; /* Increased delay */
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const Spacer = styled.div`
  width: 20px;
`;

export default NavBar;
