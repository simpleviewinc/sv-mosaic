const path = require("path");
const { execSync } = require("child_process");

describe(__filename, function() {
	test("Check types", () => {
		execSync("yarn types", {
			stdio: "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
