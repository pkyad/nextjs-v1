/* eslint-disable no-console */
import select from '@inquirer/select'
import arg from 'arg'
import { spawnSync } from 'child_process'
import fs from 'fs'
import fetch from 'node-fetch'
import services from '../services.config.json'

interface Endpoint {
	schema: string
	base_url: string
}

type ServiceSpec = Record<string, string | Endpoint>
interface OptionsType {
	env: string
	help: boolean
}

const parseArgumentsIntoOptions = (rawArgs: string[]): OptionsType => {
	const args = arg(
		{
			'--help': Boolean,
			'--env': String
		},
		{
			argv: rawArgs.slice(2)
		}
	)
	return {
		env: args['--env'] ?? 'stage',
		help: args['--help'] ?? false
	}
}

const main = async (): Promise<void> => {
	const options = parseArgumentsIntoOptions(process.argv)
	if (options.help) {
		console.log(
			'You can add service dependency for this project using this command. By default it will use the staging environment of the service.'
		)
		console.log('--env=stage(default)/prod')
		return
	}

	const answer = await select({
		message: 'Select the service endpoint',
		choices: [
			...services.endpoints.map((service: ServiceSpec) => {
				return {
					value: service.alias as string,
					label: service.alias,
					description: (service[options.env] as Endpoint).schema
				}
			}),
			{
				value: 'all',
				label: 'All of the above',
				description: 'Fetches / Updates all services'
			}
		]
	})
	console.log('Started.....')
	console.log(`Fetching for ${answer}`)
	let servicesToFetch = []
	if (answer === 'all') {
		servicesToFetch = services.endpoints
	} else {
		servicesToFetch = services.endpoints.filter(
			(service) => service.alias === answer
		)
	}
	if (!fs.existsSync('services')) {
		fs.mkdirSync('services')
	}

	;(servicesToFetch as ServiceSpec[]).forEach(async (service) => {
		const response = await fetch((service[options.env] as Endpoint).schema)
		const spec: any = await response.json()
		Object.keys(spec.paths).forEach((endpoint) => {
			try {
				delete spec.paths[endpoint].get.tags
			} catch {}
			try {
				delete spec.paths[endpoint].post.tags
			} catch {}
			try {
				delete spec.paths[endpoint].delete.tags
			} catch {}
			try {
				delete spec.paths[endpoint].patch.tags
			} catch {}
			try {
				delete spec.paths[endpoint].put.tags
			} catch {}
		})
		const specPath = `services/${service.alias as string}Spec.json`

		try {
			fs.writeFileSync(specPath, JSON.stringify(spec))
			const child = spawnSync(
				'yarn',
				[
					'update-openapi-service',
					`-i ${specPath} -o services/${service.alias as string}`
				],
				{
					cwd: '.',
					encoding: 'utf-8',
					stdio: 'inherit'
				}
			)

			const indexTemplate = `
import { DefaultApi } from './apis'
import { Configuration } from './runtime'

export * from './runtime'
export * from './apis'
export * from './models'

const configuration = new Configuration({
	basePath: '${(service[options.env] as Endpoint).base_url}'
})
const ${service.alias as string}Client = new DefaultApi(configuration)
export default ${service.alias as string}Client
`

			fs.writeFileSync(
				`services/${service.alias as string}/index.ts`,
				indexTemplate
			)
			child.stderr && console.log(child.stderr)
		} catch (err) {
			console.error(err)
		}
	})
	console.log('success...')
}
main()
	.then(() => {})
	.catch((e) => {
		console.log(e)
	})
export {}
