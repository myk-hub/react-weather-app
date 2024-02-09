import React, { useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleSignup = () => {
    // Perform client-side validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Redirect to home page after successful signup
    // @ts-ignore
    history.push('/home');
  };

  const validateEmail = (email: string): boolean => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
