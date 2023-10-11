import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen bg-white'>
      <h1 className='mx-2 text-4xl text-[#14213D]'>Carregando</h1>
      <span className='animate-spin w-10 h-10 bg-transparent border-2 border-t-[#14213D] border-l-[#14213D] rounded-full'></span>
    </div>
  )
}
