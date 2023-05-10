import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

const outputSchema = z.object({
	greeting: z.string()
})
export type outputT = z.infer<typeof outputSchema>

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.output(outputSchema)
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`
			}
		})
})
