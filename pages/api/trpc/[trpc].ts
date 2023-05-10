/* eslint-disable jsdoc/no-missing-syntax */
import { appRouter } from '@/server/api/root'
import { createTRPCContext } from '@/server/api/trpc'
import { createNextApiHandler } from '@trpc/server/adapters/next'

// export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext: createTRPCContext,
	onError:
		process.env.NODE_ENV === 'development'
			? ({ path, error }) => {
					// eslint-disable-next-line no-console
					console.error(
						`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
					)
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }
			: undefined
})
