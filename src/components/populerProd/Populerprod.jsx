import React from 'react';
import CardProduct from '../../section/Nav/CardProduct/CardProduct';
import { products } from '../../constans';

const PopularProducts = () => {
  return (
    <section className='py-0 mt-16 '>
      <div className='ml-24 '>
      <h2 className='text-[4rem] pb-6 max-xl:text-[2.5rem] font-bold'>
        our <span className='text-coral-red'>popular</span> products
      </h2>
      <p className='text-[1.4rem] text-gray-400 max-xl:text-[1.2rem]'>
        Browse through our most popular products
        <br /> carefully chosen by our happy customers
      </p>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 justify-items-center'>
        {products.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts;
