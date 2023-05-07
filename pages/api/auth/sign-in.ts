import { STATUS_CODES } from '@/shared/constants'
import validator from '@/shared/validators/auth-form'
import { setCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/sign-in:
 *  get:
 *    description: Returns the current user meta data in json edited
 *    responses:
 *       200:
 *         description: returns current user object, should only be called
 *          once for a entire load or after sign in
 *       401:
 *         description: if the jwt token is not present in the cookie or its invalid
 */
const handler = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const { body } = req
	const isValid = validator(body)

	const proxyData = { firstName: 'admin', id: 123 }

	const token = jwt.sign(proxyData, process.env.JWT_SECRET as string)
	setCookie('token', token, { req, res })
	res.status(STATUS_CODES.SUCCESS).json({ isValid, token })
	// if (proxyResponse.status === STATUS_CODES.BAD_REQUEST) {
	//     res.status(STATUS_CODES.BAD_REQUEST).json({ isValid, message: 'Invalid data' })
	// } else {
	//     res.status(STATUS_CODES.SUCCESS).json({ isValid, token })
	// }
}

export default handler
