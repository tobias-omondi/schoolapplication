import React from 'react'
import aboutHeroimage from '/src/assets/high-school-5251586_1280.jpg'
import { motion } from 'framer-motion'
import schooldirectorimage from '/src/assets/school director.jpg'

const AboutHeroSection = () => {
  return (
    <div>
      {/* Hero image */}
      <motion.div
        initial={{ y: 10, scale: 1.1 }}
        animate={{ y: 0, scale: 1.0 }}
        transition={{ duration: 2 }}
      >
        <img
          src={aboutHeroimage}
          alt='animation'
          className='w-full h-[450px] object-cover mx-auto mt-4 p-3 rounded-2xl'
        />
      </motion.div>

      {/* About section */}
      <motion.div className='mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:px-16'>
        {/* Text */}
        <motion.div className='flex flex-col md:w-2/3'>
          <motion.h1
            initial={{ scale: 0.4, filter: 'blur(2px)' }}
            whileInView={{ scale: 1.0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5 }}
            className='text-blue-500 text-3xl font-bold text-center md:text-left mb-6'
          >
            A Word From Our Director
          </motion.h1>

          <motion.p
            initial={{ y: -20, scale: 0.5, filter: 'blur(2px)' }}
            whileInView={{ y: 0, scale: 1.0, filter: 'blur(0px)' }}
            transition={{ duration: 2.5 }}
            className='text-center md:text-left text-lg leading-relaxed font-light'
          >
            At BrightOak Academy, we believe education is not just about academics but about
            shaping the whole person. Every child who walks through our gates carries unique gifts,
            talents, and dreams, and it is our duty to help them discover and nurture these. Our
            vision is to provide a learning environment where curiosity is encouraged, creativity is
            celebrated, and excellence is pursued with joy.
            <br /> <br />
            For over <span className='text-blue-500'>25 years,</span> my journey as an educator has
            shown me that true success comes when students are not only equipped with knowledge but
            also with values that guide their lives. At BrightOak, we place equal importance on
            academic achievement, character building, and the development of life skills that
            prepare our students for the world beyond the classroom.
            <br /> <br />
            This school is more than a place of study—it is a community, a second home where
            lifelong friendships are formed and future leaders are molded. Together with our
            dedicated teachers and supportive parents, we are committed to walking hand in hand with
            every student on their path toward success.
          </motion.p>
        </motion.div>

        {/* Director image */}
        <motion.img
          src={schooldirectorimage}
          alt='school-director'
          className='w-52 h-52 md:w-96 md:h-96 object-cover rounded-full '
        />
      </motion.div>
    </div>
  )
}

export default AboutHeroSection
