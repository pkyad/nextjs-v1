import { inputSchema, outputSchema } from '@/server/models'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'

// import fastapi_v1 from 'services/fastapi_v1'

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(inputSchema)
		.output(outputSchema)
		.query(async ({ input }) => {
			// const proxyResponse = await fastapi_v1.testEndpoint()

			return {
				greeting: `Hello ${input.text}` // ${proxyResponse.val1} ${proxyResponse.val2}
			}
		})
})
