import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import test, { Button } from '@pkyad/uilib1'

const Test = test

const Home = (): React.ReactNode => {
  const router = useRouter()
  useEffect(() => {}, [router])
  return (
    <>
      <h1>Home Edited</h1>
      <Button color="success" onClick={() => {}}>
        Success Button
      </Button>
      <Test />
    </>
  )
}

export default Home
