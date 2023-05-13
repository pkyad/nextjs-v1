import { model1 } from 'models/first'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Task {
	userId: number
	id: number
	title: string
	completed: boolean
}

interface helloResponseType {
	tasks: Task[]
	testObj?: model1
}

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world response
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<helloResponseType>
) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	const data = await response.json()

	res.json({ tasks: [data] })
}

export default handler
