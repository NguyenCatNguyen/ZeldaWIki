import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


const Action = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-around items-center sm:px-15 px-8'>
      <div className='bg-blue-500 w-full rounded sm:justify-between justify-center items-center p-10 pt-10 sm:pt-30 md:pt-40 block sm:flex text-center'>
        <p className='sm:w-2/4 text-2xl sm:text-5xl text-center sm:text-left'>Like what you see, let’s get connected!</p>
        <a
          className=' hover:bg-blue-950 hover:text-white hover:w-22 transition-color duration-500 ease-in-out
                    bg-white text-blue-500 h-12 w-18 flex justify-center items-center rounded mx-auto sm:mx-0 mt-5 sm:mt-0'
          href='https://www.linkedin.com/in/cat-nguyen-626621235/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaExternalLinkAlt className='size-6' />
        </a>
      </div>
    </div>
  );
};


export default Action