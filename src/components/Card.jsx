import React from 'react'

const Card = ({name, id, imgURL}) => {
  return (
    <div key={id}
        className='m-4 
        relative hover:translate-y-[-8px] duration-500 ease-in-out cursor-pointer
        border-[0.5px] border-blue-300 rounded-lg w-[200px]
        hover:brightness-110'>
        <figure className='size-50 overflow-hidden rounded-t-lg'>
            <img src={imgURL} alt={name} className='w-full h-full object-cover'></img>
        </figure>
        <div className='font-rye p-2 uppercase text-[12px] text-[#FADA7A] '>{name}</div>
    </div>
  )
}

export default Card
