import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/reusable/NavBar';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Navigate to another page on successful sign in
    navigate('/');
  };

  return (
    <div style={{ height: '100%', margin: 0, padding: 0 }}>
      <NavBar />
      <MainContainer>
        <h1>Sign In</h1>
        <Form onSubmit={handleSignIn}>
          <Label>
            Username:
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Button type="submit">Sign In</Button>
        </Form>
      </MainContainer>
    </div>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #6b8e23;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #556b2f;
  }
`;

export default SignInPage;