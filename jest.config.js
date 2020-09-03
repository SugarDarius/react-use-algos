module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    testMatch: '<rootDir>/src/**/*.spec.(ts|tsx)',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage'
}