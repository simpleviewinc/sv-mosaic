import path from "path";
import { execSync } from "child_process";

describe(__filename, function() {
	it("Run linter to check code style", async () => {
		execSync("yarn lint", {
			stdio : "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
