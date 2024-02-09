import React from 'react';

import { useNavigation } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useNavigation();

  const handleLogin = () => {
    // Logic for authentication
    // For simplicity, let's just redirect to weather page
    // @ts-ignore
    history.push('/weather');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
