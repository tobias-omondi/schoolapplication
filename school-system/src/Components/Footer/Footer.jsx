import React from 'react'
import './Footer.css'

// import school logo 
import logopng from '/src/assets/schoollogo.webp'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container-level'>
      <div className='footer-container'>

        <div className='school-footerlogo-container'>
         <img src={logopng} alt='school-logo'/>

         {/* title and a description */}
         <h2 className="footer-title">BrightOak Academy</h2>
         <p className="footer-description">
            A forward-thinking school committed to nurturing creativity, leadership, and academic excellence in every learner.
         </p>
        </div>

        {/* web links column */}

        <div className='footer-web-column'>
          <h1>QUICK LINKS</h1>
          <div className='footer-web-links'>
            <ul>
              <li><a href='/'>HOME</a></li>
              <li><a href='/aboutus'>ABOUT US</a></li>
              <li><a href='/blog'>BLOG</a></li>
              <li><a href='/gallery'>GALLERY</a></li>
              <li><a href='/news&events'>NEWS & EVENTS</a></li>
              <li><a href='/child-portfolio'>CHILD PORTFOLIO</a></li>
            </ul>
          </div>
        </div>


        <div className='footer-facilities-column'>
          <h1>OUR FACILITIES</h1>
          <div className='footer-facilities-links'>
            <ul>
              <li><a href='/'>CONFERENCE</a></li>
              <li><a href='/aboutus'>LIBRARIES</a></li>
              <li><a href='/blog'>RESEARCH EQUIPMENT</a></li>
              <li><a href='/gallery'>SPORTS</a></li>
              <li><a href='/news&events'>IT SUPPORTS</a></li>
            </ul>
          </div>
        </div>


        <div className='footer-contact-column'>
          <h1>CONTACT US</h1>
          <div className='footer-contact-list'>
            <ul>
              <li><a href='/'>EMAIL</a></li>
              <li><a href='/aboutus'>LOCATION</a></li>
              <li><a href='/blog'>CONTACT US</a></li>
              <li><a href='/gallery'>SOCIAL LINKS</a></li>
              <div className='footer-social-links'>
                <ul>
                  <li><FaInstagram /></li>
                  <li><FaTwitter /></li>
                  <li><FaYoutube/></li>
                  <li><FaFacebook /></li>
                </ul>
              </div>
              <li><a href='/news&events'>SUBSCRIBE TO OUR NEWS</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-copyright">
       © {new Date().getFullYear()} BrightOak Academy. All rights reserved.
     </div>

    </div>
  )
}

export default Footer
