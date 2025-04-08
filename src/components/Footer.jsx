import React from 'react'


const navItems = [
  { label: 'Home', href: '#Home' },
  { label: 'API', href: 'https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api'},
  { label: 'Portfolio', href: '#' },
  { label: 'Github', href: 'https://github.com/NguyenCatNguyen/ZeldaWIki' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cat-nguyen-626621235/' },
];


const Footer = () => {
  return (
    <div className='bg-[#161616] w-full flex flex-col sm:flex-row justify-around items-center py-5'>
      <div className='text-gold font-rye text-3xl'>CN</div>
      <div className='py-5'>
        {navItems.map((item, i) => (
          <a className='px-3 cursor-pointer'
           href={item.href} key={i}>{item.label}</a>
        ))}
      </div>
      <div className='text-center'>Coppyright @ 2025 NguyenCatNguyen <br />Developed by NguyenCat Nguyen</div>
      
    </div>
  )
}

export default Footer