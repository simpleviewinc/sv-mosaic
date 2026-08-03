import { execSync } from "child_process";
import { getPackages } from "./utils";

const [cmd, ...args] = process.argv.slice(2);

if (!cmd) {
	throw new Error("You need to provide a command to run in each package");
}

const commonCmds: Record<string, string> = {
	"install": "pnpm install",
	"reinstall": "rm -rf node_modules && pnpm install",
};

getPackages().forEach(({ pkg, path: packagePath }) => {
	const { scripts = {} } = pkg;

	if (
		!commonCmds[cmd] &&
		!scripts[cmd]
	) {
		return;
	}

	const fullCmd = commonCmds[cmd] ?
		commonCmds[cmd] :
		`pnpm run ${cmd} ${args.join(" ")}`.trim();

	console.log(`Running "${fullCmd}" in ${packagePath}`);
	execSync(fullCmd, {
		stdio: "inherit",
		cwd: packagePath,
	});
});
