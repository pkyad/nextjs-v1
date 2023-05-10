import { outputT } from '@/server/api/routers/example'
import { STATUS_CODES } from '../constants'

interface trpcResponseType {
	result: {
		data: {
			json: outputT
		}
	}
}

interface httpResponseType {
	firstName: string
}
const setup = (): void => {
	global.fetch = async (url): Promise<any> => {
		return await Promise.resolve({
			json: async (): Promise<trpcResponseType[] | httpResponseType> => {
				return await new Promise((resolve) => {
					if (url === '/api/auth/get-current-session') {
						resolve({ firstName: 'Admin Test' })
					} else {
						resolve([
							{ result: { data: { json: { greeting: 'Hello from tRPC' } } } }
						])
					}
				})
			},
			status: STATUS_CODES.SUCCESS
		})
	}
}

export default setup
