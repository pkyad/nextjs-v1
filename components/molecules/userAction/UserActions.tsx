import useAppContext from '@/shared/hooks/useAppContext'
import React from 'react'
import classess from './userAction.module.scss'

const UserActions = (): JSX.Element => {
	const { navigateToSignIn, user } = useAppContext()

	const handleLogout = (): void => {
		if (navigateToSignIn != null) {
			navigateToSignIn()
		}
	}

	return (
		<div className={classess.wrapper}>
			<span>{user?.firstName}</span> <br />
			<span className="!cursor-pointer">
				<a onClick={handleLogout} className={`${classess.logout}`}>
					Logout
				</a>
			</span>
		</div>
	)
}

export default UserActions
