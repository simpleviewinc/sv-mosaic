module.exports = {
	preset : "ts-jest/presets/js-with-babel",
	moduleNameMapper: {
		"@root/(.*)" : "<rootDir>/src/$1"
	}
}