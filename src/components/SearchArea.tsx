import { Context } from '@/context/Context'
import { SearchAreaProps } from '@/types/SearchArea'
import { StandaloneSearchBox } from '@react-google-maps/api'
import React, { useContext, useState } from 'react'
import InputAddress from './InputAddress'
import TypeTransport from './TypeTransport'
import InputFuel from './InputFuel'
import InputPrice from './InputPrice'
import Results from './Results'
import Loading from './Loading'

export default function SearchArea(props: SearchAreaProps) {
  const ctx = useContext(Context)

  const handleClick = () => {
    ctx.setIsSearching(false)
    props.traceRoute()
  }

  return (
    <section className="opacity-animation absolute top-0 left-0 bg-[#FFFFFF] py-1 w-full min-w-min rounded-br-lg sm:w-1/2 md:w-2/5 xl:w-1/4 2xl:w-1/4">
      {
        ctx.isSearching &&
        <div className='opacity-animation'>
          <div className='mt-2 text-center text-lg text-[#14213D] font-bold'>Trace seu trajeto!</div>
          <div className="py-2 px-4 ">
            <StandaloneSearchBox
              onLoad={props.onLoadA}
              onPlacesChanged={props.onPlacesChangedA}
            >
              <InputAddress placeholder={"Origem"} />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={props.onLoadB}
              onPlacesChanged={props.onPlacesChangedB}
            >
              <InputAddress placeholder={"Destino"} />
            </StandaloneSearchBox>
          </div>
          <div className='py-2 px-4'>
            <TypeTransport />
          </div>
          {
            ctx.typeTransport === 'DRIVING' &&
            <div className='flex justify-around flex-col py-2 px-4 transition-all duration-1000 gap-2 md:gap-1 md:flex-row'>
              <InputFuel />
              <InputPrice />
            </div>
          }
          <div className='py-2 px-4'>
            <button onClick={handleClick} className='w-full rounded-md py-2 bg-[#14213D] text-lg text-white hover:opacity-90'>Calcular Rota</button>
          </div>
          </div>
      }
      {
        ctx.isSearching === false &&
        <div className='opacity-animation'>
          <div className='mt-2 text-center text-lg text-[#14213D] font-bold'>Resultado</div>
          <Results />
        </div>
      }
    </section >
  )
}