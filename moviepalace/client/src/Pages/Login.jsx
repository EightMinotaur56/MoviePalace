import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; 
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  logic for handling the login submission
    console.log('email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className='headerTopLogin'>
    <Header />
    <div className="login-wrapper"> 
    <div className="right-sidebarLogin">
  <p className='firstp'>Login into your account</p>
  <h1 className='H1Login'>here!</h1>
  <p className='secondP'>So that you won't miss any of your favourite  movies and series.</p>
    </div>
<div className="login-page">
<h1 className='h1Login'>
  MOVIE PALACE
</h1>
  <h3 className='headerlogin'>Login into your account</h3>
  <form onSubmit={handleSubmit}>
    <div className='email'>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder='Enter your Email'
        value={email}
        onChange={handleEmailChange}
        required
        style={{ width: '300px', marginRight: '60px' }} 
      />
      <div class="underline"></div>
    </div>
    <div className='passwordLogin'>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder='Enter your password'
        value={password}
        onChange={handlePasswordChange}
        required
        style={{ width: '300px', marginRight: '60px' }} 
      />
      <div class="underline"></div>
    </div>
    
    <button type="submit" className='buttonLogin'>Login</button>
  </form>
  <div className="forgotten-password">
    <Link to="/forgotten-password">Forgot password?</Link> 
  </div>
  <div className="registerPage">
    <label>New to our site?</label>
    <Link to="/Register">register</Link> 
  </div>
 
</div>

<div className="footer-login">
        <Footer />
      </div>
    </div>
    </div>
    
  );
}

export default Login;
