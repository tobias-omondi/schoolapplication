import React from 'react'
import aboutHeroimage from '/src/assets/childrens-chocolate-1642807_1280.jpg'
import {motion} from 'framer-motion'

const AboutHeroSection = () => {
  return (
    <div>
    <motion.div
    initial ={{y: 10, scale: 1.1}}
    animate = {{y: 0, scale: 1.0}}
    transition={{duration: 2,}}>

      <img src={aboutHeroimage} alt='animation' 
      className='w-2/3 h-[450px] object-cover items-center mx-auto mt-4 p-3 rounded-2xl'/>
    </motion.div>

    {/* about section paragraph */}

    <motion.div className='mt-10 flex justify-end'>
      <motion.p
      initial = {{y: 30, scale: 0.5, filter: "blur(2px)"}}
      // animate = {{scale: 0.9}}
      whileInView={{y: 0, scale: 0.9, filter: "blur(0px)"}}
      transition={{duration: 3}}
      className='text-start text-xl font-light w-1/2 py-2 p-5'>
      Our journey began not with bricks and mortar, but with a simple, powerful idea: that education should be a grand adventure. It started with a small group of passionate educators who believed that a school could be more than just a building; it could be a second home, a vibrant community where curiosity is the compass and every child is the hero of their own story. From our first classroom, filled with eager minds and big dreams, we've grown into a thriving campus, but that founding spirit remains our guiding light. We are dedicated to nurturing not just great students, but great people individuals who are compassionate, creative, and courageous. This is more than a school; it's a place where lifelong friendships are forged, passions are discovered, and the next chapter of a brighter future is written, one student at a time.
      </motion.p>
    </motion.div>

    <motion.div>
      {/* <motion.svg>
        <motion.circle 
        style={{ fill: "#00f" }}
        cx={0}
        animate={{ cx: 50 }}/>
      </motion.svg> */}
    </motion.div>
    </div>
  )
}

export default AboutHeroSection
