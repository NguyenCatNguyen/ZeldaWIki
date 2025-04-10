import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


const Action = () => {
  return (
    <div className=' w-full flex flex-col sm:flex-row justify-around items-center px-15'>
        <div className='bg-blue-500 w-full mx-10 rounded flex justify-between items-center p-10 pt-40'>
            <p className=' w-2/4 text-5xl'>Like what you see, let get connect!</p>
            <a className='bg-white text-blue-500 h-12 w-18 flex justify-center items-center rounded' href='https://www.linkedin.com/in/cat-nguyen-626621235/' target='_blank' rel='noopener noreferrer'>
                <FaExternalLinkAlt  className='size-6'/>
            </a>

        </div>
    </div>
  )
}

export default Action