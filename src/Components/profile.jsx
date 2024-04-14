import React, { useState } from 'react';
import './profile.css'
import { Link } from 'react-router-dom';
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  return (
    <div className="dropdown">
      <div className="user-icon" onClick={toggleDropdown}>
        {/* Render your user icon here */}
        <i className="fa-solid fa-user"></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown content here */}
          <ul>
          <li><Link to="/login" onClick={handleLogin} style={{ fontWeight: 'bold',fontSize: '16px' }}>Login</Link></li>
            <li><Link to="/Register" onClick={handleRegister} style={{ fontWeight: 'bold' ,fontSize: '16px'}}>Register</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
