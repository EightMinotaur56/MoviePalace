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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

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

    const userExists = async ()=>{
      await fetch(`http://localhost:5000/users/email=${email}`).then(resp => {
        if(resp){
          adduser();
        }
      }).catch(e=>{
        console.log('Could not connect to server')
      });
    }

    const adduser = async ()=>{await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        firstname: name,lastName: surname,email: email,password: hashedPassword,is_admin:false
      })
    }).then(async resp =>{
        const result = await resp.json();
        await fetch("http://localhost:5000/object_role_users_cross",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            objectRoleId:{"$oid":"661fb0de051b8a304efd5786"},userId:{"$oid":result.insertedId}
          })
        }).then(resp=>resp.json());
        await fetch("http://localhost:5000/object_role_users_cross",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            objectRoleId:{"$oid":"661fb101051b8a304efd5789"},userId:{"$oid":result.insertedId}
            })
          }).then(resp=>resp.json());
      });
    }
    userExists();
    console.log('Name:',name);
    console.log('Password:', password);
    // Reset the form
    setName('');
    setPassword('');

    setShowSuccessPopup(true); // Set showSuccessPopup to true after successful registration
    setName('');
    setSurname('');
    setEmail('');
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
        <h1 className='H1'>MOVIE PALACE</h1>
        <h2 className='headerRegister'>Register  your account!</h2>
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
          {showSuccessPopup && ( // Render the pop-up if showSuccessPopup is true
          <div className="popup">
            <div className="popup-content">
              <button onClick={() => setShowSuccessPopup(false)}>Registration Successful!</button>
            </div>
          </div>
        )}
        </form>
        <div className="registerPageLink">
            <label>Already registered?</label>
          <Link to="/Login">Sign-in</Link> 
        </div>
        
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Register;
