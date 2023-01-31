/* istanbul ignore file */

import { STATUS_CODES } from '@/shared/constants'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { Test2Api } from '@/shared/proxy/apis'

import { Configuration, ConfigurationParameters } from '@/shared/proxy/runtime'
export * from '@/shared/proxy/runtime'
export * from '@/shared/proxy/apis'
export * from '@/shared/proxy/models'

const configParams: ConfigurationParameters = {
  basePath: 'http://localhost:8000',
  middleware: []
}

const apiConfig = new Configuration(configParams)

const apiClient = {
  testApi: new Test2Api(apiConfig)
}

// type ApiClient = typeof apiClient

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
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const extraData = await apiClient.testApi.listtestViews({
    filePath: 'testfilepath'
  })
  // eslint-disable-next-line no-console

  try {
    const data = jwt.verify(
      req.cookies.token as string,
      process.env.JWT_SECRET as string
    ) as object
    res.status(STATUS_CODES.SUCCESS).json({ ...data, ...extraData })
  } catch (e) {
    res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid session' })
  }
}

export default handler
