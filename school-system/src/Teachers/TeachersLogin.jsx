import React from 'react'
import { motion} from 'framer-motion'

const TeachersLogin = () => {
  return (
    <motion.div className='flex justify-evenly mx-auto shadow-xl p-10 hover:shadow-blue-300 max-w-6xl mt-4 bg-white'
    initial = {{opacity: 0, y: 100}}
    whileInView={{opacity:1, y: 0}}
    transition={{duration: 0.8}}>

    <motion.div className='flex flex-col items-center'>
      <h1 className='text-gray-600 text-center mt-5 font-title text-3xl '>Teachers Panel</h1>

      <motion.div className='text-center py-1 max-w-2xl text-gray-500'>
      <p>Access the teacher’s dashboard by logging in with your credentials to manage classes, track student progress, and customize your educational tools.</p>
    </motion.div>

    <motion.div className='flex flex-col mt-10'>
      <form className='flex flex-col'>
        <label for = "Uname" className='text-gray-500'>USERNAME:</label>
        <input type='text' id='name'  className='border rounded border-blue-300'/>
        <label for = "Password" className='text-gray-500' >PASSWORD:</label>
        <input type='password' id='name' required  className='border rounded border-blue-300'/>
      </form>
    </motion.div>

    <motion.div className='mt-5'>
      <button className='bg-yellow-600 text-blue-950 py-3 px-10 cursor-pointer hover:text-white hover:bg-amber-500 rounded-xl'>LOGIN</button>
    </motion.div>

    </motion.div>
    </motion.div>
  )
}

export default TeachersLogin
