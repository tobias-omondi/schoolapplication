import React from 'react'
import Footer from '../Footer/Footer'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {motion} from "framer-motion"

const fetchNews = async() => {
  const respond = await axios.get("https://schoolapplication-btwi.onrender.com/api/news/");
  return respond.data;
};

const fetchEvents = async() => {
  const resp = await axios.get ("api")
  return resp.data;
};

const News = () => {

  const {data:news, isLoading, error } = useQuery({
      queryKey: ["news"],
      queryFn: fetchNews, 
    });

  // const {data:events, isLoading, error} = useQuery ({
  //   queryKey:["news"],
  //   queryFn: fetchEvents
  // });

  return (
    <div>
      <div className='relative bg-blue-700 p-20'>
   
      </div>
      <div className='absolute top-48 left-10'>
       <h1 className='text-white lg:text-3xl Font-bold'>Our News & Events Post</h1>
      </div>

      <div className='flex flex-col md:flex-row lg:flex-row justify-evenly mt-5 lg:w-2/3'>


        <div>
          <h1 className='text-2xl text-gray-700 font-light lg:ml-10 text-center'>Daily News</h1>
          {/* map the news data here */}

          <div className="grid gap-4 mt-8 p-5  lg:ml-10 rounded shadow-xl">
          {isLoading && <p>Loading news...</p>}
          {error && <p>Failed to fetch news</p>}

       {news &&
         news.slice(0, 5).map((news) => (
         <div
         key={news.id}
         className="p-2 border border-blue-400 items-center mx-auto rounded shadow hover:shadow-lg transition bg-white"
        >
        <img
          src={news.image}
          alt="news post"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="font-semibold text-lg mb-2 text-gray-700">{news.title}</h2>
        <p className="text-gray-600 line-clamp-3">{news.content}</p>
      </div>
       ))}
    </div>


      </div>
        <div>

          {/* map the comming events here */}
          <h1 className='text-2xl text-gray-700 font-light text-center' >Upcoming Events</h1></div>
      </div>


      {/* footer */}
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default News
