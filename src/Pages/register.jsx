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
    <div className="register-wrapper"> 
      <div className="register-page">
        <h2 className='headerRegister'>Register </h2>
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="Name"
              value={name}
              onChange={handleNameChange}
              required
              style={{ width: '300px', marginRight: '60px' }} 
            />
          </div>
          <div className='surname'>
            <label htmlFor="surname"> Surname : </label>
            <input 
              type="text"
              id="surname"
              value={surname}
              onChange={handleSurnameChange}
              required
              style={{ width: '300px', marginRight: '30px' }} 
            />
          </div>
          <div className='Email'>
            <label htmlFor="Email">Email : </label>
            <input
              type="text"
              id="Email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ width: '300px', marginRight: '20px' }} 
            />
          </div>
          <div className='register-password'>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ width: '300px', marginRight: '20px' }} 
            />
          </div>
          
          <button type="submit" className='button'>Register</button>
          <Link to="/" className='homeButton'>
           <button type="submit" className='home'>Home</button>
          </Link>
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
