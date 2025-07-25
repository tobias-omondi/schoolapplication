'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import logo from '/src/assets/schoollogo.webp';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About Us', path: '/aboutus' },
  { id: 3, name: 'Class Profile', path: '/classprofile' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Portfolio', path: '/portfolio' },
  { id: 6, name: 'Contact', path: '/contact' },
  { id: 7, name: 'Login', path: '/login' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logo} 
              alt="School Logo" 
              className="w-12 h-12 object-contain rounded-lg" 
            />
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
               BrightOak{" "}
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
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <Link
                  to={link.path}
                  className={`px-1 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 ${
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
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden z-50"
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
              className="md:hidden bg-white overflow-hidden shadow-lg"
            >
              <div className="px-6 py-3 space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        location.pathname === link.path
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;