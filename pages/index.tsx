import { ROUTES } from '@/shared/constants'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const Home = (): React.ReactNode => {
  const router = useRouter()
  useEffect(() => {
    void router.push(ROUTES.HOME)
  }, [router])

  return <></>
}

export default Home
