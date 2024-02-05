// Register.js
// Register.js
import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { handleregister } from '../handleAPI/handleapis';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (emailError || password.length < 6 || password !== confirmPassword) {
      console.log('Invalid email or password');
      return;
    }

    try {
      const result = await handleregister({ name, email, password });

      if (!result) {
        navigate('/primesport/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='main-register-a'>
      <h2>Registration Form</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
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

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
