import path from "path";
import { execSync } from "child_process";

describe(__filename, function() {
	it("Run linter to check code style", { timeout: 60_000 }, async () => {
		execSync("yarn lint", {
			stdio : "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
