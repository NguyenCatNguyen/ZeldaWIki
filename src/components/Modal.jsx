import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const Modal = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center z-50'>
      <div className='w-2/3 h-2/3 bg-red-500 rounded-lg'>
        <button><IoMdCloseCircle /></button>
      </div>
    </div>
  )
}

export default Modal