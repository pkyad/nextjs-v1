import { deleteCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 */
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
	deleteCookie('token', { req, res })
	res.json({})
}
export default handler
