import React from 'react'

import { motion } from 'motion/react'
import schoolbook from "/src/assets/girl-7629838.avif"
import Footer from '../Components/Footer/Footer'

const StudentLogin = () => {
  return (
    <>
    <motion.div className="mx-auto flex flex-col md:flex-row justify-between  rounded-2xl w-full">

      <motion.div className='p-6'>

       <motion.h1   className="text-gray-600 text-center md:text-left mt-5 font-bold text-4xl mb-4 font-serif">Welcome to BrightOak Academy</motion.h1>
       <motion.p   className='md:text-start font-serif text-center'>Your learning starts here.</motion.p>

       <motion.h1
        className='md:text-start font-serif text-center text-xl mt-5 font-medium'>Log in to access your classes, assignments, and school updates.</motion.h1>

        <motion.p
        className='md:text-start font-serif text-center'>It's quick and easy  just enter your details below.</motion.p>

      </motion.div>

      {/* input details */}

      <motion.div
       className="flex items-center justify-between">
        <motion.form>
          

        </motion.form>
      </motion.div>




      <motion.div   className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
        <motion.img src={schoolbook} alt='school book'   className="w-full object-cover shadow-lg brightness-75  "/>
      </motion.div>
    </motion.div>

    <Footer/>
    </>
  )
}

export default StudentLogin
