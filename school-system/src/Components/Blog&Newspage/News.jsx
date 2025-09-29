import React from 'react'
import Footer from '../Footer/Footer'

const News = () => {
  return (
    <div>
      <div className='relative bg-blue-700 p-20'>
   
      </div>
      <div className='absolute top-48 left-10'>
       <h1 className='text-white lg:text-3xl Font-bold'>Our News & Events Post</h1>
      </div>

      <div className='flex flex-row justify-evenly items-center underline decoration-blue-300 mt-5'>
        <div>
          <h1 className='text-2xl text-gray-700 font-light'>Daily News</h1>
          </div>
        <div>
          <h1 className='text-2xl text-gray-700 font-light' >Upcoming Events</h1></div>
      </div>


      {/* footer */}
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default News
