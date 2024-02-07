const { execSync } = require("child_process");

describe(__filename, function() {
	test("Run types", () => {
		execSync("yarn run types", { stdio: "inherit" });
	});
});
