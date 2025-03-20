
import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Compendium from './components/Compendium.jsx'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
      <Hero/>
      <Compendium/>
    
    </div>
  )
}

export default App