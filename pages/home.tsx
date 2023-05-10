import { api } from '@/shared/api'
import test, { Button } from '@pkyad/uilib1'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Test = test

const Home = (): React.ReactNode => {
	const router = useRouter()
	const hello = api.example.hello.useQuery({ text: 'from tRPC' })
	useEffect(() => {}, [router])
	return (
		<>
			<h1>Home Edited</h1>
			<Button color="success" onClick={() => {}}>
				Success Button
			</Button>
			<h1>{hello.data?.greeting}</h1>
			<Test />
		</>
	)
}

export default Home
