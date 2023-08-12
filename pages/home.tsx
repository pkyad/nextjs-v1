import apiClient from '@/shared/http-client'
import { trpc } from '@/shared/trpc-client'
import Test, {
	Button,
	Icons8Bookmark,
	Icons8DownloadFromTheCloud,
	Icons8Picture
} from '@pkyad/uilib1'
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
			<Icons8Bookmark width="5rem" height="5rem" />
			<Icons8Picture width="5rem" height="5rem" />
			<Icons8DownloadFromTheCloud width="5rem" height="5rem" />
			<h1>Home Edited</h1>
			<Button primary onClick={() => {}} label="OK" />
			{isLoading ? <h1>Loading....</h1> : <h1>{data?.greeting}</h1>}
			<Test />
			<br />
			<span style={{ fontSize: '1rem' }}>Line 1</span>
			<div style={{ fontSize: '30px' }}>
				<span style={{ fontSize: '1em' }}>Line 2</span>
			</div>
			<div style={{ fontSize: '20px' }}>
				<span style={{ fontSize: '1em' }}>Line 2</span>
			</div>
		</>
	)
}

export default Home
