import React from 'react';
import starimg from '../../../assets/icons/star.svg';

const CardProduct = ({imgURL , name , price }) => {
  return (
    <div className='my-10 max-xl:my-10 '>
      
      <img src={imgURL} alt="card imge" />
      <div className='pl-2 py-4'>
       <section className='flex gap-2 '>
            <img src={starimg} alt="star img" />
            <p className='text-gray-400 font-semibold text-[17px]'>(4.5)</p>
       </section>
       <h2 className='py-2 font-sans text-[20px] font-bold '>{name}</h2>
       <p className='text-[18px] text-gray-400 font-semibold  '>{price}</p>
       </div>
    </div>
  )
}

export default CardProduct;
