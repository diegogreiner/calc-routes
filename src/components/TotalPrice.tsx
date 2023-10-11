import { Context } from '@/context/Context'
import React, { useContext, useEffect, useState } from 'react'

export default function TotalPrice() {
  const ctx = useContext(Context)
  const [value, setValue] = useState('')

  useEffect(() => {
    const distanceNumber = Number(ctx.distance?.replace('km',''));
    console.log(distanceNumber)
    console.log(ctx.fuelConsumption)
    console.log(ctx.fuelPrice)
    const total = (distanceNumber / ctx.fuelConsumption) * ctx.fuelPrice
    setValue(`R$ ${total.toFixed(2).replace('.', ',')}`)
  })

  return (
    <div className='grid grid-cols-6 grow'>
      <p className='col-start-1 col-span-3'>Total gasto: </p>
      <span className='col-start-4 col-span-3'>{value}</span>
    </div>
  )
}
