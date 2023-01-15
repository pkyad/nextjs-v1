import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Home = (): React.ReactNode => {
  const router = useRouter()
  useEffect(() => {}, [router])
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home
