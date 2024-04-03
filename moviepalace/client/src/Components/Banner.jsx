import React from 'react'
import './Banner.css'
import banner from '../images/banner.jpg'
import gradient from '../images/gradient.png'
const Banner = () => {
  return (
    <>
     
      <div className="backgroundImg">
        <h1>Stranger Things</h1>
        <p>Set in the 1980s, the series centers around the residents of the fictional
small town of Hawkins, Indiana,<br/> as they are plagued by a hostile alternate dimension
known as the Upside Down, after a nearby human experimentation<br/> facility opens a gateway
between Earth and the Upside Down</p>
<div className="btn-banner">
          <button className='btn-buy'>Buy Ticket</button>
          <button className='btn-info'>More Info
          <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <img className='gradient' src={gradient} alt="" />
        <img src={banner} alt="" style={{ width: '100%', height: '710px' }} />
       
      </div>
    </>
  );
};

export default Banner
