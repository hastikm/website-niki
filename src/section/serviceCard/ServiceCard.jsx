import React from 'react'

const ServiceCard = ({imgURL , label , subtext}) => {
  return (
    <div className='sm:w[350px] sm:min-w[350px] w-full rounded[60px] shadow-3xl py-10 px-10'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>

        <img src={imgURL} alt="icon" width={24} height={24}/>
        </div>
       <h1 className='text-[25px] font-bold pt-4'>{label}</h1>
       <p className='pt-5 text-[17px] text-gray-600'>{subtext}</p>
      
      
    </div>
  )
}

export default ServiceCard
