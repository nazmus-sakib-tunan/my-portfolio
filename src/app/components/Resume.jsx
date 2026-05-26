'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    < motion.div  initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className='h-full flex flex-col justify-center mx-10 my-15  '> 
      <div className='mb-10  bg-gray-400/20  border border-white/20 w-20 flex items-center justify-center rounded-full p-2'>
        <p className='text-gray-300 '>Resume</p>
      </div>

      <div>
        <h1 className='text-4xl font-semibold bg-linear-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent leading-relaxed  md:text-7xl'>Creative Thinker</h1>
        
        <h1 className='text-4xl md:text-7xl  font-bold  bg-linear-to-b from-yellow-300 via-yellow-400 to-yellow-100 bg-clip-text text-transparent leading-relaxed'>
          Code Artist
        </h1> 
        
      </div>
      <div className='mt-10 text-gray-300 text-lg leading-relaxed'>
        <div className='flex flex-col md:flex-row justify-between '>
          <h2>Higher Secondary Certificate</h2>
          <h2>Adarsha Sundarbar College,Khulna</h2>
          <h2>2023</h2>
          
        </div>
        <div className="divider bg-gray-500  h-0.5"></div>
        
        <div className='flex flex-col md:flex-row justify-between '>
          <h2>B.sc in Computer Science</h2>
          <h2>American International University-Bangladesh</h2>
          <h2>2026(running)</h2>
          
        </div>
        <div className="divider bg-gray-500  h-0.5"></div>
        <div className='flex flex-col md:flex-row justify-between '>
          <h2>Graphics Design</h2>
          <h2>Sundarbar Travel Agency</h2>
          <h2>2023</h2>
          
        </div>

        <div className="divider bg-gray-500  h-0.5"></div>
      </div>

   </motion.div>
  );
};

export default Resume;