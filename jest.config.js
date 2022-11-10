const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions: { paths } } = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: __dirname })
};