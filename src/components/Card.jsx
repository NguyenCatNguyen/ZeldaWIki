import React from 'react'

const Card = ({name, id, imgURL, CardOpen}) => {
  return (
    <div key={id}
    onClick={CardOpen}
        className='m-4 w-[300px]
        relative hover:translate-y-[-8px] duration-500 ease-in-out cursor-pointer
        border-2 border-blue-300 rounded-lg 
        transition-all brightness-95 hover:brightness-115'>
        <div className='font-rye pt-3 px-3 uppercase text-center text-[15px] text-[#FADA7A] '>{name}</div>
        <figure className='overflow-hidden p-5 '>
            <img src={imgURL} alt={name} className='w-full h-full object-cover brightness-90 rounded'></img>
        </figure>
    </div>
  )
}

export default Card
