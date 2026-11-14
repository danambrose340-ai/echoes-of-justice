// Uses babel-jest with Next's bundled babel preset instead of next/jest. The native
// SWC binding that next/jest loads crashes (bus error) on this host. The runtime
// helper is disabled because the test transform does not need it.
module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      { presets: [['next/babel', { 'transform-runtime': { helpers: false, regenerator: false } }]] },
    ],
  },
};
