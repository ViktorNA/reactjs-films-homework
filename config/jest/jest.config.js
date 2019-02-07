module.exports = {
  rootDir: '../../src',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/**/?(*.)+(spec|test).js?(x)'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    'coverage',
    '<rootDir>/index.jsx',
    'components/index.jsx',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
    },
  },
  moduleNameMapper:  {
    '\\.(css|scss)$': "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": 'jest-transform-stub',
  },
};
