module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  rootDir: ".",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/test/integration/**/*.test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$" : [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "<rootDir>/tsconfig.json",
      }
    ],
  },
  extensionsToTreatAsEsm: [".ts"],
}
