import { Context } from '@/context/Context'
import React, { useContext } from 'react'

export default function Duration() {
  const ctx = useContext(Context)

  return (
    <div className='grid grid-cols-6 grow'>
      <p className='col-start-1 col-span-3'>Dururação:</p>
      <span className='col-start-4 col-span-3'>{ctx.duration}</span>
    </div>
  )
}
