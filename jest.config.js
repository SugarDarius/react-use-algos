module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        },
    },
    testEnvironment: 'jsdom',
    clearMocks: true,
    testMatch: [
        '<rootDir>/src/**/*.spec.(ts|tsx)',
    ],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage'
}