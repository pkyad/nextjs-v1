import { STATUS_CODES } from '@/shared/constants'
import validator from '@/shared/validators/auth-form'
import { setCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import { InvalidSessionResponse } from 'models/get-current-session'
import { signInResponse } from 'models/sign-in'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/sign-in:
 *  post:
 *    description: Returns the current user meta data in json edited
 *    operationId: signIn
 *    requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signInRequest'
 *    responses:
 *       200:
 *         description: returns current user object, should only be called
 *          once for a entire load or after sign in
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/signInResponse'
 *       401:
 *         description: if the jwt token is not present in the cookie or its invalid
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvalidSessionResponse'
 */
const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<signInResponse | InvalidSessionResponse>
) => {
	const { body } = req

	try {
		const isValid = validator(body)

		const proxyData = { firstName: 'admin', id: 123 }

		const token = jwt.sign(proxyData, process.env.JWT_SECRET as string)
		setCookie('token', token, { req, res })
		res.status(STATUS_CODES.SUCCESS).json({ isValid })
	} catch (error) {
		res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid session' })
	}
}

export default handler
