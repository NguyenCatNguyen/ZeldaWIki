import React, { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const Compendium = () => {
  const searchRef = useRef(null);

  const categories = ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"];

  // Fetch data with useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ['compendium'],
    queryFn: () =>
      fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/all')
        .then(res => res.json())
        .then(result => result.data),
  });

  // Handle loading state
  if (isLoading) {
    return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="w-screen h-screen flex justify-center items-center">Oops, something went wrong: {error.message}</div>;
  }

  return (
    <div className="w-screen h-screen px-10">
      <h1 className="">Compendium</h1>
      <div id="search" className="px-10">
        <div id="searchBar" className="rounded-lg border-2 border-blue max-w-4xl max-h-[64px] flex p-1 mx-auto">
          <button className="bg-black text-white rounded">
            <FaSearch className="size-6 m-2" />
          </button>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="border-2 border-black w-full"
          />
        </div>

        <div id="categories" className="flex justify-center items-center flex-wrap p-1">
          {categories.map((category, index) => (
            <button
              key={index}
              className="m-2 hover:scale-110 hover:brightness-150 duration-200 cursor-pointer"
            >
              <img src={`./${category}.png`} alt={category} />
            </button>
          ))}
        </div>
      </div>

      <h2 className="py-3">All Categories</h2>
      <div className="flex justify-center items-center flex-wrap p-1 mx-10">
        {data.map(item => (
          <Card key={item.id} name={item.name} imgURL={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Compendium;