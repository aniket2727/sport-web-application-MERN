// LoginComponent.js
import React, { useState } from 'react';
import { useDispatch  } from 'react-redux'; // Fix: Change UseSelector to useSelector
import { loginUser } from '../features/userSlice';
import './login.css'
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
  const navigte=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('')
    setPassword('')

    navigte('/primesport/productpagefirst')

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
        <button type="submit">Craete Account</button>
      </form>
    </div>
  );
};

export default LoginComponent;
