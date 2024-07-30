import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Track Tracker</Logo>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>Featured</NavItem>
        <NavItem>Friends</NavItem>
      </NavMenu>
      <AuthButtons>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </AuthButtons>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
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

export default Navbar;