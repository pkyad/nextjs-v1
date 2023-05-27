import Header from '@/components/molecules/header'
import Navigator from '@/components/molecules/navigator'
import Context from '@/shared/appContext'
import { ROUTES } from '@/shared/constants'
import apiClient from '@/shared/http-client'
import { trpc } from '@/shared/trpc-client'
import { IAgent } from '@/shared/types'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import '../node_modules/@pkyad/uilib1/dist/esm/index.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const router = useRouter()
	const [user, setUser] = useState<IAgent | undefined>()
	const [loading, setLoading] = useState<boolean>(true)

	const fetchUser = async (): Promise<void> => {
		try {
			const data = (await apiClient.getCurrentSession()) as IAgent
			setUser(data)
			setLoading(false)
		} catch (error) {
			setUser(undefined)
			setLoading(true)
			void router.push(ROUTES.SIGN_IN)
		}
	}

	useEffect(() => {
		void fetchUser()
	}, [])

	const state = {
		setMessage: (args: any) => {
			// console.log('args', args)
		},
		navigateToSignIn: async () => {
			await apiClient.logout()
			void router.push(ROUTES.SIGN_IN)
			setUser(undefined)
		},
		user,
		loading,
		fetchUser
	}
	if (router.asPath === '/docs') {
		return (
			<>
				<Context.Provider value={state}>
					<Head>
						<title>API Docs</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<Header />
					<Component {...pageProps} />
				</Context.Provider>
			</>
		)
	} else if (router.asPath === ROUTES.SIGN_IN) {
		return (
			<>
				<Head>
					<title>Login Page</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Context.Provider value={state}>
					<Component {...pageProps} />
				</Context.Provider>
			</>
		)
	} else {
		return (
			<>
				{loading && (
					<>
						<Head key={'loading-head'}>
							<title>Loading...</title>
							<link rel="icon" href="/favicon.ico" />
						</Head>
						<span>Loading...</span>
					</>
				)}
				{!loading && (
					<Context.Provider value={state}>
						<Head>
							<title>App home</title>
							<link rel="icon" href="/favicon.ico" />
						</Head>
						<Header>
							<Navigator className="ml-[15rem]" />
						</Header>
						<div className="mt-[5rem]">
							<Component {...pageProps} />
						</div>
					</Context.Provider>
				)}
			</>
		)
	}
}

export default trpc.withTRPC(MyApp)
