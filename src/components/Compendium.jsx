import React, { useRef, useState, useMemo, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import Pagination from './Pagination';


const Compendium = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Set search term
  const [categories, setCategories] = useState(""); // Categories button
  const [currentPage, setCurrentPage] = useState(1); // Set current page for pagination
  const itemsPerPage = 30; // Number of items per page
  

  const searchRef = useRef(null); // searchRef

  // Scroll to the compendium section
  const compendiumRef = useRef(null);
  const scrollToCompendium = () => {
    compendiumRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const handlePageChange = (page) => { 
    setCurrentPage(page); // Set the current page to the new page
    scrollToCompendium(); // Scroll to the top of the compendium section
  }

  // Image names for categories
  const categoriesImg = ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"];
  
  
  
  //Test case for categories
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


  // Setup filter data
  const filterData = useMemo(() => {
    if (!data) return [];

    return data.filter(item => {
      // Turn the search term into lowercase
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = ! categories || item.category === categories.toUpperCase();
      return matchesSearch && matchesCategory;
    })
  }, [data, searchTerm, categories]); // Re-run when data, searchTerm, or categories change

  const totalPages = Math.ceil(filterData.length / itemsPerPage); // Calculate total pages

  // PAGINATION SETUP
  const paginatedData = filterData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(()=>{
    setCurrentPage(1);
  }, [searchTerm, categories]);

  // HANDLE SEARCH BAR
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click'){
      setSearchTerm(searchRef.current.value);
    }
  }
  

  return (
    <div className="w-screen h-screen px-10 relative" id='Compendium' ref={compendiumRef}>
      
      <h1 className="">Compendium</h1>
      <div id="search" className="sm:px-10 px-0">
        <div id="searchBar" className="rounded-lg border-2 border-blue max-w-4xl max-h-[64px] flex p-1 mx-auto">
          <button className="bg-black text-white rounded"><FaSearch className="size-6 m-2" /></button>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="border-2 border-black w-full"
            onKeyDown={handleSearch} // Call handleSearch when Enter is pressed
          />
        </div>
        
        {/* Categories Button */}
        <div id="categories" className="flex justify-center items-center flex-wrap mt-2">
          {categoriesImg.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategory(category)} // Run handleCategory function when button is clicked
              className="
                  sm:size-20 size-12 mx-2
                  hover:scale-110 hover:brightness-150 duration-200 cursor-pointer">
              <img src={`./${category}.png`} alt={category} />
            </button>
          ))}
        </div>



      </div>
      <h2 className="py-3">
        {categories ? `${categories}` : 'All Categories'}
        {searchTerm && ` matching "${searchTerm}"`}
      </h2>

      {/* Loading and Error handling */}
      { paginatedData.length === 0 && (<p className='text-center text-2xl mt-3'>Search don't match any document</p>)}
      
      {/* Card component */}
      <div className="flex justify-center items-center flex-wrap p-1 mx-10">
        {paginatedData.map(item => (
          <Card key={item.id} name={item.name} imgURL={item.image} id={item.id} />
        ))}
      </div>
      
      {/* If there are more than one page then show the Pagination */}
      {totalPages > 1 && (<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>)}
    </div>
  );
};

export default Compendium;