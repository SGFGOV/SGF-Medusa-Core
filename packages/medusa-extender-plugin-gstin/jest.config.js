module.exports = {
  moduleFileExtensions: ["js", "json", "ts", "d.ts"],
  //preset: "babel",
  rootDir: "src",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  verbose: true,
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageReporters: ["json-summary", "text", "lcov"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
