import { STATUS_CODES } from '@/shared/constants'
import { deleteCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/logout:
 *  get:
 *    operationId: logout
 *    description: logout endpoint
 *    responses:
 *       200:
 *         description: Logs out a user by deleting the token cookie
 */
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
	deleteCookie('token', { req, res })
	res.status(STATUS_CODES.SUCCESS).json(null)
}
export default handler
