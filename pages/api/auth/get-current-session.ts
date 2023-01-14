/* istanbul ignore file */

import { STATUS_CODES } from '@/shared/constants'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

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
