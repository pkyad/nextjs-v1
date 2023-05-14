import { inputSchema, outputSchema } from '@/server/models'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import fastapiServerClient from 'services/fastapiServer'

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(inputSchema)
		.output(outputSchema)
		.query(async ({ input }) => {
			const data = await fastapiServerClient.testEndpoint()
			return {
				greeting: `Hello ${input.text} ${data.val1}`
			}
		})
})
