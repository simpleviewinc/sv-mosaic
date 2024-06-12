const path = require("path");
const { execSync } = require("child_process");

describe(__filename, function() {
	test("Run types", () => {
		execSync("yarn run types", {
			stdio: "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
