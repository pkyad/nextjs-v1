import apiClient from '@/shared/http-client'
import { trpc } from '@/shared/trpc-client'
import Test, { Button } from '@pkyad/uilib1'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Home = (): React.ReactNode => {
	const router = useRouter()
	const { data, isLoading } = trpc.example.hello.useQuery({ text: 'from tRPC' })

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const getData = async () => {
		const data = await apiClient.hello()
		// eslint-disable-next-line no-console
		console.log(data.tasks)
	}

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {}, [router])
	return (
		<>
			<h1>Home Edited</h1>
			<Button primary onClick={() => {}} label="OK" />
			{isLoading ? <h1>Loading....</h1> : <h1>{data?.greeting}</h1>}
			<Test />
		</>
	)
}

export default Home
