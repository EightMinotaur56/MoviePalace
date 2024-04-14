import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotten-password.css'; 

function ForgotPass() {
 
  const [email, setEmail] = useState('');
 

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    //  logic for handling the login submission
    console.log('Email:',email);
    // Reset the form
    setEmail('');
  };

  return (
    <div className="forgot-wrapper"> 
      <div className="forgot-page">
        <h2 className='headerForgot'>ForgotPassword </h2>
        <form onSubmit={handleSubmit}>
          <div className='ForgotEmail'>
            <label htmlFor="Email">Email : </label>
            <input
              type="text"
              id="Email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ width: '300px', marginRight: '20px',height:'35px',marginBottom:'20px' }} 
            />
          </div>
          
          <button type="submit" className='Forgotbutton'>Submit</button>
          <Link to="/" className='homeButton'>
           <button type="submit" className='home'>Home</button>
          </Link>
        </form>
        <div className="forgotPage">
            <label>Already registered?</label>
          <Link to="/Login">Login</Link> 
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
