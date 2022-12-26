module.exports = {
  rootDir: './src/',
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(js|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  setupFilesAfterEnv: ['../testsSetup.js'],
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>../stylesStub.js',
  },
};
