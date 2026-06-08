// import { createDefaultPreset } from "ts-jest";

// const tsJestTransformCfg = createDefaultPreset().transform;
// import { pathsToModuleNameMapper } from "ts-jest";
// import { compilerOptions } from "./tsconfig.json";

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
//   moduleNameMapper: {
//     ...require("tsconfig-paths-jest")(require("./tsconfig.json"))
//       .moduleNameMapper,
//   },
// };

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from "jest";

const config: Config = {
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    //  "(.+)\\.js": "$1",
    //"^@/(.*)$": "<rootDir>/src/$1",
    "@/(.*)$": "<rootDir>/src/$1",
    //"^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};

export default config;
