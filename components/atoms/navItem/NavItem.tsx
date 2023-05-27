import { INavItemProps } from '@/shared/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './navItem.module.scss'

const NavItem = ({
	link,
	label,
	strict = false
}: INavItemProps): JSX.Element => {
	const { route } = useRouter()

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
					<span className={styles.link}>{label}</span>
				</Link>
			</li>
		</>
	)
}

export default NavItem
