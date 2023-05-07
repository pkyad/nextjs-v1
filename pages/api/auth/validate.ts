import { STATUS_CODES } from '@/shared/constants'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/validate:
 *  get:
 *    description: Returns the current user meta data in json edited
 *    responses:
 *       200:
 *         description: returns current user object, should only be called
 *          once for a entire load or after sign in
 *       401:
 *         description: if the jwt token is not present in the cookie or its invalid
 */
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
	try {
		jwt.verify(req.cookies.token as string, process.env.JWT_SECRET as string)
		res.status(STATUS_CODES.SUCCESS).json({})
	} catch (e) {
		res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid session' })
	}
}

export default handler
