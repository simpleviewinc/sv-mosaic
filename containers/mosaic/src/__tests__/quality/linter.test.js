const path = require("path");
const { execSync } = require("child_process");

describe(__filename, function() {
	test("Run Linter", async () => {
		execSync("yarn run style", {
			stdio : "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
