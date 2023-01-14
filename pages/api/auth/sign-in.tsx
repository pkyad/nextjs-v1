import { STATUS_CODES } from '@/shared/constants';
import { post } from '@/shared/proxy';
import validator from '@/shared/validators/auth-form';
import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken');


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body} = req
    const isValid = validator(body)

    const proxyResponse = await post('/admin-auth/' , body )
    const proxyData = await proxyResponse.json()

    const token = jwt.sign(proxyData , process.env.JWT_SECRET)
    
    if(proxyResponse.status === STATUS_CODES.BAD_REQUEST){
        res.status(STATUS_CODES.BAD_REQUEST).json({ isValid , message : 'Invalid data'  })
    }else{
        res.status(STATUS_CODES.SUCCESS).json({ isValid , token  })
    }
    
}

export default handler;