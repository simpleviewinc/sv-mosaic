import path from "path";
import { execSync } from "child_process";

describe(__filename, function() {
	it("Check types", { timeout: 30_000 }, () => {
		execSync("yarn types", {
			stdio: "inherit",
			cwd: path.resolve(__dirname, "../.."),
		});
	});
});
