import React from 'react'
import aboutHeroimage from '/src/assets/high-school-5251586_1280.jpg'
import { motion } from 'framer-motion'
import schooldirectorimage from '/src/assets/school director.webp'
import bookimage from '/src/assets/childrenplaying.jpg'
import playingbasketball from '/src/assets/happy-schoolkids.webp'
import Footer from '../Footer/Footer'

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
      <motion.div className='mt-10 flex flex-col md:flex-col lg:flex-row items-center lg:items-start gap-10 px-6 md:px-16'>
        {/* Text */}
        <motion.div className='flex flex-col lg:w-2/3'>
          <motion.h1
            initial={{ y: 100, filter: 'blur(2px)' }}
            whileInView={{ y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: "easeOut"  }}
            viewport={{ once: true }}
            className="text-gray-700 text-3xl font-bold text-center md:text-left mb-6" 
          >
            A Word From Our Director
          </motion.h1>

          <motion.p
            initial={{ y: 100,  filter: 'blur(1px)' }}
            whileInView={{ y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: "easeOut"  }}
            viewport={{ once: true }}
            className="text-center md:text-left text-lg leading-relaxed font-light "
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
          className='w-52 h-52 md:w-[350px] md:h-[350px] object-cover rounded-full '
        />
      </motion.div>




      {/* About section */}
      <motion.div className='mt-20 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center lg:items-start gap-10 px-6 md:px-16'>

         {/* students image */}
         <motion.img
          src={bookimage}
          alt='students'
          className='w-3/4 h-52 md:w-2/3 md:h-[500px] object-cover rounded-xl '
        />

       <motion.div className='flex flex-col lg:w-2/3'>
          <motion.h1
            initial={{ y: 100, filter: 'blur(1px)' }}
            whileInView={{ y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: "easeOut"  }}
            viewport={{ once: true }}
            className="text-gray-700 text-3xl font-bold text-center md:text-left mb-6" 
          >
            25 Years Of Expirence
          </motion.h1>

          <motion.p
            initial={{ y: 100, filter: 'blur(2px)' }}
            whileInView={{ y: 0,  filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: "easeOut"  }}
            viewport={{ once: true }}
            className="text-center md:text-left text-lg font-light leading-relaxed" 
          >
            For over<span className='text-blue-500  underline decoration-1 underline-offset-2'> 25 years, BrightOak Academy </span> has been a place where young minds are nurtured, talents are discovered, and futures are shaped. What began as a small community of passionate educators has grown into a respected institution, committed to providing quality junior high school education.
            <br /> <br />
            During this time, we have guided countless students through their most formative years, preparing them not only for academic success but also for life beyond the classroom. Our focus has always been on building strong character, encouraging curiosity, and instilling values that last a lifetime.
            <br /> <br />
            This legacy of excellence continues to inspire us each day as we look ahead, dedicated to empowering the next generation with knowledge, confidence, and the courage to pursue their dreams.
          </motion.p>
        </motion.div>

      </motion.div>

      <motion.div className= "mt-16 px-6 md:px-16 p-5">
      <motion.h1
            // initial={{ scale: 0.4, filter: 'blur(2px)' }}
            // whileInView={{ scale: 1.0, filter: 'blur(0px)' }}
            // transition={{ duration: 1.4, ease: "easeOut"  }}
            // viewport={{ once: true }}
            className="text-gray-700 text-3xl font-bold text-center md:text-left mb-6 "
          >
            Junior HighSchool Education
          </motion.h1>

          <motion.p 
              //  initial={{ y: -20, scale: 0.5,}}
              //  animate={{ y: 0, scale: 1.0 }}
              //  transition={{ duration: 1.4, ease: "easeOut"  }}
              // //  viewport={{ once: true }}
               className="text-center md:text-left text-lg leading-relaxed font-light" 
          >At BrightOak Academy, our Junior High School program provides a strong academic foundation while nurturing character, creativity, and confidence. We prepare students for the future by combining quality teaching with life skills, leadership opportunities, and co-curricular activities that inspire growth both inside and outside the classroom.</motion.p>
      </motion.div>

      <motion.div  className='mt-20 flex flex-col md:flex-col lg:flex-row items-center lg:items-start gap-10 px-6 md:px-16'>
      <motion.div className= "mt-2 px-6 md:px-16 p-5"
         initial={{ y: 100,  filter: 'blur(2px)' }}
         whileInView={{ y: 0, filter: 'blur(0px)' }}
         transition={{ duration: 1.4, ease: "easeOut"  }}
         viewport={{ once: true }}>
        <h1 className="text-gray-700 text-3xl font-bold text-center md:text-left mb-6" >Our Path to Success</h1>
        <p
         className=" text-center md:text-left text-lg leading-relaxed font-light" >At BrightOak Academy, success is not defined by a single achievement, but by the continuous journey of growth, learning, and perseverance. From the beginning, our mission has been to nurture curious minds, instill strong values, and empower students to reach their fullest potential.</p> 
         <li>
          <ul> <span className='font-medium'>Excellence in Education:</span> <br/>providing quality teaching and innovative learning experiences.</ul>
        </li>
        <li>
          <ul> <span className='font-medium'>Community & Values:</span> <br/>fostering integrity, respect, and responsibility within and beyond the classroom.</ul>
        </li>
        <li>
          <ul> <span className='font-medium'>Growth Mindset:</span> <br/>encouraging students to embrace challenges, learn from setbacks, and celebrate progress.</ul>
        </li> <br/>
      </motion.div>

      <motion.img
      initial = {{scale:0.8}}
      whileHover={{scale: 1.03
      }}
      transition={{duration:0.7}}
       src={playingbasketball} alt='students with books' className='object-cover mb-10 rounded'/>
      </motion.div>

      <Footer />
    </div>
  )
}

export default AboutHeroSection
