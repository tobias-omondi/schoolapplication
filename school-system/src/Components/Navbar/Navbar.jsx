'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import logo from '/src/assets/schoollogo.webp';
import { Link, useLocation } from 'react-router-dom';
import { IoIosLogIn, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/aboutus' },
  { id: 3, name: 'Class Profile', path: '/classprofile' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Portfolio', path: '/portfolio' },
  { id: 6, name: 'Contact', path: '/contact' },
  { id: 7, name: <IoIosLogIn />, path: '/login' },
];

const portfolioDropdownLinks = [
  { id: 1, name: 'Student Portfolio', path: '/portfolio/student', icon: <FaUserGraduate className="text-blue-500" /> },
  { id: 2, name: 'Teacher Dashboard', path: '/portfolio/teacher', icon: <FaChalkboardTeacher className="text-blue-500" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [isMobilePortfolioDropdownOpen, setIsMobilePortfolioDropdownOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="w-full backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-gray-100 ">

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
              className="md:w-30 w-13 md:h-15 h-10 object-contain rounded-lg" 
            />
            
            <h1 className="text md:text-xl font-bold text-gray-800 tracking-tight ml-2">
              {"Academy".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>




          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.id === 5) { // Portfolio link
                return (
                  <div 
                    key={link.id} 
                    className="relative group"
                    onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
                    onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
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
                      {isPortfolioDropdownOpen ? 
                        <IoIosArrowUp className="text-gray-500" /> : 
                        <IoIosArrowDown className="text-gray-500" />}
                    </div>
                    
                    {isPortfolioDropdownOpen && (
                      <motion.div 
                        className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {portfolioDropdownLinks.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.id}
                            to={dropdownLink.path}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <span className="text-lg">{dropdownLink.icon}</span>
                            <span className="font-medium">{dropdownLink.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              }
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
          <motion.div 
            className="lg:hidden z-50"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 text-2xl text-gray-700 focus:outline-none rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white overflow-hidden shadow-lg"
            >
              <div className="px-6 py-3 space-y-2">
                {navLinks.map((link) => {
                  if (link.id === 5) { // Portfolio link
                    return (
                      <div key={link.id}>
                        <div 
                          className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={() => setIsMobilePortfolioDropdownOpen(!isMobilePortfolioDropdownOpen)}
                        >
                          <span className="font-medium">{link.name}</span>
                          {isMobilePortfolioDropdownOpen ? 
                            <IoIosArrowUp className="text-gray-500" /> : 
                            <IoIosArrowDown className="text-gray-500" />}
                        </div>
                        
                        {isMobilePortfolioDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-2"
                          >
                            {portfolioDropdownLinks.map((dropdownLink) => (
                              <Link
                                key={dropdownLink.id}
                                to={dropdownLink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsMobilePortfolioDropdownOpen(false);
                                }}
                                className="flex items-center gap-3 py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                <span className="text-lg">{dropdownLink.icon}</span>
                                <span>{dropdownLink.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  }
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
                          location.pathname === link.path
                            ? 'bg-blue-50 text-blue-600'
                            : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;