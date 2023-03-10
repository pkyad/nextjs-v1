import Image from 'next/image'
import React from 'react'

const Logo = (): JSX.Element => {
  return (
    <Image src="/logo.png" alt="App logo" width={100} height={100} />
  )
}
export default Logo
