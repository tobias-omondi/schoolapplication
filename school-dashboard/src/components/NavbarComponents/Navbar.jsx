// Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { IoIosLogOut, IoMdPerson,  IoMdHome, IoMdSettings, IoMdPeople, IoMdSchool, IoMdCreate, IoMdPaper} from "react-icons/io";

const Navbar = () => {
  
  const navLinks = [
    { id: 1, name: 'Overview', path: '/', icon: <IoMdHome size={20} /> },
    { id: 2, name: 'Admin', path: '/admin/users', icon: <IoMdSettings size={20} /> },
    { id: 3, name: 'Teachers', path: '/teachers', icon: <IoMdPeople size={20} /> },
    { id: 4, name: 'Students', path: '/students', icon: <IoMdSchool size={20} /> },
    { id: 5, name: 'Blog', path: '/admin/blogs', icon: <IoMdCreate size={20} /> },
    { id: 6, name: 'News', path: '/news', icon: <IoMdPaper size={20} /> },
    { id: 7, name: 'Profile', path: '/user/admin', icon: <IoMdPerson size={20} /> },
    { id: 8, name: 'Logout', path: '/logout/admin', icon: <IoIosLogOut size={20} /> },
  ];

  const navAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const linkAnimation = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
  };

  return (
    <motion.div
      className="sticky top-5 py-3 px-4 m-5 rounded-2xl shadow-lg backdrop-blur-md border max-w-5xl mx-auto z-30 bg-gradient-to-r from-blue-50/70 to-white/70 border-blue-200"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <nav>
        <motion.div
          className="flex justify-center space-x-6"
          initial="hidden"
          animate="visible"
          variants={navAnimation}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              variants={linkAnimation}
              className="group flex flex-col items-center"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center p-3 rounded-2xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                {link.icon}
                <span className="text-xs mt-1">{link.name}</span>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
