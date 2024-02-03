// LoginComponent.js
import React, { useState } from 'react';
import { useDispatch  } from 'react-redux'; // Fix: Change UseSelector to useSelector
import { loginUser } from '../features/userSlice';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));

  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
