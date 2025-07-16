import React from 'react';
import heroimage from '/src/assets/schoolhero.jpg';
import { CiSearch } from "react-icons/ci";
import './Hero.css';

const Hero = () => {
  return (
    <div className='flex flex-row justify-evenly items-center'>

      <div className='hero-container'>
        <img src={heroimage} alt='school students' />
      </div>

      {/* Search input with icon */}
      <div className='relative mt-14 shadow-2xl p-10'>
        <input 
          type='search' 
          id='search' 
          placeholder='Search'
          className='input-search'
        />
        <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl' />
      </div>
      
    </div>
  );
}

export default Hero;
