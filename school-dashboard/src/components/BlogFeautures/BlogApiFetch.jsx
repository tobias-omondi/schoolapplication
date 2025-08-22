import React from 'react'
// import { IoIosCreate } from "react-icons/io";
import {motion} from 'framer-motion'

const BlogApiFetch = () => {
  return (
    <motion.div 
    className='w-2/3 '>

    <motion.h2
       initial = {{opacity: 0,  filter: "blur(10px)"}}
       whileInView={{opacity:1, y:-10, filter: "blur(0px)"}}
       transition={{delay: 0.8}}
       className='text-start p-5 text-xl text-gray-500 font-light'>
        Create a blog content</motion.h2>

        <motion.div className='bg-blue-400/10 backdrop-blur-md flex-col'>
          <motion.form>
            <motion.input placeholder='create a blog title' required
            />
            <motion.textarea placeholder='create a content' rows='5'/>
          </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default BlogApiFetch
