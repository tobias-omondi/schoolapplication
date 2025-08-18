import React from 'react'
import {motion} from 'framer-motion'


const navLinks = [
  { id: 1, name: 'Overview', path: '/' },
  { id: 2, name: 'Admin', path: '/admin/users' },
  { id: 3, name: 'Teachers', path: '/teachers' },
  { id: 4, name: 'students', path: '/students' },
  { id: 5, name: 'Blog', path: '/blog' },
  { id: 6, name: 'News', path: '/news' },
  { id: 7, name: 'login', path: '/login/admin' },
  { id: 8, name: 'logout', path: '/logout/admin' },
];

const Navbar = () => {
  return (
    <div>
      <nav>
        <motion.div>

        </motion.div>
      </nav>
    </div>
  )
}

export default Navbar
