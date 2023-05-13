/* eslint-disable no-console */
import select from '@inquirer/select'
import config1 from '../proxy.config.json'

// import { spawnSync } from 'child_process'

console.log('running', config1.endpoints)

const main = async (): Promise<void> => {
	const answer = await select({
		message: 'Select the service endpoint',
		choices: config1.endpoints.map((endpoint) => {
			return {
				value: endpoint.alias,
				label: endpoint.alias,
				description: endpoint.dev
			}
		})
	})
	// openapi-generator-cli generate -i http://localhost:8000/openapi?dev-token=$DEV_TOKEN -o shared/proxy --generator-name typescript-fetch --additional-properties=typescriptThreePlus=true
	console.log(answer)
	// const child = spawnSync('yarn', ['build'], { cwd: '/Users/pradeepyadav/Documents/test1', encoding: 'utf-8' })
	// console.log(child.stdout)
	// const child = spawn('yarn', ['build'], { cwd: '/Users/pradeepyadav/Documents/test1', encoding: 'utf-8' })
	// child.stdout.setEncoding('utf-8')
	// child.on('data', (d) => {
	//   console.log({ d })
	// })
	// child.on('error', (e) => {
	//   console.log(e)
	// })
	// child.stdout.on('data', (d) => {
	//   console.log('data', d)
	// })
	// child.on('exit', (m) => {
	//   console.log(m)
	// })
}
main()
	.then(() => {
		console.log('success...', __dirname)
	})
	.catch((e) => {
		console.log(e)
	})
export {}
