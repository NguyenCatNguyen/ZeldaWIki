
import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
      <Hero/>
    
    </div>
  )
}

export default App