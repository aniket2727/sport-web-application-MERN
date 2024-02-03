// LoginComponent.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState(''); // Assuming you have an input field or logic to get the token
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Assuming email and token are obtained from form or input fields
    dispatch(loginUser({ email, token }));
    console.log('login is called');
  };

  return (
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {/* Include an input for token */}
      <label>Token:</label>
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
