import React from 'react'
import { FaHeart } from "react-icons/fa6";


const Card = ({img, name, id}) => {
  return (
    <div key={id} className='sm:w-[350px] w-[285px] relative mx-3 mb-5'>
      <div className='flex rounded border-1 border-white p-3 
                   transition-all duration-400
                     '>
        <img className='sm:size-30 size-25 rounded' src={img} alt="" />
        <div className='flex flex-col ml-5'>
          <div className='font-rye text-[#FADA7A] sm:text-xl text-md capitalize'>{name}</div>
          <div className='font-bold bg-blue-200 w-fit p-1 rounded text-black text-md'>{id}</div>
          <button>
            <FaHeart className='absolute right-3 bottom-3 cursor-pointer hover:scale-115 hover:text-red-500 transition-all duration-400' />
          </button>
        </div>
      </div>
    </div>
  )


}

const Favorite = () => {
  const favorite = JSON.parse(localStorage.getItem('favorites')) || [];

 

  return (
    <div className='overflow-x-hidden h-screen' id="Favorite">
      <h1>Your Favorite</h1>
      <div className="flex justify-center items-center flex-wrap p-1 mx-4 sm:mx-10">
        {favorite.length === 0 
        ? (
          <div className='flex flex-col justify-center items-center'>
            <p>No favorites yet! Click the ❤️ button to add some.</p>
            <img src="404.png" alt="" className='w-[200px]' />
          </div>
        )
        : (
          <div className='flex flex-wrap justify-center'>
            {favorite.map(item => (
              <Card 
                id={item.id} 
                name={item.name} 
                img={item.image}
              />
            ))}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Favorite