import { appRouter } from '@/server/root'
import { createTRPCContext } from '@/server/trpc'
import { createNextApiHandler } from '@trpc/server/adapters/next'

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
