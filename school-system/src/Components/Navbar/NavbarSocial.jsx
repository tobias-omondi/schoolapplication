import React from 'react'
import './Navbar.css'

// socialmedia icons
import { FaSquareInstagram, FaSquareYoutube, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavbarSocial = ({title, contact_title, email_title}) => {
  return (

    <div className='Navbar-Social-Components'>


      <div className='Navbar-Social-Title'>
        <h3>{title}</h3>

        <div className='flex flex-row gap-6'>

        <div className='Social-Media-Icons'>
          <FaSquareInstagram />
        </div>
        <div className='Social-Media-Icons'>
          <FaFacebookSquare />
        </div>
        <div className='Social-Media-Icons'>
          <FaSquareYoutube />
        </div>
        <div className='Social-Media-Icons'>
          <FaLinkedin />
        </div>
        <div className='Social-Media-Icons'>
          <FaSquareXTwitter/>
        </div>
      </div>
      </div>

      <div className='Navbar-Contact'>
        <h3>{contact_title}</h3>
        <p>+254 756 798 298</p>
        {/* <p>+254 756 798 298</p> */}
      </div>

      <div className='Navbar-Email'>
        <h3>{email_title}</h3>
        <p>brightoakacademy@gmail.com</p>

      </div>

    </div>
  )
}

export default NavbarSocial
