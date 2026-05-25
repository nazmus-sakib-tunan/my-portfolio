import Image from 'next/image';
import React from 'react';

const LeftSideBar = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center mt-10 sm:mt-0 '>
      <div className="bg-transparent relative w-full max-w-80 h-full rounded-3xl 
        border border-white/20
        backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        p-5 sm:p-8 overflow-hidden flex flex-col items-center">
        
      
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none " />

       
        <div className="mb-4 sm:mb-6">
         
          <Image
            src="/myphoto.jpeg"
            alt="Profile Image"
            width={200}
            height={20}
            className="rounded-xl border-2 border-white/20 "
          
          />
        </div>

        
        <div className="mb-4 sm:mb-6 relative">
          <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold tracking-tight mb-2 text-gray-300">
            Nazmus Sakib Tunan
          </h1>
          <p className="text-lg sm:text-xl text-[#94A3B8] font-medium leading-relaxed">
           Web Developer
          </p>
        </div>

        
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6 relative">
          
          {/* Facebook */}
          <a href="https://www.facebook.com/nasmus.sakib.1694" className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl sm:rounded-3xl
            border border-white/20 flex items-center justify-center
            transition-all hover:bg-white/10">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.19795 21.5H13.198V13.433H16.198L16.698 9.5H13.198V7.5C13.198 6.671 13.198 5.5 14.698 5.5H16.198V1.5H13.698C10.698 1.5 9.19795 3.5 9.19795 6V9.5H7.19795V13.433H9.19795V21.5Z" />
            </svg>
          </a>

          {/* X */}
          <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl sm:rounded-3xl
            border border-white/20 flex items-center justify-center
            transition-all hover:bg-white/10">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.663l4.717 6.237L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="w-8 h-8 sm:w-10 sm:h-10  rounded-2xl sm:rounded-3xl
            border border-white/20 flex items-center justify-center
            transition-all hover:bg-white/10">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Website */}
          <a href="#" className="w-8 h-8 sm:w-10 sm:h-10  rounded-2xl sm:rounded-3xl
            border border-white/20 flex items-center justify-center
            transition-all hover:bg-white/10">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </div>

        
        <div className="  ">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nstunan@gmail.com"
  target="_blank"
            className="text-lg sm:text-xl  font-normal text-white hover:text-green-400 transition-colors break-all block"
          >
            nstunan@gmail.com
          </a>
        
        </div>

      </div>
   </div>
  );
};

export default LeftSideBar;