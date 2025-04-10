import React from 'react'
import {navItems} from './index.js'





const Footer = () => {
  return (
    <div className=' w-full px-15 text-white/80 flex flex-col  mt-15 bg-slate-900 py-10'>
      <div className='flex flex-col sm:flex-row justify-around sm:items-center sm:px-15 px-0'>
        {navItems.map((item, i) => (
          <a className='cursor-pointer text-2xl border-b-1 pt-5 pl-2 
                      hover:text-white duration-400 transition-color 
                       sm:border-none sm:pl-0' target='_blank' href={item.href} key={i}>{item.label}</a>
        ))}
      </div>
      <div>
        <div className='text-gold font-rye text-3xl text-center py-5 pt-10'>CN</div>
        <div className='text-center'>Coppyright @ 2025 NguyenCatNguyen <br />Developed by NguyenCat Nguyen</div>
      </div>
      
    </div>
  )
}

export default Footer