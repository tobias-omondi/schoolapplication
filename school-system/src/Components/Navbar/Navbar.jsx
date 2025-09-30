'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import logo from '/src/assets/schoollogo.webp';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";

// Nav links
const navLinks = [
  { id: 1, name: 'Our School', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Education', path: '/education' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 4, name: 'News', path: '/news' },
  // { id: 6, name: 'School Life', path: '/school life' },
  { id: 5, name: 'Enquire Now', path: '/contact' },
];

const aboutDropLinks = [
  { id: 1, name: 'About', path: '/about' },
  // { id: 2, name: 'Our Stories', path: '/about/ourstories' },
  { id: 2, name: 'Alumni', path: '/about/alumni' },
  { id: 3, name: 'Academic Results', path: '/about/academic-results' },

];

const educationDropLinks = [
  { id: 1, name: 'Education', path: '/education' },
  // { id: 2, name: 'KinderGarten Education', path: '/education/kindergarten' },
  { id: 2, name: 'Pre-Primary Education', path: '/education/pre-primary' },
  { id: 3, name: 'Primary Education', path: '/education/Primary' },
  { id: 4, name: 'Junior Secondary Education', path: '/education/junior secondary' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop dropdown states
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isEducationDroplinksOpen, setEducationDroplinksOpen] = useState(false);

  // Mobile dropdown states
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isMobileEducationlinksOpen, setMobileEducationlinksOpen] = useState(false);

  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt="School Logo"
              className="md:w-30 w-13 md:h-16 h-10 object-contain rounded-lg bg-transparent"
            />
            <h1 className="text md:text-xl lg:text-3xl font-bold text-gray-800 tracking-tight ml-2">
              {"Academy".split("").map((char, i) => (
                <motion.span key={i} className='text-gray-600'>
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Desktop Links */}

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {


              //  ABOUT DROPDOWN 
              if (link.id === 2) {
                return (
                  <div
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    // onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}

                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        to={link.path}
                        className={`px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 ${
                          location.pathname === link.path ? 'text-blue-600 font-semibold' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                      {isAboutDropdownOpen ? <IoIosArrowUp className="text-gray-500" /> : <IoIosArrowDown className="text-gray-500" />}
                    </div>
                    {isAboutDropdownOpen && (
                      <motion.div
                        className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {aboutDropLinks.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.id}
                            to={dropdownLink.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              }

              //  EDUCATION DROPDOWN


              if (link.id === 3) {
                return (
                  <div
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => setEducationDroplinksOpen(true)}
                    onMouseLeave={() => setEducationDroplinksOpen(false)}
                    // onClick={() => setEducationDroplinksOpen(!isEducationDroplinksOpen)}

                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        to={link.path}
                        className={`px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 ${
                          location.pathname === link.path ? 'text-blue-600 font-semibold' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                      {isEducationDroplinksOpen ? <IoIosArrowUp className="text-gray-500" /> : <IoIosArrowDown className="text-gray-500" />}
                    </div>
                    {isEducationDroplinksOpen && (
                      <motion.div
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {educationDropLinks.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.id}
                            to={dropdownLink.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              }

              //  DEFAULT LINK 
              return (
                <div key={link.id} className="relative group">
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.div className="lg:hidden z-50" whileTap={{ scale: 0.95 }}>
            <button
              onClick={toggleMenu}
              className="p-2 text-2xl text-gray-700 focus:outline-none rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoClose /> : <HiOutlineMenu />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.5 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="lg:hidden bg-white border border-blue-500 overflow-hidden shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, scale: 1.01 }}
                className="px-6 py-3 space-y-2"
              >
                {navLinks.map((link) => {

                  // MOBILE ABOUT 
                  if (link.id === 2) {
                    return (
                      <div key={link.id}>
                        <div
                          className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={() => setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen)}
                        >
                          <span className="font-medium">{link.name}</span>
                          {isMobileAboutDropdownOpen ? <IoIosArrowUp className="text-gray-500" /> : <IoIosArrowDown className="text-gray-500" />}
                        </div>
                        {isMobileAboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-2"
                          >
                            {aboutDropLinks.map((dropdownLink) => (
                              <Link
                                key={dropdownLink.id}
                                to={dropdownLink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsMobileAboutDropdownOpen(false);
                                }}
                                className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {dropdownLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  }

                  // MOBILE EDUCATION 
                  if (link.id === 3) {
                    return (
                      <div key={link.id}>
                        <div
                          className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={() => setMobileEducationlinksOpen(!isMobileEducationlinksOpen)}
                        >
                          <span className="font-medium">{link.name}</span>
                          {isMobileEducationlinksOpen ? <IoIosArrowUp className="text-gray-500" /> : <IoIosArrowDown className="text-gray-500" />}
                        </div>
                        {isMobileEducationlinksOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-2"
                          >
                            {educationDropLinks.map((dropdownLink) => (
                              <Link
                                key={dropdownLink.id}
                                to={dropdownLink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileEducationlinksOpen(false);
                                }}
                                className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {dropdownLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  }

                  // DEFAULT MOBILE LINK
                  
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium ${
                          location.pathname === link.path ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
