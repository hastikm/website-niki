import React from 'react'

export const  Button1 = ({lable , iconUrl}) => {
  return (
    <>
    <button className='flex justify-center items-center gap-2 px-7 
    py-4 border font-montserrat leading-none bg-coral-red text-lg  rounded-full hover:bg-red-400' >
      {lable}

      {iconUrl && <img 
      className='rounded-full ml-2 bg-red-500 w-5 h-5'
      src={iconUrl} 
      alt="arrowright icon"
      />}

    </button>
    </>
  )
}
export default Button1;