import React from 'react';
import Button1 from '../../section/Nav/button/button';
import shoe8 from '../../assets/images/shoe8.svg'
const superqulity = () => {
  return (
    <section className='flex justify-around  flex-col sm:flex-col lg:flex-row gap-12 px-6 py-12 items-center '>
    <div>
      <h1 className='text-[3.7rem] font-bold'>We Provide You <span className='text-coral-red'>super
        <br /> Quality </span>shoes  </h1>

      <p className='text-gray-400 text-[22px] mt-2'>iscover the perfect blend of style and comfort with our premium shoes
        <br /> 
        Crafted with care, each pair guarantees durability and a flawless fit.
        <br /> Step into confidence and elevate your everyday look with our super quality collection.</p>
         
        <p className='text-gray-400 mt-10 text-[22px]'>Step up your shoe game with our super quality collection.
          <br /> Designed for comfort, built for style, and made to last</p>
          <div className='pt-10'>
          <Button1 lable={'View details'} iconUrl={''} />
          </div>
           
    </div>
        
        <img  src={shoe8} alt="quilty imag" className='object-contain'/>
       
    </section>

    
  )
}

export default superqulity
