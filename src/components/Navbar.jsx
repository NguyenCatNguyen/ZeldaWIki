// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Customize animation duration here (in milliseconds)
  const animationDuration = 1500;

  // Handle click outside to close nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Home', href: '#Home' },
    { label: 'Favorite', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Github', href: 'https://github.com/NguyenCatNguyen/ZeldaWIki' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-8">
      <div className="relative">
        {/* Toggle Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 rounded-full border-0 cursor-pointer absolute right-0 top-[-18px] m-5 z-20 transition-all ease-in-out
          ${isOpen ? 'bg-black scale-100 duration-200' : 'bg-[#56F1FF] scale-100 hover:scale-110 duration-2000'}`}/>

        {/* Navigation Menu */}
        <nav
          ref={navRef}
          className={`
            fixed inset-0 bg-[#56F1FF] z-10
            flex flex-col justify-center items-center
            transition-all ease-in-out 
            
          `}
          style={{
            clipPath: isOpen 
              ? 'circle(150% at calc(100% - 55px) 47px)' 
              : 'circle(0% at calc(100% - 55px) 47px)',
            transitionDuration: `${animationDuration}ms`
          }}
        >
          <ul className=" w-full text-center">
            {navItems.map((item, index) => (
              <li key={index} className="text-6xl leading-tight py-4 uppercase ">
                <a 
                  href={item.href}
                  className="text-black no-underline hover:font-bold transition-all duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;