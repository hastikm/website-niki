import React from 'react';
import Button1 from '../../section/Nav/button/button';
import Offer from '../../assets/images/offer.svg'

const offer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>

      <div className='flex-1'>
    <img src={Offer} alt="offer" 
      width={773}
          height={687}
          className='object-contain w-full'/>

      </div>

      <div className='flex flex-1 flex-col'>
      <h1 className='text-[70px] font-bold '><span className='text-coral-red'> Special</span> Offer</h1>
      <p className='text-[22px] pt-7 text-gray-500'>Enjoy exclusive discounts on our best-selling shoes and upgrade your look without breaking the bank Hurry up this deal won’t last long Discover a curated collection of the most stylish and comfortable shoes, now available at special discounted</p>
      
      <p className='text-[22px] pt-7 text-gray-500'>
          Don’t miss out! Grab your favorite shoes now with our special limited-time discount.
          Step out in style and comfort while saving big only for a short time! Discover a curated collection of the most stylish and comfortable shoes, now available at special discounted</p>

           <div className='pt-20 '>
          <Button1 lable={'View details'}   />
          </div>
          </div>
    </section>
  )
}

export default offer
