import React from 'react'

export const  Button1 = ({lable , iconUrl}) => {
  return (
    <>
    <button className=' rounded-full ml-2 bg-red-500' />
      {lable}

      <img 
      src={iconUrl} 
      alt="arrowright icon"
      />

    <button/>
    </>
  )
}
export default Button1;