import React from 'react'
import board from "/src/assets/test-4092022_1280.jpg"
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'

const AcademicResults = () => {
  return (
    <div>
      <motion.div
       initial={{ y: 10, scale: 1.1 }}
       animate={{ y: 0, scale: 1.0 }}
       transition={{ duration: 2 }}
        className='relative flex justify-center items-center mx-auto'>
      <img src= {board} alt='blackboard'  className='w-full h-[500px] object-cover mx-auto mt-4 p-3 rounded-2xl brightness-75' />
      </motion.div>

      {/* title of the page */}

      <div className='absolute z-50 top-6/7 right-4/5 transform translate-x-2/3 translate-y-1/2'>
      <h1 className='text-white text-3xl font-medium'>Academic Results</h1></div>

      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default AcademicResults
