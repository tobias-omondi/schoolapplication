import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../Footer/Footer'

import schoolimage from '/src/assets/school-holidays-7321732_1280.jpg'

const ContactPage = () => {
  return (
    <>
    <div>
      <h1 className=" text-center text-6xl font-medium text-blue-600  font-['Nata sans'] mt-5" >CONTACT OUR <br/> SCHOOL</h1>

      <motion.p 
      className=" text-center w-1/2 mx-auto mt-5 font-['Fredoka'] text-gray-600 text-lg" >Have questions or need assistance? Our team is always ready to help. Reach out to us for admissions, inquiries, or support we’d love to hear from you.</motion.p>

      <motion.div className='flex flex-row md:flex-col lg:flex-row p-5 shadow px-3 mx-auto justify-center'>

        <form className='flex flex-col block'>
          <label for = "Fname" >Name:</label>
          <input type='text' id='name' name='Fname'  className='border rounded border-blue-500 focus'/>

          <label for = "Email" >Email:</label>
          <input type='email' id='email' name='email'  className='border rounded border-blue-500 focus'/>

          <label for = "Phone number" >Phone Number:</label>
          <input type='number' id='number' name='Phone Number'  className='border rounded border-blue-500 focus'/>


          <label for = "message" >How Can We Help You:</label>
          <textarea type='text' id='text' name='text'  className='border rounded border-blue-500 focus'/>
        </form>

        <motion.div>
          <img src={schoolimage} alt='schoolchildren'
          className='w-2/3' />
        </motion.div>
      </motion.div>
    </div>



    {/* footer section */}

    <div className='mt-5'>
    <Footer/>
    </div>
    </>
  )
}

export default ContactPage
