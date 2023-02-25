import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button } from '@pkyad/uilib1'
const Home = (): React.ReactNode => {
  const router = useRouter()
  useEffect(() => {}, [router])
  return (
    <>
      <h1>Home</h1>
      <Button color="success" onClick={() => {}}>
        Success Button
      </Button>
    </>
  )
}

export default Home
