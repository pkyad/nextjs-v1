import { outputT } from '@/server/models'
import { STATUS_CODES } from '@/shared/constants'
import { trpcPath } from '@/shared/trpc-client'

interface trpcResponseType {
	result: {
		data: {
			json: outputT
		}
	}
}

type setupMocksType = Record<string, any>

const setupMockResponses = (mocks: setupMocksType): void => {
	global.fetch = async (url): Promise<any> => {
		const path = (url as string).split('?')[0]

		return await Promise.resolve({
			json: async (): Promise<any> => {
				return await new Promise((resolve) => {
					if (path.startsWith(trpcPath)) {
						resolve(TRPCResponse(mocks[path]))
					} else {
						resolve(mocks[path])
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
export default setupMockResponses
