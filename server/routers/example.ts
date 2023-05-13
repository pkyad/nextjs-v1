import { inputSchema, outputSchema } from '@/server/models'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(inputSchema)
		.output(outputSchema)
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`
			}
		})
})
