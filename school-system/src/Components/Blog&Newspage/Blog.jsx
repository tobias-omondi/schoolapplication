import React from 'react'
import Footer from '../Footer/Footer'
import studentsswimming from "/src/assets/studentsswimming.jpg"

const Blog = () => {
  return (
    <div>
      <div className='relative bg-blue-700 p-24'>
      </div>
      <div className='absolute top-48 left-10'>
       <h1 className='text-white lg:text-5xl font-light'>Our Blog Post</h1>
      </div>

      {/* Topic about a blog post and an image */}

      <div className='flex flex-col-reverse  lg:flex-row justify-evenly align-center mt-5 p-5'>

        <img src={studentsswimming} alt='student swim' 
        className='rounded-xl lg:w-1/2 brightness-75'/>

        {/* text & description */}

        <div className='flex flex-col px-5 mt-10 py-5'>
          <h1 className='text-2xl text-gray-700 underline underline-offset-2 text-center'>The Swimming Program at BrightOak Academy</h1>

          <p className='font-light mt-4 text-center'>At BrightOak Academy, the swimming pool is more than just water it’s a place where students build strength, confidence, and resilience. Every stroke teaches discipline, every lap builds endurance, and every splash carries the joy of growth. From beginners learning to float to advanced swimmers chasing records, the pool is where determination meets fun, and where BrightOak students dive into excellence.</p>
        </div>
      </div>

      {/* fetching our blog data */}

      <div className='text-center'>
        <h1>Fetch our blog data</h1>
      </div>

      {/* footer */}
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Blog
