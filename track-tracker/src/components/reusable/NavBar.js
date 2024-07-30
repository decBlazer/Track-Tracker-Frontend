import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Track Tracker</Logo>
      <NavMenu>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/featured">Featured</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/friends">Friends</StyledLink>
        </NavItem>
      </NavMenu>
      <AuthButtons>
        <StyledLink to="/signin">
          <SignInButton>Sign In</SignInButton>
        </StyledLink>
        <StyledLink to="/signup">
          <SignUpButton>Sign Up</SignUpButton>
        </StyledLink>
      </AuthButtons>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
 background: linear-gradient(to bottom, #A1A1A1, #484747);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Shadow effect */
  filter: brightness(1.1); /* Slight light effect */
  border-bottom: 2px solid #333; /* Bottom border */
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavItem = styled.li`
  cursor: pointer;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SignInButton = styled.button`
  background: none;
  border: none;
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

export default Navbar;