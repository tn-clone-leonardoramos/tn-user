import type { JestConfigWithTsJest } from 'ts-jest/dist/types'

const config: JestConfigWithTsJest = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.e2e.ts$',
  rootDir: '..',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'test/coverage/',
  coveragePathIgnorePatterns: ['/node_modules/', '.module.ts', 'main.ts', '.config.ts', '.enum.ts', '/entity/', '.default.ts'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  },
  verbose: true
}
export default config
