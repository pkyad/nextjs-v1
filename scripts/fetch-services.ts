/* eslint-disable no-console */
import select from '@inquirer/select'
import { spawnSync } from 'child_process'
import services from '../services.config.json'

console.log('running', services.endpoints)

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
	console.log(answer)
	let servicesToFetch = []
	if (answer === 'all') {
		servicesToFetch = services.endpoints
	} else {
		servicesToFetch = services.endpoints.filter(
			(service) => service.alias === answer
		)
	}

	servicesToFetch.forEach((service) => {
		console.log(service)
		const child = spawnSync(
			'yarn',
			[
				'update-openapi-service',
				`-i ${service.stage} -o services/${service.alias}`
			],
			{
				cwd: '.',
				encoding: 'utf-8',
				stdio: 'inherit'
			}
		)
		child.stderr && console.log(child.stderr)
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
