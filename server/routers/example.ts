import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { z } from 'zod'

const outputSchema = z.object({
	greeting: z.string()
})
const inputSchema = z.object({ text: z.string() })

export type outputT = z.infer<typeof outputSchema>
export type inputT = z.infer<typeof inputSchema>

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
