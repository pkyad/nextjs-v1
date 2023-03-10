import Logo from '@/components/atoms/logo'
import useStyles from './header.styles'
import UserActions from '@/components/molecules/userAction'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants'
import React from 'react'

interface HeaderPropsI {
  children?: JSX.Element
}

const Header = ({ children }: HeaderPropsI): JSX.Element => {
  const classess = useStyles({ size: '100%' })

  const router = useRouter()

  const navigateToHome = (): void => {
    void router.push(ROUTES.HOME)
  }

  return (
    <>
      <div className={classess.wrapper}>
        <div onClick={navigateToHome} className="flex items-center">
          <div className={classess.logoWrapper}>
            <Logo />
          </div>
          <div className={classess.brandName}>
            <span>App v1</span> <br />
          </div>
        </div>

        {children}
        <div className="ml-auto">
          <UserActions />
        </div>
      </div>
    </>
  )
}
export default Header
