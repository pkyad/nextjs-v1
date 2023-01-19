import type { NextApiRequest, NextApiResponse } from 'next'
import mock from '@/mocks/api/hello'

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
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<Task[]>) => {
  let data
  if (process.env.NODE_ENV === 'development') {
    data = mock
  } else {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    data = await response.json()
  }

  res.json(data)
}

export default handler
