import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'; 

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  logic for handling the login submission
    console.log('Name:',name);
    console.log('Password:', password);
    // Reset the form
    setName('');
    setPassword('');
  };

  return (
    <div className="login-wrapper"> 
      <div className="login-page">
        <h2 className='header'>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='surname'>
            <label htmlFor="surname">surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={handleSurnameChange}
              required
            />
          </div>
          <div className='Email'>
            <label htmlFor="Email">email:</label>
            <input
              type="text"
              id="Email"
              value={email}
              onChange={handleEmailChange}
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
        <div className="registerPage">
            <label>Already registered?</label>
          <Link to="/Login">Login</Link> 
        </div>
      </div>
    </div>
  );
}

export default Register;
