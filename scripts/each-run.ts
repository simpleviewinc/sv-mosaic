import { execSync } from "child_process";
import { getContainers, toPosixPath } from "./utils";

const [cmd, ...args] = process.argv.slice(2);

if (!cmd) {
	throw new Error("You need to provide a command to run in each container");
}

const commonCmds: Record<string, string> = {
	"install": "install"
};

getContainers().forEach(({ pkg, isYarn, path }) => {
	const { scripts = {} } = pkg;

	if (
		!commonCmds[cmd] &&
		!scripts[cmd]
	) {
		return;
	}

	const fullCmd = commonCmds[cmd] ?
		`${isYarn ? "yarn" : "npm"} ${commonCmds[cmd]}` :
		`${isYarn ? "yarn" : "npm"} run ${cmd} ${args.join(" ")}`.trim();

	console.log(`Running "cd ${toPosixPath(path)} && ${fullCmd}"`);
	execSync(fullCmd, {
		stdio: "inherit",
		cwd: path,
	});
});
