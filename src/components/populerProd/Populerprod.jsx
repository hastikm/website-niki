import React from 'react';
import CardProduct from '../../section/Nav/CardProduct/CardProduct';
import { products } from '../../constans';
const populerprod = () => {
  return (
   
    <section className='py-0'>

      <h2 className='text-[4rem] pb-10  max-xl:text-[2.5rem] font-bold padding-top' >our <span className='text-coral-red'>popular</span> populer products</h2>
         <p className='text-[1.4rem] text-gray-400 max-xl:text-[1.2rem]'>Browse through our most popular products
        <br /> carefully chosen by our happy customers</p>

        <div className='flex justify-between'>
      {products.map((product) => (
        <div >
        <CardProduct
     {...product}
        />
        </div>

      ))}
       </div>
    </section>
  )
}

export default populerprod
