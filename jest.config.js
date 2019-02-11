module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['lib'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}
