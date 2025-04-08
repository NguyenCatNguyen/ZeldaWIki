import React from 'react'
import { useState, useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";




const Data = ({name, description}) => {
  return(
    <div className=''>
      <div className='sm:text-lg text-md'>
        <span className='font-bold font-rye text-blue-300'
        >• {name}: </span>{description}</div>
    </div>
  )

}

const Modal = ({isOpen, onClose, entry, heart}) => {
  if (!isOpen) return null;

  const renderArrayData = (data) => {
    if (!data || data.length === 0) return 
    return data.join(", ");
  }

  // Favorite setup
  const [isFavorite, setIsFavorite] = useState(false);

  const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

  useEffect(() => {
    setIsFavorite(getFavorites().some(fav => fav.id === entry?.id));
  }, [entry])

  const toggleFavorite = () => {
    const favorites = getFavorites();
    const updatedFav = isFavorite
      ? favorites.filter(fav => fav.id !== entry.id)
      : [...favorites, entry];

      localStorage.setItem('favorites', JSON.stringify(updatedFav));
      setIsFavorite(!isFavorite);
  }





  return (
    <div className='fixed inset-0 flex justify-center items-center z-50 backdrop-blur-xs transition-transform duration-300'>
      <div className='relative bg-[#04080f] sm:rounded-lg flex flex-col items-center 
                        max-w-[500px] sm:max-h-[90vh] h-full flex-1 '>
       
        <button onClick={onClose} className='absolute right-5 top-5 cursor-pointer'><IoCloseSharp className='size-8 hover:text-red-600 transition-colors duration-400' /></button>
       
       
       <button className='absolute right-5 bottom-5 cursor-pointer'
               onClick={toggleFavorite}>
                {isFavorite 
                    ? <FaHeart className='size-8 text-red-600 '/> 
                    : <FaHeart className='size-8 hover:text-red-600 hover:scale-105 transition-colors duration-400'/> }
          
        </button>
       
        <figure className='w-full max-w-[350px] sm:px-3 px-10 pt-14'>
          <img src={entry.image} alt="" 
          className='w-full h-full object-cover rounded-lg' />
        </figure>
        
        <h2 className='text-center font-rye my-2 text-[#FADA7A] capitalize'>{entry.name}</h2>
        <div className='px-5 mb-15 overflow-y-auto scrollbar-none'>
          <Data name="Description" description={entry.description}  />
          {/* If data is null or empty dont display */}
          <Data name="Category" description={entry.category} />
          {(entry.common_locations || []).length > 0 && (<Data name="Common Location" description={renderArrayData(entry.common_locations)} />)}
          {entry.hearts_recovered && (<Data name="Heart Recovery" description={entry.hearts_recovered} />)}
          {entry.cooking_effect && (<Data name="Cooking Effect" description={entry.cooking_effect} />)}
          {(entry.drop || []).length > 0 && (<Data name="Droppable Items" description={renderArrayData(entry.drop)} />)}

        </div>
      </div>
    </div> 
  )
}

export default Modal