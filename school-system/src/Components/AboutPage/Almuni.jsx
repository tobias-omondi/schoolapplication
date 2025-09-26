import React from 'react'
import board from "/src/assets/almunistudents.jpg"
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'
import childone from '/src/assets/studentalumni.jpg'
import childtwo from '/src/assets/student-7468801_1280.jpg'
import childthree from '/src/assets/student-7468798_1280.jpg'


const alumniImages = [
  {id: 1, image: childone, name: "Mike Mutsiya", occupation: "software developer"},
  {id: 1, image: childtwo, name: "Charline Mugo", occupation: "managing farming and Poultry"},
  {id: 1, image: childthree, name: "Morgan Olivia", occupation: "Teacher at international school"}
]

const Alumni = () => {
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

      <div className='absolute z-50 top-6/7 right-4/5 transform translate-x-1/2 translate-y-1/2'>
      <h1 className='text-white text-4xl font-medium'>Alumni</h1></div>

      {/* Alumni title & description */}

      <div className='mt-5'>
        <h1 className="text-end px-6 text-blue-400 text-4xl font-medium underline underline-offset-2  font-['Nata sans']" > Celebrating Our Alumni</h1>

        <p  className="mt-4 text-lg leading-relaxed font-light text-gray-800 px-3 py-2">  
             At BrightOak Academy, our alumni are the living proof of our mission leaders, creators, and
             changemakers making a difference in the world. From classrooms to careers, their journeys
             inspire the next generation to dream bigger and achieve more.  
             <br />
             This page is dedicated to honoring their achievements, sharing their stories, and keeping the
             BrightOak spirit alive wherever life takes them. Once a BrightOak student, always a part of our
             family.</p>
      </div>

      {/* our success stories */}

      <div className='mt-5'>
        <h1 className="text-start px-3 text-blue-400 text-4xl font-medium underline underline-offset-2  font-['Nata sans']" >Our Success Stories</h1>
        <p  className="mt-4 text-lg leading-relaxed font-light text-gray-800 px-3 py-2">
          Our alumni are living proof of the values and vision of BrightOak Academy.  
          Their achievements—whether in education, business, community service, or the arts—are stories of
          resilience, determination, and excellence.  
          <br />
          These success stories inspire our current students to dream bigger, work harder, and make a
          positive impact in the world. Each journey reminds us that learning at BrightOak is not just
          about academics, but about building a life of purpose and significance.
        </p>
      </div>

      {/* almuni images */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 ">
        {alumniImages.map((alumni) =>(
          <div key = {alumni.id} className='bg-white rounded shadow-md ' >
          <img
          src={alumni.image}
          alt={alumni.name}
          className="w-full object-cover rounded"
        />
        <h2 className="mt-3 text-lg font-medium text-center lg:text-3xl">{alumni.name}</h2>
        <p className="text-gray-600 text-center lg:text-2xl font-extralight p-5">{alumni.occupation}</p>
      </div>
          
        ))}
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Alumni
