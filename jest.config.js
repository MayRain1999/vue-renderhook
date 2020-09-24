module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/jest-start.ts'],
  moduleFileExtensions: ['ts', 'js']
}
