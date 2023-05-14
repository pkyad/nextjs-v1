import variables from './style.module.scss'

const Test = (): JSX.Element => {
	return (
		<>
			<h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
			<div className={variables.container}>
				<div className={variables.child}></div>
				<div className="second-child"></div>
				<div className={variables.inner}></div>
			</div>
			<div className="second-child"></div>
			{/* this does not get styles , means the parent child relationship is working fine */}
		</>
	)
}

export default Test
