import Logo from '@/components/atoms/logo'
import UserActions from '@/components/molecules/userAction'
import { ROUTES } from '@/shared/constants'
import { useRouter } from 'next/router'
import React from 'react'
import classess from './header.module.scss'

interface HeaderPropsI {
	children?: JSX.Element
}

const Header = ({ children }: HeaderPropsI): JSX.Element => {
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
