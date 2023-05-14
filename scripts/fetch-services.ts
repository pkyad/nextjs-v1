/* eslint-disable no-console */
import select from '@inquirer/select'
import { spawnSync } from 'child_process'
import fs from 'fs'
import fetch from 'node-fetch'
import services from '../services.config.json'

console.log('Started.....')

interface ServiceSpec {
	alias: string
	stage: string
	authKey: string
	prod: string
}

const main = async (): Promise<void> => {
	const answer = await select({
		message: 'Select the service endpoint',
		choices: [
			...services.endpoints.map((service) => {
				return {
					value: service.alias,
					label: service.alias,
					description: service.stage
				}
			}),
			{
				value: 'all',
				label: 'All of the above',
				description: 'Fetches / Updates all services'
			}
		]
	})
	//
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
		console.log(service)
		const response = await fetch(service.stage)
		console.log(response)
		const spec: any = await response.json()
		console.log(spec)
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
		const specPath = `services/${service.alias}.json`

		try {
			fs.writeFileSync(specPath, JSON.stringify(spec))
			const child = spawnSync(
				'yarn',
				[
					'update-openapi-service',
					`-i ${specPath} -o services/${service.alias}`
				],
				{
					cwd: '.',
					encoding: 'utf-8',
					stdio: 'inherit'
				}
			)
			child.stderr && console.log(child.stderr)
		} catch (err) {
			console.error(err)
		}
	})
}
main()
	.then(() => {
		console.log('success...')
	})
	.catch((e) => {
		console.log(e)
	})
export {}
