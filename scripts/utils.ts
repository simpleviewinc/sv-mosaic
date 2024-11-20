import fs from "fs";
import path from "path";

export function fileExistsSync(path: string): boolean {
	try {
		fs.accessSync(path, fs.constants.F_OK);
		return true;
	} catch (err) {
		return false;
	}
}

export function getContainers() {
	const containersDir = path.resolve(__dirname, "../containers");
	const containers = fs.readdirSync(containersDir);

	return containers.map(name => {
		const containerPath = path.resolve(containersDir, name);
		const pkgPath = path.resolve(containerPath, "package.json");
		const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());
		const isYarn = fileExistsSync(path.resolve(containerPath, "yarn.lock"))

		return { name, path: containerPath, pkgPath, pkg, isYarn };
	});
}
