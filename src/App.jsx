import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Compendium from './components/Compendium.jsx';
import Favorite from './components/Favorite.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  // State to track which section is active (default: compendium)
  const [activeSection, setActiveSection] = useState('Compendium');

  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Pass the click handler to Navbar */}
      <Navbar onNavClick={handleNavClick} />
      
      <Hero />
      
      {/* Only show Compendium when active */}
      {(activeSection === 'Compendium' || activeSection === 'Home') && <Compendium />}
      
      {/* Only show Favorite when active */}
      {activeSection === 'Favorite' && <Favorite />}
      
      <Footer/>
    </div>
  );
};

export default App;