/* istanbul ignore file */
import { STATUS_CODES } from '@/shared/constants'
import jwt from 'jsonwebtoken'
import {
	InvalidSessionResponse,
	SessionResponse
} from 'models/get-current-session'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/get-current-session:
 *  get:
 *    description: Returns the current user meta data in json edited
 *    operationId: getCurrentSession
 *    responses:
 *       200:
 *         description: returns current user object, should only be called
 *          once for a entire load or after sign in
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SessionResponse'
 *       401:
 *         description: if the jwt token is not present in the cookie or its invalid
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvalidSessionResponse'
 */
const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<SessionResponse | InvalidSessionResponse>
) => {
	try {
		const data = jwt.verify(
			req.cookies.token as string,
			process.env.JWT_SECRET as string
		) as SessionResponse
		res.status(STATUS_CODES.SUCCESS).json({ ...data })
	} catch (e) {
		res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid session' })
	}
}

export default handler
