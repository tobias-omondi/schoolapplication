'use client';
import React from 'react'

// import the css

import './AboutPart.css'
import { motion, px } from "motion/react"

const AboutPart = ({title, description , image}) => {
  return (
    <div className='aboutPart-container'>

      <motion.div
       initial={{ opacity: 0, y: 50, filter: 'blur(3px)' }}
       whileInView={{ opacity: 1, y: 0,  filter: 'blur(0)' }}
       transition={{ duration: 1, ease: "easeOut" }} className='aboutpart-headings'>
        <h1>{title}</h1>
        <p>{description}</p>
      </motion.div>
      <img src={image} alt='school children'  className='aboutpart-headings-image'/>
    </div>
  )
}

export default AboutPart
