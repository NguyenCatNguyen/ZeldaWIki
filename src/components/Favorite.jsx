import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { IoMdReturnLeft } from "react-icons/io";


const Card = ({ img, name, id, onToggleFavorite}) => {
  return (
    <div className='sm:w-[350px] w-[285px] relative mx-3 mb-5 cursor-pointer'>
      <div className='flex rounded border-1 border-white p-3 transition-all duration-400'>
        <img className='sm:size-30 size-25 rounded' src={img} alt="" />
        <div className='flex flex-col ml-5'>
          <div className='font-rye text-[#FADA7A] sm:text-xl text-md capitalize'>{name}</div>
          <div className='font-bold bg-blue-200 w-fit p-1 rounded text-black text-[13px]'>{id}</div>
          <button onClick={() => onToggleFavorite(id)}>
            <FaHeart className='absolute right-3 bottom-3 cursor-pointer transition-all duration-400 text-red-500 hover:scale-110'/>
          </button>
        </div>
      </div>
    </div>
  );
};

const Favorite = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  

  return (
    <div className='overflow-x-hidden min-h-screen relative' id="Favorite">
      <h1 className="text-center font-rye my-5 text-[#FADA7A]">Your Favorites</h1>
      {/* Return button */}
      
      <div className="flex justify-center items-center flex-wrap p-1 mx-4 sm:mx-10">
        {favorites.length === 0 ? (
          <div className='flex flex-col justify-center items-center'>
            <p className='text-xl mb-4'>No favorites yet!</p>
            <p>Click the ♥ button on items to add some.</p>
            <img src="404.png" alt="No favorites" className='w-[200px] mt-4' />
          </div>
        ) : (
          <div className='flex flex-wrap justify-center'>
            {favorites.map(item => (
              <Card 
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.image}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;