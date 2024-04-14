import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  logic for handling the login submission
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-wrapper"> 
      <div className="login-page">
        <h2 className='headerlogin'>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className='username'>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className='password'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
          <button type="submit" className='button'>Login</button>
        </form>
        <div className="forgotten-password">
          <Link to="/forgot-password">Forgot password?</Link> 
        </div>
        <div className="registerPage">
            <label>New to our site?</label>
          <Link to="/Register">register</Link> 
        </div>
      </div>
    </div>
  );
}

export default Login;
