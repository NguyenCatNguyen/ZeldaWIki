import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeaderAnimation = ({title}) => {
    
  return (
    <div className='w-full '>
      <div>
          <h1 id='header' className='header text-center my-10'>{title}</h1>
      </div>
    </div>
  )
}

export default HeaderAnimation