const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	modulePathIgnorePatterns: ['<rootDir>/__tests__/utils/'],
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/shared/(.*)$': '<rootDir>/shared/$1',
		'^@/pages/(.*)$': '<rootDir>/pages/$1',
		'^@/mocks/(.*)$': '<rootDir>/mocks/$1'
	},
	testEnvironment: 'jest-environment-jsdom',
	collectCoverageFrom: [
		'<rootDir>/components/**/*.{ts,tsx,js,jsx}',
		'<rootDir>/shared/**/*.{ts,tsx,js,jsx}',
		'<rootDir>/pages/**/*.{ts,tsx,js,jsx}',
		'<rootDir>/mocks/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/**/*.stories.{ts,tsx,js,jsx}'
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/.yalc',
		'<rootDir>/stories',
		'<rootDir>/shared/http-client',
		'<rootDir>/pages/api/trpc'
	],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 4,
			lines: 4,
			statements: 4
		}
	}
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
