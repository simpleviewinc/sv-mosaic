module.exports = {
	preset: "ts-jest/presets/js-with-babel",
	moduleNameMapper: {
		"@root/(.*)": "<rootDir>/../$1",
		"\\.(css|less)$": "identity-obj-proxy",
	},
	setupFiles: [
		"jest-canvas-mock",
	],
	setupFilesAfterEnv: [
		"./setup-jest.ts",
	],
	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			isolatedModules: true,
		},
	},
	modulePathIgnorePatterns: ["<rootDir>/automation_testing"],
	testMatch: [
		"**/src/__tests__/**/*.test.tsx",
		"**/src/__tests__/quality/**/*.test.js",
	],
};
