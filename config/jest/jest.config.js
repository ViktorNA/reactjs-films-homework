module.exports = {
  rootDir: '../../src',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/**/?(*.)+(spec|test).js?(x)'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],
  coverageDirectory: '../../coverage',
  coveragePathIgnorePatterns: [
    'coverage',
    '<rootDir>/index.jsx',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
    },
  },
};
