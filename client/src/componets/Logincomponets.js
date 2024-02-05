// LoginComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { handlelogin } from './handleAPI/handleapis';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await handlelogin({ email, pass: password }); // Use 'pass' instead of 'password'
    console.log("handle result", result);

    // Check the result and navigate based on your logic
    if (result) {
      dispatch(loginUser({ email, password }));
      setEmail('');
      setPassword('');
      navigate('/primesport/productpagefirst');
    } else {
      // Handle login failure
      console.log('Login failed');
    }
  };

  return (
    <div className='main-login-a'>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login Here</h1>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate('/primesport/register')}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
