import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ProfileDropdown from './profile'


const Header = (props) => {
  const handleChange = event =>{
    props.onChange(event.target.value);
  }
  return (
    
    <>
    <div className='header'>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <script
          src='https://kit.fontawesome.com/2d95ff6af1.js'
          crossOrigin='anonymous'
        ></script>
        <div className='logo'>
          <i className='fa-solid fa-film'></i>
          MOVIEPALACE
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>TV Shows</li>
            <li>Movies</li>
          </ul>
        </nav>
        <div className='search-box'>
          <input
            type='text'
            placeholder='Type to search...'
            onChange={handleChange}
          />
        </div>
        <ProfileDropdown/>
      </div></>
  )
}

export default Header
