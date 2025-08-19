import React from 'react'
import {motion} from 'framer-motion'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

const topData = [
  {id: 1, icon: <LiaChalkboardTeacherSolid />, name: "Teachers"},
  {id: 2, icon: <PiStudent />, name:" Students"},
  {id: 3, icon: <SiGoogleclassroom />, name: "Classes"},
]

const Overview = () => {
  return (
    <div>
      <motion.div className='flex justify-evenly items-center gap-1 mx-auto py-5'>
        {topData.map ((nav) =>
        <motion.div key={nav.id} className='bg-white/60 border border-blue-500/30 backdrop-blur-lg py-10 px-36 rounded shadow-2xl'>
          <h1 className='text-blue-500 text-4xl text-start'>{nav.icon}</h1>
          <h6>{nav.name}</h6>
        </motion.div>)}
      </motion.div>
    </div>
  )
}

export default Overview
