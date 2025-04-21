module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }],
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@mui|@babel)/)'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};