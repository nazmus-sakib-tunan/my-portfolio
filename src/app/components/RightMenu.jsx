'use client';
import { motion } from "framer-motion";
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const RightMenu = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center ">

      <motion.div  initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className='bg-transparent relative w-full max-w-35 rounded-2xl sm:rounded-xl
        border border-white/20 
        backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        p-2 sm:p-4 overflow-hidden hidden md:flex md:flex-col md:items-start md:justify-start gap-8 hover:gap-10 transition-all '>
        
        
          <Link href="/" className='hover:text-green-400'>
          Home
        </Link>
        <Link href="/" className='hover:text-green-400'>
          resume
        </Link>
        <Link href="/" className='hover:text-green-400'>
          Services
        </Link>
        <Link href="/" className='hover:text-green-400' >
          Skills
        </Link>
        <Link href="/" className='hover:text-green-400'>
          
          Portfolio
        </Link>
        <Link href="/" className='hover:text-green-400'>
          
          Testimonials
        </Link>
        <Link href="/" className='hover:text-green-400'>
          
          Pricing
        </Link>
        <Link href="/" className='hover:text-green-400'>
          
          Contact
        </Link>
       
        

      </motion.div>


    </div>
  );
};

export default RightMenu;