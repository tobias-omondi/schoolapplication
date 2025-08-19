import React from 'react'
import {motion} from 'framer-motion'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

const topData = [
  {id: 1, icon: <LiaChalkboardTeacherSolid /> ,pargh: "Saved Teachers", name: "Teachers"},
  {id: 2, icon: <PiStudent />, pargh: "Saved Students", name:" Students"},
  {id: 3, icon: <SiGoogleclassroom />, pargh: "Saved Classes", name: "Classes"},
]

const Overview = () => {
  return (
    <div>
      <motion.div className='grid grid-cols-2 lg:grid-cols-3 justify-evenly gap-3.5 mx-auto py-5 p-3'>
        {topData.map ((nav) =>
        <motion.div key={nav.id} className='bg-white/60 border border-blue-500/30 backdrop-blur-lg py-10 px-16 rounded shadow-2xl'>
          <motion.div>
          <h1 className='text-orange-400 text-2xl md:text-4xl text-start flex flex-col '>{nav.icon} <span className='text-sm text-gray-600 font-light pr-5'> {nav.pargh}</span></h1>
          </motion.div>
          <h6 className='text-center md:text-xl font-medium text-gray-600'>{nav.name}</h6>
        </motion.div>)}
      </motion.div>
    </div>
  )
}

export default Overview
