module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transform: {
      '^.+\\.(t|j)sx?$': '@swc/jest',
    },
  
}