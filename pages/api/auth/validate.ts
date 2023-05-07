import { STATUS_CODES } from '@/shared/constants'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
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
