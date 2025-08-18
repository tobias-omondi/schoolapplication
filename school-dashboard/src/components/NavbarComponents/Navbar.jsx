import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";



const navLinks = [
  { id: 1, name: 'Overview', path: '/' },
  { id: 2, name: 'Admin', path: '/admin/users' },
  { id: 3, name: 'Teachers', path: '/teachers' },
  { id: 4, name: 'students', path: '/students' },
  { id: 5, name: 'Blog', path: '/blog' },
  { id: 6, name: 'News', path: '/news' },
  { id: 7, name: <IoMdPerson />, path: '/user/admin' },
  { id: 8, name: <MdOutlineDarkMode/>},
  { id: 9, name: <IoIosLogOut />, path: '/logout/admin' },
];

const navAnimation = {
  hidden: {opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren : 0.2, delayChildren: 0.1 
    }
  }
}

const linkAnimation = {
  hidden: { y:20, opacity: 0},
  visible: {
    y:0,
    opacity: 1,
    transition: {
      type : 'spring', stiffness: 100, damping: 10
    }
  }
}

const Navbar = () => {
  return (
    <motion.div
    className='sticky bg-white/20 py-10 px-3 mt-5 rounded shadow-2xl backdrop-blur-lg border border-blue-500/50 max-w-fit items-center mx-auto'>

      <nav>
        <motion.div  className='flex justify-center w-2/3 shadow-2xl text-white/55  text-center mx-auto space-x-14'
        initial="hidden"
        animate="visible"
        variants={navAnimation} 
        >
          {navLinks.map((link) =>(
            <motion.div  key={link.id}  variants={linkAnimation} className='flex flex-col space-y-2'>
            <NavLink to={link.path} 
            className="hover:text-white hover:delay-75 transition-colors duration-200">{link.name}</NavLink>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </motion.div>
  )
}

export default Navbar
