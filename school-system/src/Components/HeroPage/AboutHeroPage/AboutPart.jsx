'use client';
import React from 'react'

// import the css

import './AboutPart.css'
import { motion, px } from "motion/react"

const AboutPart = ({title, description , image}) => {
  return (
    <div className='aboutPart-container'>

      <motion.div
       initial={{ opacity: 0, scale: 0, filter: 'blur(3px)' }}
       whileInView={{ opacity: 1, scale: 1.0,  filter: 'blur(0)' }}
       transition={{ duration: 1, ease: "easeOut" }} className='aboutpart-headings'>
        <h1 className='text-blue-500 underline'>{title}</h1>
        <p className="font-['Fredoka']">{description}</p>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 50, filter: 'blur(3px)' }}
       whileInView={{ opacity: 1, x: 0,  filter: 'blur(0)' }}
       transition={{ duration: 1, ease: "easeOut" }} className='aboutpart-headings'>
      <img src={image} alt='school children'  className='aboutpart-headings-image'/>
      </motion.div>
    </div>
  )
}

export default AboutPart
