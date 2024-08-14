import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Nav>
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
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
 background: linear-gradient(to bottom, #000000, #484747);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Shadow effect */
  filter: brightness(1.1); /* Slight light effect */
  border-bottom: 2px solid #333; /* Bottom border */
`;

const IconContainer = styled.div`
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: white;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
`;

const SignInButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
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
  transition: width 0.3s ease;
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

export default NavBar;