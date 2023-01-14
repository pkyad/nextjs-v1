import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from './navItem.styles'
import { INavItemProps } from '@/shared/types'
import React from 'react'

const NavItem = ({ link, label, strict = false }: INavItemProps): JSX.Element => {
  const { route } = useRouter()
  const classess = useStyles()

  let active
  if (strict) {
    active = route === link
  } else {
    active = route.includes(link)
  }

  return (
    <>
      <li className={active ? 'active' : ''}>
        <Link href={link}>
          <span className={classess.link}>{label}</span>
        </Link>
      </li>
    </>
  )
}

export default NavItem
