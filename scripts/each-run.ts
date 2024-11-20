import { execSync } from "child_process";
import { getContainers } from "./utils";

const [cmd, ...args] = process.argv.slice(2);

if (!cmd) {
	throw new Error("You need to provide a command to run in each container");
}

const commonCmds: Record<string, string | ((manager: "npm" | "yarn") => string)> = {
	"install": "install",
	"reinstall": (manager) => `rm -rf node_modules && ${manager} install`
};

getContainers().forEach(({ pkg, isYarn, path }) => {
	const { scripts = {} } = pkg;

	if (
		!commonCmds[cmd] &&
		!scripts[cmd]
	) {
		return;
	}

	const manager = isYarn ? "yarn" : "npm";
	const commonCmd = commonCmds[cmd];
	const fullCmd = commonCmd ?
		typeof commonCmd === "function" ? commonCmd(manager) : `${manager} ${commonCmd}` :
		`${manager} run ${cmd} ${args.join(" ")}`.trim();

	console.log(`Running "${fullCmd}" in ${path}`);
	execSync(fullCmd, {
		stdio: "inherit",
		cwd: path,
	});
});
