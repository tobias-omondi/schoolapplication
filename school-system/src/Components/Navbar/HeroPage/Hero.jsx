import React from 'react';
import heroimage from '/src/assets/schoolhero.jpg';
import { CiSearch } from "react-icons/ci";
import './Hero.css';



const Hero = () => {
  return (
    <div className='flex flex-row justify-evenly '>

      <div className='hero-container'>
        <img src={heroimage} alt='school students' />

        <div className='hero-headings'>
          <h1>Explore BrightOak Academy</h1>
          <p>We just don't give a students lectures but real life expirence</p>
          <div className='hero-heading-button'>
            <button type='submit'>Start Learning</button>
          </div>
        </div>
      </div>

      {/* Search input with icon */}
      <div className='flex flex-col'>
      <div className='relative mt-14  p-10' style={{marginTop: '1.3rem'}}>
        <input 
          type='search' 
          id='search' 
          placeholder='Search'
          className='input-search'
        />
        <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl' />
      </div>


      {/* hero cards */}
        <div className='hero-cards'>
          <h1 className='text-center'>OUR SCHOOL</h1>
          <p className='text-center w-1/2'>BrightOak Academy is a forward-thinking school committed to academic excellence and holistic development. We foster a supportive environment that nurtures critical thinking, creativity, and character. Our goal is to empower students with the skills and values needed to succeed in a dynamic world.</p>

        </div>

        <div className='hero-cards-part2'>
          <h1 className='text-center'> Our Vision</h1>
          <p className='text-center w-1/2'>We envision a nurturing learning environment where every child discovers their full potential and grows into a responsible, confident, and compassionate leader.</p>
          </div>

      </div>
      
    </div>
  );
}

export default Hero;
