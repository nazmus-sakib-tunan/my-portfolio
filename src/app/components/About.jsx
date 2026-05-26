'use client'
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    < motion.div  initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className='h-full flex flex-col justify-center mx-10 my-15  '> 
      <div className='mb-10  bg-gray-400/20  border border-white/20 w-20 flex items-center justify-center rounded-full p-2'>
        <p className='text-gray-300 '>About</p>
      </div>

      <div>
        <h1 className='text-4xl font-semibold bg-linear-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent leading-relaxed  md:text-7xl'>My Journey & <span className='bg-linear-to-b from-yellow-300 via-yellow-400 to-yellow-100 bg-clip-text text-transparent leading-relaxed'>Vision</span> </h1>
        
       
        <p className='text-lg md:text-xl text-gray-400 font-light leading-relaxed'>Hey, I’m Nazmus Sakib Tunan — a passionate Frontend Web Developer who loves building modern and responsive web applications. I work mainly with JavaScript, React, Next.js, and Tailwind CSS to create clean and interactive user experiences. I enjoy turning creative ideas into real-world projects through code and design.
          <br />

          <br/>
          Learning new technologies and improving my skills is part of my daily journey. I always focus on writing clean, efficient, and user-friendly code. My goal is to grow as a full-stack developer and build impactful digital products.
        </p>
        
       
      </div>

   </motion.div>
  );
};

export default About;