import React from 'react';
import heroimage from '/src/assets/schoolhero.jpg'

// import our css
import './Hero.css'

const Hero = () => {
  return (
    <div className='mt-5'>
      <div className='hero-container'>
        <img src={heroimage} alt='school studenst'/>
      </div>
    </div>
  )
}

export default Hero;
