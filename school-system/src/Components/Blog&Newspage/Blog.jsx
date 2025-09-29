import React from "react";
import Footer from "../Footer/Footer";
import studentsswimming from "/src/assets/studentsswimming.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {motion} from 'framer-motion'

const fetchBlogs = async () => {
  const res = await axios.get("https://schoolapplication-btwi.onrender.com/api/blogs/");
  return res.data;
};

const Blog = () => {
  // useQuery handles fetching, loading, and error states
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs, 
  });

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-blue-800 p-24"></div>
      <div className="absolute top-48 left-10">
        <motion.h1
        initial = {{opacity: 0, y:90}}
        animate = {{opacity: 1, y: 0, delay: 0.7}}
        transition={{duration: 0.8}}
        className="text-white lg:text-3xl font-bold">Our Blog Post</motion.h1>
      </div>

      {/* Topic about a blog post and an image */}
      <motion.div
      initial = {{opacity:0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
       className="flex flex-col-reverse lg:flex-row justify-evenly align-center mt-5 p-5">
        <motion.img
          initial = {{scale:1}}
          whileHover={{scale: 1.04}}
          transition={{duration:0.7}}
          src={studentsswimming}
          alt="student swim"
          className="rounded-xl lg:w-1/2 brightness-75"
        />

        {/* text & description */}
        <div className="flex flex-col px-5 mt-5 py-5">
          <h1 className="text-2xl text-gray-700 underline underline-offset-8 text-center">
            The Swimming Program at BrightOak Academy
          </h1>
          <p className="font-light mt-4 text-center">
            At BrightOak Academy, the swimming pool is more than just water —
            it’s a place where students build strength, confidence, and
            resilience. Every stroke teaches discipline, every lap builds
            endurance, and every splash carries the joy of growth. From
            beginners learning to float to advanced swimmers chasing records,
            the pool is where determination meets fun, and where BrightOak
            students dive into excellence.
          </p>
        </div>
      </motion.div>

      {/* fetching our blog data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4">
          {isLoading && <p>Loading blogs...</p>}
          {error && <p>Failed to fetch blogs</p>}

       {blogs &&
         blogs.slice(0, 5).map((blog) => (
         <div
         key={blog.id}
         className="p-6 border border-blue-400 rounded shadow hover:shadow-lg transition bg-white"
        >
        <img
          src={blog.image}
          alt="blog post"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="font-semibold text-lg mb-2 text-gray-700">{blog.title}</h2>
        <p className="text-gray-600 line-clamp-3">{blog.content}</p>
      </div>
       ))}
    </div>


      {/* footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
