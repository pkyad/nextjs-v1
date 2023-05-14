import { inputSchema, outputSchema } from '@/server/models'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { fastapiService } from 'services'

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(inputSchema)
		.output(outputSchema)
		.query(async ({ input }) => {
			const data = await fastapiService.testEndpoint()
			return {
				greeting: `Hello ${input.text} ${data.val1}`
			}
		})
})
