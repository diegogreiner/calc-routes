export type InitialContextType = {
  duration: string | null,
  distance: string | null,
  typeTransport: string,
  fuelPrice: number,
  fuelConsumption: number,
  isSearching: boolean,
  setIsSearching: (isSearching: boolean) => void,
  setFuelConsumption: (fuelConsumption: number) => void,
  setFuelPrice: (fuelPrice: number) => void,
  setTypeTransport: (transport: string) => void,
  setDuration: (duration: string | null) => void,
  setDistance: (distance: string | null) => void,
}