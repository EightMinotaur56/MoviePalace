
import './onClick.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import witches from '../images/witches.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OnClick = () => {


  return (
    <div className='onclick'>
      <Header />
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
        <div className="cover">

        </div>
      <div className="info">
        <div className="title">
        <h2>OC Brazil</h2>
        <i class="fa-regular fa-clock"></i>
        <span>1HR 45MIN</span>
        </div>
        <div className="des">The film centres on Sam Lowry, a low-ranking bureaucrat trying to find a woman who appears in his dreams
while he is working in a mind-numbing job and living in a small apartment, set in a dystopian world
in which there is an over-reliance on poorly maintained (and rather whimsical) machines.</div>
      </div>
    
      <div className="progress-bar">
        
        <div className="first">
          <span>1</span>
          <p>Select Movie</p>
        </div>
        
        <div className="second">
          <span>2</span>
          <p>Confirmation</p>
        </div>
        
        <div className="third">
          <span>3</span>
          <p>Reserve / Buy</p>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-cover">
          <img src={witches} alt="" />
        </div>
        <div className="movie-info-title">
          OC Brazil - Part2
          <div className="genre">
          <i class="fa-solid fa-film"></i>
          <span>Fantasy / Sci-fi</span>
          </div>
          <span>IMAX 2D</span>
          <div className="time1">
          <div className="time11">
            <span>13:00</span>
          </div>
          <div className="time2">
            <span>20:00</span>
          </div>
          </div>
        </div>
      <div className="proceed">
      <button onClick={() => window.location.href = '/confirmation'}>continue</button>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default OnClick