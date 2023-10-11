import React, { useContext, useState } from 'react'
import bicycle from '../assets/icons/bicycle.png'
import bicycleColor from '../assets/icons/bicycle-color.png'
import car from '../assets/icons/car.png'
import carColor from '../assets/icons/car-color.png'
import walking from '../assets/icons/walking.png'
import walkingColor from '../assets/icons/walking-color.png'
import Image from 'next/image'
import { Context } from '@/context/Context'

export default function TypeTransport() {
  const ctx = useContext(Context)
  const [isHover, setIsHover] = useState(0)

  const handleClick = (n: number) => {
    n === 1 ? ctx.setTypeTransport('DRIVING') : n === 2 ? ctx.setTypeTransport('BICYCLING') : ctx.setTypeTransport('WALKING')
  }

  return (
    <div className='flex justify-around'>
      <div onMouseEnter={() => setIsHover(1)} onMouseLeave={e => setIsHover(0)} onClick={e => handleClick(1)} className='cursor-pointer transition-all duration-1000'>
        <Image src={ctx.typeTransport === 'DRIVING' ? carColor : isHover === 1 ? carColor : car} alt='Dirigindo' width={50} height={50} />
      </div>
      <div onMouseEnter={() => setIsHover(2)} onMouseLeave={e => setIsHover(0)} onClick={e => handleClick(2)} className='cursor-pointer transition-all duration-1000'>
        <Image src={ctx.typeTransport === 'BICYCLING' ? bicycleColor : isHover === 2 ? bicycleColor : bicycle} alt='Pedalando' width={50} height={50} />
      </div>
      <div onMouseEnter={() => setIsHover(3)} onMouseLeave={e => setIsHover(0)} onClick={e => handleClick(3)} className='cursor-pointer transition-all duration-1000'>
        <Image src={ctx.typeTransport === 'WALKING' ? walkingColor : isHover === 3 ? walkingColor : walking} alt='Andando' width={50} height={50} />
      </div>
    </div>
  )
}
