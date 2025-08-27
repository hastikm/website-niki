import React from 'react';
import Button1 from '../../section/Nav/button/button';
import  { arrowRight } from '../../assets/icons'
import {statistics} from '../../constans/index';

const Hero = () => {
  return (
   <section
   id='home'
   className='w-full flex xl:flex-row flex-col justify-center
     min-h-screen gap-10 max-container 
 '
   >
    <div className='relative xl:2/5 flex flex-col justify-center items-start
    w-full max-xl:padding-x pt-28 pl-14'>
      <p className='text-black font-palanquin   text-xl '>our summer collection</p>

      <h1 className='mt-10  text-8xl max-sm:text-[70px] font-bold '>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 '>The new Arrival</span> <br />
      <span className='text-coral-red inline-block mt-3 mr-5'>Nike  </span>Shoes
      </h1>
      <p className='text-gray-500  mt-5 mb-14 text-lg leading-8 sm:max-w-sm'>
        Discover stylish Nike arrives, quality comfort, 
        and innovation for your active life</p>
      
       <Button1 lable='shope now' 
       iconUrl={arrowRight}/>

       <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((state)=>(
            <div className='font-bold text-[15px] sm:text-3xl font-palanquin' key={state.label}>
              <p className='text-coral-red'>{state.value}</p>
              <p className='leading-7 text-slate-500'>{state.label}</p>
            </div>
          ))}
       </div>
  
    </div>
   </section>
  )
}

export default Hero
