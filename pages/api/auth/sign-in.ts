import { STATUS_CODES } from '@/shared/constants';
import { post } from '@/shared/proxy';
import validator from '@/shared/validators/auth-form';
import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req
    const isValid = validator(body)

    const proxyData = { firstName: 'admin', id: 123 }

    const token = jwt.sign(proxyData, process.env.JWT_SECRET)
    res.status(STATUS_CODES.SUCCESS).json({ isValid, token })
    // if (proxyResponse.status === STATUS_CODES.BAD_REQUEST) {
    //     res.status(STATUS_CODES.BAD_REQUEST).json({ isValid, message: 'Invalid data' })
    // } else {
    //     res.status(STATUS_CODES.SUCCESS).json({ isValid, token })
    // }

}

export default handler;