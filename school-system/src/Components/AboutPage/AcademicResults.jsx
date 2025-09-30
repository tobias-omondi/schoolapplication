import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import school2025 from '/src/assets/class of 2025.avif'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

// Reusable Counter Component
const Counter = ({ target, duration, label }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(count, target, { duration })
    const unsubscribe = rounded.on("change", (v) => setDisplay(v))

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [count, rounded, target, duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-3xl font-semibold text-blue-600">
        {display}%
      </h1>
      <p className="text-gray-700 text-lg">{label}</p>
    </motion.div>
  )
}

const AcademicResults = () => {
  return (
    <div>
      {/* Hero section */}
      <motion.div
        initial={{ y: 10, scale: 1.1 }}
        animate={{ y: 0, scale: 1.0 }}
        transition={{ duration: 2 }}
        className='relative flex justify-center items-center mx-auto bg-blue-700 p-24'
      />

      {/* Title */}
      <div className='absolute top-48 left-10'>
        <h1 className='text-white text-3xl font-medium'>Academic Results</h1>
      </div>

      {/* Intro */}
      <div className='mt-5 px-3'>
        <h1 className='text-gray-700 font-medium text-2xl'>Academic Results & Performance</h1>
        <p className='text-gray-600 font-light'>
          At BrightOak Academy, academic excellence is at the core of our mission. Our results reflect both hard work <br /> 
          and commitment to holistic education.
        </p>
      </div>

      {/* Management Word */}
      <div className='mt-5 px-3'>
        <h1 className='text-gray-700 font-medium text-2xl'>A Word from School Management</h1>
        <p className='text-gray-600 font-light'>
          At BrightOak Academy, we take great pride in the consistent achievements of our students. Year after year, their results reflect not only academic excellence but also discipline, resilience, and the unwavering support of our dedicated teachers. We believe every child has unique potential, and these performances prove that with the right guidance, success is not just possible — it’s inevitable. As management, we remain committed to providing an environment where every learner thrives academically and personally.
        </p>
      </div>

      {/* Class Performance */}
      <div className='mt-5 px-3'>
        <h1 className='text-gray-700 font-medium text-2xl'>Class Performance – 2025</h1>

        <div className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-4 mt-5'>
          <img
            src={school2025}
            alt="school 2025"
            className='rounded-xl w-4/5 md:w-1/2 object-cover'
          />

          <p className='font-light text-gray-600'>
            The <span className='text-blue-500 underline'>2025 class at BrightOak Academy</span> has set a remarkable standard of excellence. With a strong balance across sciences, arts, and humanities, our learners have showcased both academic discipline and creativity. This year’s results reflect the school’s steady growth and commitment to nurturing well-rounded achievers.
          </p>
        </div>
      </div>

      {/* Performance Counters */}
      <div className='mt-10 text-center'>
        <h1 className='text-gray-600 text-2xl'>Congratulation Class of 2025!</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-5 text-center">
        <Counter target={30} duration={2} label="/Achieved A*" />
        <Counter target={55} duration={2.5} label="/Achieved A* - A" />
        <Counter target={45} duration={2} label="/Achieved A* - B+" />
        <Counter target={15} duration={1.8} label="/Achieved A* - C" />
      </div>

      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default AcademicResults
