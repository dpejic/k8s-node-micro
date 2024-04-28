import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  cache: false,
  forceExit: true,
  testEnvironment: "jest-environment-node",
  globalSetup: "<rootDir>/test/dotenv-test.ts",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default config;
