import { Context } from '@/context/Context'
import React, { useContext, useState } from 'react'

export default function InputAddress({placeholder}: {placeholder: string}) {
  return (
    <>
      <input type="text" placeholder={placeholder} className='w-full p-2 text-base border-none bg-[#e1e5f2] rounded-md my-2 focus:outline-none placeholder:text-black'/> 
    </>
  )
}