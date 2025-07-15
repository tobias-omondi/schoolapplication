import React, {useState} from 'react';
import logo from "/src/assets/schoollogo.webp";
import { CiMenuFries } from "react-icons/ci";
import './Navbar.css';
import NavbarSocial from './NavbarSocial';

const Navbar = () => {

  // using usestate to create a toggle menu
  const [IsMenuOpen, setIsMenuOpen] = useState (false);

  const toggleMenu = () => setIsMenuOpen (!IsMenuOpen);

  return (
    <>
    <div className="Nav-bar-components">

      {/* Logo */}
      <div className="logo-top">
        <img src={logo} alt="School-Logo" />
      </div>

      {/* School Name */}
      <div className="school-name">
        <h1>
          BrightOak <br />
          <span className="px-15">Academy</span>
        </h1>
      </div>

      {/* Top Links */}
      <div className="top-links">
        <ul className="flex-row gap-20 hidden md:flex">
          <h1>OUR SCHOOL</h1>
          <h1>ABOUT US</h1>
        </ul>
      </div>
      

      {/* Menu */}
      <div className="menu-title-componets" onClick={toggleMenu}>
        <h1>MENU</h1>
        <div className='menu-nav-icon'><h1><CiMenuFries /></h1></div>
      </div>

      {/* choices for our menu links */}

          <div className={`dropdown-menu ${IsMenuOpen ? 'open' : 'closed'}`}>
           <ul>
             <li><a href="#home">HOME</a></li>
             <li><a href="#about">ABOUT</a></li>
             <li><a href="#portfolio">CHILD PORTFOLIO</a></li>
          </ul>
          </div>


    </div>
     <NavbarSocial title='FOLLOW US ON:' 
      contact_title = 'CONTACT' email_title='EMAIL'/>
    </>
  );
};

export default Navbar;
