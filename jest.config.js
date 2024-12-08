module.exports = {
  transform: {
    '^.\\.ts?$': 'ts-jest' //any ts file transform to Js for test
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)?\\.(ts|js)$',
  moduleFileExtensions: ['js', 'ts', 'json'],
  roots: ['<rootDir>/src']
}