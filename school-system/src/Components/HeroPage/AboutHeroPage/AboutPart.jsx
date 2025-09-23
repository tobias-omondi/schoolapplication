'use client';
import React from 'react'

// import the css

import './AboutPart.css'
import { motion } from "framer-motion"

const AboutPart = ({title, description , image}) => {
  return (
    <div className='aboutPart-container'>

      <motion.div
       initial={{ opacity: 0, y: 100, filter: 'blur(3px)' }}
       whileInView={{ opacity: 1, y: 0,  filter: 'blur(0)' }}
       transition={{ duration: 1, ease: "easeOut" }} 
       viewport={{once: true}}
       className='aboutpart-headings'>
        <h1 className='text-blue-500 underline'>{title}</h1>
        <p >{description}</p>
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 50, filter: 'blur(3px)' }}
       whileInView={{ opacity: 1, x: 0,  filter: 'blur(0)' }}
       viewport={{once: true}}
       transition={{ duration: 1, ease: "easeOut" }} className='aboutpart-headings'>
      < motion.img 
      initial = {{scale: 0.8, }}
      animate = {{scale: 1}}
      transition={{duration: 1.2}}
      whileHover={{scale: 1.07, cursor: "pointer"}} src={image} alt='school children'  className='aboutpart-headings-image'/>
      </motion.div>
    </div>
  )
}

export default AboutPart
