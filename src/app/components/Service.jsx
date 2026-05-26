"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const items = [
  {
    title: "Custom Website Development",
    content:
      "I build fully responsive and modern websites tailored to your business needs using Next.js, React, and modern web technologies. Fast, scalable, and SEO-friendly solutions.",
  },
  {
    title: "Frontend Development",
    content:
      "I create clean, interactive, and user-friendly interfaces using React, Next.js, Tailwind CSS, and modern UI practices to ensure great user experience.",
  },
  {
    title: "Responsive Web Design",
    content:
      "Your website will look perfect on all devices including mobile, tablet, and desktop with fully responsive layouts and optimized UI design.",
  },
  {
    title: "Bug Fixing & Maintenance",
    content:
      "Fix website issues, improve existing code, and provide ongoing maintenance to keep your site updated and secure.",
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className="h-full flex flex-col justify-center mx-10 my-15  ">

      <div className='mb-10  bg-gray-400/20  border border-white/20 w-20 flex items-center justify-center rounded-full p-2'>
        <p className='text-gray-300 '>Services</p>
      </div>
      <div>
        <h1 className='text-4xl font-semibold bg-linear-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent leading-relaxed  md:text-7xl'>Solutions That</h1>
        
        <h1 className='text-4xl md:text-7xl  font-bold  bg-linear-to-b from-yellow-300 via-yellow-400 to-yellow-100 bg-clip-text text-transparent leading-relaxed'>
          Empower Your Brand
        </h1> 
        
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-transparent mt-5"
        >
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-5 py-4 flex justify-between items-center text-white hover:bg-white/5 transition"
          >
            <span>{item.title}</span>
            <span className="text-lg">
              {activeIndex === index ?  <GoArrowUpRight />: <GoArrowDownRight />}
            </span>
          </button>

          {/* Content */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 text-gray-300 overflow-hidden"
              >
                <div className="py-4">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}