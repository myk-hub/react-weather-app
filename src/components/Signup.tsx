import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 10vw;
`;

type IProps = {
  email: string;
  setEmail: (email: string) => void;
};

const Signup = ({ email, setEmail }: IProps) => {
  const navigate = useNavigate();

  const handleSignup = React.useCallback(() => {
    // Perform client-side validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Redirect to home page after successful signup
    navigate('/');
  }, [email]);

  const validateEmail = React.useCallback((email: string): boolean => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, [email]);

  return (
    <SignupForm>
      <Stack spacing={3} direction="column">
        <Typography>{'Please proide your email to continue'}</Typography>
        <TextField 
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)} 
        />
        <Button 
          value={email}
          onClick={handleSignup}
          variant="contained"
        >
          {'SignUp'}
        </Button>
      </Stack>
    </SignupForm>
  );
};

export default Signup;
