const { execSync } = require("child_process");

describe(__filename, function() {
	test("Run Linter", async () => {
		execSync("npm run style",  {stdio : "inherit" });
	});
});