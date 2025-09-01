import React from 'react'
import aboutHeroimage from '/src/assets/childrens-chocolate-1642807_1280.jpg'
import {motion} from 'framer-motion'

const AboutHeroSection = () => {
  return (
    <motion.div
    initial ={{y: 10, scale: 1.2}}
    animate = {{y: 0, scale: 1.0}}
    transition={{duration: 2.5,}}>
      <img src={aboutHeroimage} alt='animation' 
      className='w-2/3 h-[450px] object-cover items-center mx-auto mt-4 p-3 rounded-2xl'/>
    </motion.div>
  )
}

export default AboutHeroSection
