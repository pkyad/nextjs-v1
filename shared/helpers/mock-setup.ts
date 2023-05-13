import { outputT } from '@/server/routers/example'
import { SessionResponse } from 'models'
import { STATUS_CODES } from '../constants'

interface trpcResponseType {
	result: {
		data: {
			json: outputT
		}
	}
}

const setup = (): void => {
	global.fetch = async (url): Promise<any> => {
		return await Promise.resolve({
			json: async (): Promise<trpcResponseType[] | SessionResponse> => {
				return await new Promise((resolve) => {
					if (url === '/api/auth/get-current-session') {
						resolve({ firstName: 'Admin Test' })
					} else {
						resolve(TRPCResponse({ greeting: 'Hello from tRPC' }))
					}
				})
			},
			status: STATUS_CODES.SUCCESS
		})
	}
}
export const TRPCResponse = (data: any): trpcResponseType[] => {
	return [{ result: { data: { json: data } } }]
}
export default setup
