module.exports = {
<<<<<<< HEAD
  moduleFileExtensions: ["js", "json", "ts", "d.ts"],
  preset: "ts-jest",
  rootDir: "src",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  verbose: true,
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageReporters: ["json-summary", "text", "lcov"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
}
=======
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"preset": 'ts-jest',
	"rootDir": "src",
	"testRegex": ".*\\.spec\\.ts$",
	"transformIgnorePatterns": ["/node_modules/"],
	"collectCoverageFrom": [
		"**/*.(t|j)s"
	],
	"coverageReporters": [
		"json-summary",
		"text",
		"lcov"
	],
	"coverageDirectory": "../coverage",
	"testEnvironment": "node"
};
>>>>>>> 1b53290d9 (renaming plugin)
