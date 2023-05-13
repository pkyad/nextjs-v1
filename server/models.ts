import { z } from 'zod'

export const outputSchema = z.object({
	greeting: z.string()
})
export const inputSchema = z.object({ text: z.string() })

export type outputT = z.infer<typeof outputSchema>
export type inputT = z.infer<typeof inputSchema>
