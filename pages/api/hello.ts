import { helloResponseType } from 'models/hello'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world response
 *     operationId: hello
 *     responses:
 *       200:
 *         description: hello world
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/helloResponseType'
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
