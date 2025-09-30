import React from 'react'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'

const OurStories = () => {
  return (
    <div>
      <motion.div
       initial={{ y: 10, scale: 1.1 }}
       animate={{ y: 0, scale: 1.0 }}
       transition={{ duration: 2 }}
      className='relative flex justify-center items-center mx-auto bg-blue-700 p-24'>
      </motion.div>

      {/* title of the page */}

      <div className='absolute top-48 left-10'>
      <h1 className='text-white text-4xl font-medium'>OUR STORIES</h1></div>

      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default OurStories
