/* istanbul ignore file */

import { STATUS_CODES } from '@/shared/constants'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

/**
 * @swagger
 * /api/auth/get-current-session:
 *  get:
 *    description: Returns the current user meta data in json
 *    responses:
 *       200:
 *         description: returns current user object, should only be called
 *          once for a entire load or after sign in
 *       401:
 *         description: if the jwt token is not present in the cookie or its invalid
 */
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const data = jwt.verify(
      req.cookies.token as string,
      process.env.JWT_SECRET as string
    )
    res.status(STATUS_CODES.SUCCESS).json(data)
  } catch (e) {
    res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid session' })
  }
}

export default handler
