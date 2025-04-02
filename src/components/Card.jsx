import React from 'react'

const Card = ({name, id, imgURL, CardOpen}) => {
  return (
    <div key={id}
    onClick={CardOpen}
        className='m-4 
        relative hover:translate-y-[-8px] duration-500 ease-in-out cursor-pointer
        border-2 border-blue-300 rounded-lg 
        transition-all brightness-95 hover:brightness-115'>
        <figure className='size-50 overflow-hidden rounded-t-md '>
            <img src={imgURL} alt={name} className='w-full h-full object-cover brightness-90'></img>
        </figure>
        <div className='font-rye p-2 uppercase text-[12px] text-[#FADA7A] '>{name}</div>
    </div>
  )
}

export default Card
