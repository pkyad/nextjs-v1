import NavItem from '@/components/atoms/navItem'
import React from 'react'
import { menuItems } from './navigator.constants'
import clssess from './navigator.module.scss'

interface INavigatorProps {
	className: string
}

const Navigator = ({ className }: INavigatorProps): JSX.Element => {
	return (
		<ul className={`flex flex-row ${className} ${clssess.wrapper}`}>
			{menuItems.map((menuItem, index) => {
				return <NavItem key={index} {...menuItem} />
			})}
		</ul>
	)
}

export default Navigator
