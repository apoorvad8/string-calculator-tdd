module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    testMatch: ['<rootDir>/src/**/*.test.(ts|js)']
  };
  