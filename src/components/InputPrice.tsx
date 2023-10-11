import { Context } from '@/context/Context'
import React, { useContext, useState } from 'react'

export default function InputPrice() {
  const ctx = useContext(Context)
  const [value, setValue] = useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatInput = input.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(\d{2})/, "$1,$2");

    setValue(formatInput)
    const formatInputFloat = formatInput.replace(',', '.')
    ctx.setFuelPrice(Number(formatInputFloat))
  }

  return (
    <div className='w-full'>
      <div className='flex justify-center p-1 text-base border-none bg-[#e1e5f2] rounded-md md:p-0 md:py-1 lg:p-1'>
        Preço R$<input type='text' placeholder='00,00' value={value} maxLength={5} onChange={e => handleChange(e)} className='w-10 border-none bg-[#e1e5f2] focus:outline-none placeholder:text-black px-0' /> L
      </div>
    </div>
  )
}
