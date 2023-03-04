import type { NextApiRequest, NextApiResponse } from 'next'
import mock from '@/mocks/api/hello'
import { model1 } from 'models/first'

interface Task {
  userId: number
  id: number
  title: string
  completed: boolean
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
  res: NextApiResponse<{ tasks: Task[], testObj?: model1 }>
) => {
  let data
  if (process.env.NODE_ENV === 'development') {
    data = mock
  } else {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    data = await response.json()
  }

  res.json({ tasks: [data] })
}

export default handler
