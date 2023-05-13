/* eslint-disable no-console */
import fs from 'fs'
import swaggerFile from 'public/swagger.json'

const main = async (): Promise<void> => {
	const copy = JSON.parse(JSON.stringify(swaggerFile))
	delete copy.paths.info
	delete copy.paths?.openapi
	try {
		fs.writeFileSync('public/swagger.json', JSON.stringify(copy))
	} catch (err) {
		console.error(err)
	}
}
main()
	.then(() => {
		console.log('success...', __dirname)
	})
	.catch((e) => {
		console.log(e)
	})
export {}
