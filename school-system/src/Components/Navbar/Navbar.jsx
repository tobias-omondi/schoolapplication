import React from 'react';
import logo from "/src/assets/schoollogo.webp"
// import { Link } from "react-router-dom";

// react-icons
import { TfiMenuAlt } from "react-icons/tfi";

// import css
import './Navbar.css'

const Navbar = () => {
  return (

    // Parent Div
    <div className='Nav-bar-components'>  
      <div className='logo-top'>
        <img src={logo} alt='School-Logo' />
      </div>

      {/* Name of the school title */}
      <div className='school-name'>
        <h1>BrightOak <br/> <span className='px-15'>Academy</span></h1>
      </div>

      {/* links to navbar sytems */}

      <div className='top-links'>
        <ul className='flex flex-row  gap-20'>
          <h1>OUR SCHOOL</h1>
          <h1>ABOUT US</h1>
        </ul>
      </div>

      {/* menu icon */}
      <div className='menu-title-componets'>
        <h1 >MENU</h1>
        <h1>  <TfiMenuAlt /></h1>
      </div>
    </div>
  )
}

export default Navbar;
