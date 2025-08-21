import React from 'react';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Bar
} from 'recharts';
import { motion } from 'framer-motion';

const LineChart = () => {
  const enrollmentData = [
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

  const attendanceData = [
    { month: "Jan", attendance: 85 },
    { month: "Feb", attendance: 90 },
    { month: "Mar", attendance: 92 },
    { month: "Apr", attendance: 88 },
    { month: "May", attendance: 95 },
    { month: "Jun", attendance: 97 },
    { month: "Jul", attendance: 91 },
    { month: "Aug", attendance: 93 },
    { month: "Sep", attendance: 89 },
    { month: "Oct", attendance: 94 },
    { month: "Nov", attendance: 96 },
    { month: "Dec", attendance: 92 }
  ];

  const cardStyle = "bg-white/20 backdrop-blur-lg border border-blue-500/30 rounded shadow-xl hover:shadow-blue-500/20 p-4";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      
      {/* Enrollment Trend */}
      <motion.div 
        className={cardStyle} 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-gray-700 text-sm mb-3">Student Enrollment Trend</h1>
        <ResponsiveContainer width="100%" height={300}>
          <ReLineChart data={enrollmentData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="students" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} />
          </ReLineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Attendance Trend (Mixed Chart) */}
      <motion.div 
        className={cardStyle} 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="text-gray-700 text-sm mb-3">Student Attendance Trend (%)</h1>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={attendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 100]} />
            <Tooltip />
            <Bar dataKey="attendance" fill="#93c5fd" barSize={20} radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="attendance" stroke="#1d4ed8" strokeWidth={2} dot={{ r: 3 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default LineChart;
