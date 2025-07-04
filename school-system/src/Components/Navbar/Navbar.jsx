import React from 'react';
import logo from "/src/assets/schoollogo.webp";
import { TfiMenuAlt } from "react-icons/tfi";
import './Navbar.css';
import NavbarSocial from './NavbarSocial';

const Navbar = () => {
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
        <ul className="flex flex-row gap-20">
          <h1>OUR SCHOOL</h1>
          <h1>ABOUT US</h1>
        </ul>
      </div>

      {/* Menu */}
      <div className="menu-title-componets">
        <h1>MENU</h1>
        <h1><TfiMenuAlt /></h1>
      </div>

    </div>
     <NavbarSocial title='FOLLOW US ON:' 
      contact_title = 'CONTACT' email_title='EMAIL'/>
    </>
  );
};

export default Navbar;
