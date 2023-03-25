export default {
  clearMocks: true,
  globals: {
    NODE_ENV: 'test',
    TARGET_ENV: 'test'
  },
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};