import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import Modal from './Modal';

const Compendium = () => {
  // Image names for categories
  const categoriesImg = ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"];
  const searchRef = useRef(null);
  
  // Categories button
  const [categories, setCategories] = useState("");
  
  const handleCategory = (category) => {
    setCategories(category);
    console.log(categories);
  }
  
  // Fetch data from API
  const fetchData = async () => {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
    if (!response.ok) throw new Error("API fetch failed");
    const res = await response.json();
    return res.data;
  }
  
  // Use React Query hook directly in the component
  const { data, isLoading, isError } = useQuery({
    queryKey: ['compendium'],
    queryFn: fetchData,
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data: {isError.message}</div>;

  return (
    <div className="w-screen h-screen px-10 relative" id='Compendium'>
      <h1 className="">Compendium</h1>
      <div id="search" className="px-10">
        <div id="searchBar" className="rounded-lg border-2 border-blue max-w-4xl max-h-[64px] flex p-1 mx-auto">
          <button className="bg-black text-white rounded"><FaSearch className="size-6 m-2" /></button>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="border-2 border-black w-full"
          />
        </div>
        
        <div id="categories" className="flex justify-center items-center flex-wrap p-1">
          {categoriesImg.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategory(category)} // Run handleCategory function when button is clicked
              className="m-2 hover:scale-110 hover:brightness-150 duration-200 cursor-pointer">
              <img src={`./${category}.png`} alt={category} />
            </button>
          ))}
        </div>
      </div>
      <h2 className="py-3">All Categories</h2>
      <div className="flex justify-center items-center flex-wrap p-1 mx-10">
        {data && data.map(item => (
          <Card key={item.id} name={item.name} imgURL={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Compendium;