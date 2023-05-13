import { DefaultApi } from './apis'
import { Configuration } from './runtime'

export * from './runtime'
export * from './apis'
export * from './models'

const getBaseUrl = (): string => {
	if (typeof window !== 'undefined') return '' // browser should use relative url
	if (process.env.VERCEL_URL != null) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
	return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

const configuration = new Configuration({
	basePath: getBaseUrl()
})
const apiClient = new DefaultApi(configuration)
export default apiClient
