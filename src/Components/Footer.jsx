import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="container">
     <div className="branding">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="info-texts">
        <div className="left-info">
            <ul>
                <li>Now Showing</li>
                <li>Coming Soon</li>
                <li>Audio Description</li>
                <li>Ticket Purchase Policy</li>
            </ul>
        </div>
        <div className="middle-info">
            <ul>
            <li>Help Center</li>
            <li>Cookie Preference</li>
            <li>Gift Card</li>
            </ul>
        </div>
        <div className="right-info">
            <ul>
            <li>Media Creator</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            </ul>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
