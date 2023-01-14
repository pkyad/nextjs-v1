import { STATUS_CODES } from '@/shared/constants';
import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { body} = req
    try{
        const data = jwt.verify(req.cookies.token , process.env.JWT_SECRET)
        res.status(STATUS_CODES.SUCCESS).json(data)
    }catch(e){
        res.status(STATUS_CODES.UNAUTHORIZED).json({ message : 'Invalid session'  })
    }
    
}

export default handler;