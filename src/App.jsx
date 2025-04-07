
import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Compendium from './components/Compendium.jsx'
import Favorite from './components/Favorite.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Compendium/>
      <Favorite/>
      {/* <Footer/> */}
      
    
    </div>
  )
}

export default App