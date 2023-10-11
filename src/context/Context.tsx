'use client';
import React, { ReactNode, createContext, useState } from "react";
import { InitialContextType } from "@/types/Context";

export const Context = createContext<InitialContextType>({
  duration: null,
  distance: null,
  typeTransport: '',
  fuelPrice: 0,
  fuelConsumption: 0,
  isSearching: true,
  setIsSearching: () => { },
  setFuelConsumption: () => { },
  setFuelPrice: () => { },
  setTypeTransport: () => { },
  setDuration: () => { },
  setDistance: () => { },
})

export default function ContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const [duration, setDuration] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [typeTransport, setTypeTransport] = useState('');
  const [fuelPrice, setFuelPrice] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);
  const [isSearching, setIsSearching] = useState(true);

  return (
    <Context.Provider
      value={{
        duration, distance, typeTransport, fuelPrice, fuelConsumption, isSearching, setIsSearching, setFuelConsumption, setFuelPrice, setDuration, setDistance, setTypeTransport
      }}>
      {children}
    </Context.Provider>
  )
}