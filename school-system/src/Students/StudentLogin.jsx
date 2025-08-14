import React from 'react'

import { motion } from 'motion/react'
import schoolbook from "/src/assets/girl-7629838.avif"
import Footer from '../Components/Footer/Footer'

const StudentLogin = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const hoverEffect = {
    scale: 1.03,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }

  const tapEffect = {
    scale: 0.98,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }

  const inputFocusEffect = {
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.2 }
  }

  return (
    <>
    <motion.div className="mx-auto flex flex-col md:flex-row justify-between  rounded-2xl w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>

      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-8"
        variants={containerVariants}>

      <motion.div className='p-6'>

       <motion.h1   className="text-gray-600 text-center md:text-left mt-5 font-bold text-4xl mb-4 font-serif"  variants={itemVariants}
       >Welcome to <span className='text-blue-500' 
       animate={{ 
         color: ["#3b82f6", "#1d4ed8", "#3b82f6"],
       }}
       transition={{
         duration: 4,
         repeat: Infinity,
         ease: "easeInOut"
       }}>BrightOak Academy</span></motion.h1>


       <motion.p 
       className='md:text-start font-serif text-center'
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.4 }}
       variants={itemVariants}>Your learning starts here.</motion.p>

       <motion.h1
        className='md:text-start font-serif text-center text-xl mt-5 font-medium' 
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.4 }}
        variants={itemVariants}
        >Log in to access your classes, assignments, and school updates.</motion.h1>

        <motion.p
        className='md:text-start font-serif text-center'
        variants={itemVariants}>
          It's quick and easy  just enter your details below.</motion.p>

      </motion.div>

      {/* input details */}

          <motion.div 
                  className="w-full  max-w-md p-6"
                  variants={containerVariants}
                >
                  <motion.form 
                    className="flex flex-col space-y-6"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants}>
                      <label htmlFor="Uname" className="block text-gray-700 font-medium mb-2 font-serif">
                        Username & Student ID
                      </label>
                      <motion.input 
                        type="text" 
                        id="Uname"  
                        className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                        placeholder="Enter your username & Student ID" 
                        whileFocus={inputFocusEffect}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="Password" className="block text-gray-700 font-medium mb-2 font-serif">
                        Password
                      </label>
                      <motion.input 
                        type="password" 
                        id="Password" 
                        required  
                        className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                        placeholder="Enter your password"
                        whileFocus={inputFocusEffect}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-between"
                      variants={itemVariants}
                    >
                      <div className="flex items-center">
                        <motion.input 
                          type="checkbox" 
                          id="remember" 
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 font-serif">
                          Remember me
                        </label>
                      </div>
                      
                      <motion.a 
                        href="#" 
                        className="text-sm text-blue-600 hover:text-blue-800 font-serif"
                        whileHover={{ 
                          scale: 1.05,
                          textDecoration: "underline"
                        }}
                      >
                        Forgot password?
                      </motion.a>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-2"
                      variants={itemVariants}
                      whileHover={hoverEffect}
                      whileTap={tapEffect}
                    >
                      <motion.button 
                        type="submit" 
                        className="w-1/2 bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 shadow-md cursor-pointer font-serif"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          y: [10, 0],
                        }}
                        transition={{ 
                          delay: 0.8,
                          y: { 
                            type: "spring", 
                            stiffness: 300 
                          }
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{
                          scale: 0.98,
                          boxShadow: "0 2px 5px rgba(59, 130, 246, 0.2)"
                        }}
                      >
                        LOGIN
                      </motion.button>

                      <motion.p className=' mt-10'
                         variants={itemVariants}>
                        Need Help?  <span className='text-blue-600 font-sans text-base'>Contact school for support!</span>
                      </motion.p>
                    </motion.div>
                  </motion.form>
                </motion.div>
              </motion.div>
      



      <motion.div   className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,  scale: 1,
           transition: {  delay: 0.7, type: "spring", stiffness: 1000, damping: 10}
          }}>
        <motion.img src={schoolbook} alt='school book'   className="w-full object-cover shadow-lg brightness-75  "
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { 
              delay: 0.4,
              type: "spring",
              stiffness: 60,
              damping: 10
            }
          }}/>
      </motion.div>
    </motion.div>
  

    <Footer/>
    </>
  )
}

export default StudentLogin
