'use client';
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    < motion.div  initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className='h-full flex flex-col justify-center mx-10 my-15  '> 
      <div className='mb-10  bg-gray-400/20  border border-white/20 w-20 flex items-center justify-center rounded-full p-2'>
        <p className='text-gray-300 '>Hello</p>
      </div>

      <div>
        <h1 className='text-4xl font-semibold bg-linear-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent leading-relaxed  md:text-7xl'>Helping Businesses
          
          Grow Through</h1>
        
        <h1 className='text-3xl md:text-5xl my-8 font-bold  bg-linear-to-b from-yellow-300 via-yellow-400 to-yellow-100 bg-clip-text text-transparent leading-relaxed'>
          Digital Innovation
        </h1> 
        <p className='text-xl md:text-2xl text-gray-400 font-light leading-relaxed'> A a creative Frontend Web Developer passionate about crafting modern, responsive, and user-focused web experiences. I specialize in JavaScript, React, Next.js, and Tailwind CSS, transforming complex ideas into clean, interactive, and elegant digital solutions. My goal is to build websites that not only look visually impressive but also feel smooth, fast, and intuitive for every user!</p>
        
        <div className='flex flex-col mt-10  gap-5 md:flex-row '>  
          <button className='btn  bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-500
                text-black font-bold
                shadow-[0_0_25px_rgba(255,180,0,0.8)]
                hover:shadow-[0_0_40px_rgba(255,140,0,1)]
                transition-all hover:scale-105 duration-300 border-none rounded-full'>Let`s Work Together</button>
          <button className='btn bg-transparent border-2 border-gray-500 rounded-full  transition-all hover:scale-105 duration-300 '>Download Cv <FaArrowRight/></button>
        </div>
      </div>

   </motion.div>
  );
};

export default Home;