import React from 'react';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const StudentsEnrollen = () => {

  const data = [
    { month: "Jan", students: 620 },
    { month: "Feb", students: 940 },
    { month: "Mar", students: 1180 },
    { month: "Apr", students: 1350 },
    { month: "May", students: 1420 },
    { month: "Jun", students: 1600 },
    { month: "Jul", students: 1740 },
    { month: "Aug", students: 1800 },
    { month: "Sep", students: 1820 },
    { month: "Oct", students: 1450 },
    { month: "Nov", students: 1680 },
    { month: "Dec", students: 1700 }
  ];
  

  return (
    <div className="w-full h-64 p-5">

       <div className='mt-5'>
        <h1 className='text-gray-700 text-sm'>Student Enrollment Trend</h1>
      </div>

      <ResponsiveContainer width="100%" height="200%" className= "cursor-pointer">
        <ReLineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} className='bg-white/20 backdrop-blur-lg border border-blue-500/30 rounded shadow-xl hover:shadow-blue-500/20 cursor-pointer'>


          <CartesianGrid strokeDasharray="3 3" className='bg-green-700' />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="#8884d8" strokeWidth={1.5} dot={true} className='cursor-pointer' />
        </ReLineChart>
      </ResponsiveContainer>
     
    </div>
  );
};

export default StudentsEnrollen;
