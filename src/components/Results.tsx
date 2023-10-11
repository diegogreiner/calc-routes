import React, { useContext } from 'react'
import Distance from './Distance'
import Duration from './Duration'
import { Context } from '@/context/Context'
import TotalPrice from './TotalPrice'

export default function Results() {
  const ctx = useContext(Context)

  return (
    <div className='flex flex-col pl-[20%] py-2 mx-4 my-4 text-sm bg-[#e1e5f2] rounded-md'>
        <Distance />
        <Duration />
        {ctx.typeTransport === 'DRIVING' && ctx.fuelConsumption !== 0 && ctx.fuelPrice !== 0 && <TotalPrice />}
    </div>
  )
}