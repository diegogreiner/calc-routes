'use client'
import React, { useEffect, useState } from 'react'
import Maps from '../components/Maps'
import Loading from '@/components/Loading'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <main>
      <Maps />
    </main>
  )
}
