export interface IDropdownOptions {
	value: string
	displayValue: string
}

export interface INavItemProps {
	link: string
	label: string
	strict?: boolean
}

/**
 *
 * @export
 * @interface IUserMetaData
 */
interface IUserMetaData {
	/**
	 * The user ID.
	 * @type {string}
	 * @memberof IUserMetaData
	 */
	key: string
	value?: string
}

export interface IAgent {
	id: number | string
	uid?: string
	userType?: string
	metaData?: IUserMetaData[]
	firstName?: string
	groupName?: string
	lastName?: string
	isActive?: boolean
	createdAt?: string
	updatedAt?: string
}

export interface IAppState {
	loading: boolean
	user: IAgent | null | undefined
}

export interface IFilterOptionValue {
	selector: string
	value: string[]
}

export interface IFilterOption {
	selector: string
	options: string[]
}

export interface AppContextInterface extends IAppState {
	setMessage?: (args: any) => void
	navigateToSignIn?: () => void
	fetchUser?: () => Promise<void>
}
