import React from 'react';
import Button1 from '../../section/Nav/button/button';
import  { arrowRight } from '../../assets/icons'

const Hero = () => {
  return (
   <section
   id='home'
   className='w-full flex xl:flex-row flex-col justify-center
    border-2 min-h-screen gap-10 max-container 
 '
   >
    <div className='relative xl:2/5 flex flex-col justify-center items-start
    w-full max-xl:padding-x pt-28'>
      <p className='text-red-600'>our summer collection</p>
      <h1> <span>The new Arrival</span> <br />
      <span>Nike Shoes </span>
      </h1>
      <p>Discover stylish Nike arrives, quality comfort, and innovation for your active life</p>
      
       <Button1 lable='shope now' 
       iconUrl={arrowRight}/>
  
    </div>
   </section>
  )
}

export default Hero
