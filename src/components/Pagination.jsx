import React from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


const Button = ({icon, onClick, disabled = false}) => {
  return (
    <button className={`text-white px-4 py-2 rounded 
          transition-color duration-500 ease-in-out
          border-1 border-black cursor-pointer
        hover:border-white hover:bg-[#2c2f38]
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onClick} disabled={disabled}>{icon}</button>
  )
}

const Pagination = ({currentPage, totalPages, onPageChange}) => {

  //Set limits for pages numbers to not exceed and not go below 1
  const goPrev = () => currentPage > 1 && onPageChange(currentPage - 1);
  const goNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  }

  return (
    <div className='flex justify-center items-center w-full pb-5'>          
      <Button icon={<BiSolidLeftArrow/>} onClick={goPrev} disabled={currentPage <= 1}/>
      <span className="px-5 py-1 mx-2 rounded">{currentPage} / {totalPages}</span>
      <Button icon={<BiSolidRightArrow/>} onClick={goNext} disabled={currentPage >= totalPages}/>
    </div>
  )
}

export default Pagination