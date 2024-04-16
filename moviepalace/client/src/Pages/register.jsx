import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'; 
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { sha256 } from 'js-sha256';

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

    const hashedPassword = sha256(password);

    const adduser = async ()=>{await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        firstname: name,lastName: surname,email: email,password: hashedPassword,is_admin:false
      })
    }).then(resp => resp.json());
  }
  adduser();
    console.log('Name:',name);
    console.log('Password:', password);
    // Reset the form
    setName('');
    setPassword('');
  };

  return (
    <div className='headerTopRegister'>
    <Header />
    <div className="register-wrapper"> 
    <div className="right-sidebar">
  <p className='firstp'>Have your account</p>
  <h1>with us</h1>
  <p className='secondP'>So you won't miss any of your favourite  movies and series.</p>
 
</div>
    
      <div className="register-page">
      
      <h1 className='H1'>
  MOVIE PALACE
</h1>
        <h2 className='headerRegister'>Register  your account! </h2>
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter your username"
              value={name}
              onChange={handleNameChange}
              required
              style={{ width: '300px', marginRight: '60px' }} 
            />
            <div className="underline"></div>
          </div>
          <div className='surname'>
            <label htmlFor="surname"> Surname : </label>
            <input 
              type="text"
              id="surname"
              placeholder="Enter your surname"
              value={surname}
              onChange={handleSurnameChange}
              required
              style={{ width: '300px', marginRight: '30px' }} 
            />
            <div className="underline"></div>
          </div>
          <div className='Email'>
            <label htmlFor="Email">Email : </label>
            <input
              type="text"
              id="Email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ width: '300px', marginRight: '20px' }} 

            />
             <div className="underline"></div>
          </div>
          <div className='register-password'>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your password'
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ width: '300px', marginRight: '20px' }} 
            />
             <div className="underline"></div>
          </div>
          
          <button type="submit" className='buttonRegister'>Register</button>
        </form>
        <div className="registerPageLink">
            <label>Already registered?</label>
          <Link to="/Login">Sign-in</Link> 
        </div>
        
      </div>
      <div className="footer-register">
        <Footer />
      </div>
    </div>
    </div>
  
  );
}

export default Register;
