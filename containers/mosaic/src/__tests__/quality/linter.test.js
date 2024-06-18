const path = require("path");
const { execSync } = require("child_process");

describe(__filename, function() {
	test("Run linter to check code style", async () => {
		execSync("yarn lint", {
			stdio : "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
