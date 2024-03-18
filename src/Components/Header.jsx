import React from 'react'
import './Header.css'
const Header = () => {
  return (
    
    <>
    <div className='header'>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <script
          src='https://kit.fontawesome.com/2d95ff6af1.js'
          crossorigin='anonymous'
        ></script>
        <div className='logo'>
          <i className='fa-solid fa-film'></i>
          MOVIEPALACE
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
          </ul>
        </nav>
        <div className='search-box'>
          <input
            type='text'
            placeholder='Type to search...'
            
          />
        </div>
        <div className='user-icon'>
          <i className='fa-solid fa-user'></i>
        </div>
      </div></>
  )
}

export default Header
