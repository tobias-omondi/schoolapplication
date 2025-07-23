import React from 'react'

// import the css

import './AboutPart.css'

const AboutPart = ({title, description , image}) => {
  return (
    <div className='aboutPart-container'>
      <div className='aboutpart-headings'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={image} alt='school children'  className='aboutpart-headings-image'/>
    </div>
  )
}

export default AboutPart
