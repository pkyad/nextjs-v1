import { deleteCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * /api/auth/logout:
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
	deleteCookie('token', { req, res })
	res.json({})
}
export default handler
