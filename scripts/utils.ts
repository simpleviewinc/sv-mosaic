import fs from "fs";
import path from "path";

export function fileExistsSync(filePath: string): boolean {
	try {
		fs.accessSync(filePath, fs.constants.F_OK);
		return true;
	} catch {
		return false;
	}
}

export function getPackages() {
	const packagesDir = path.resolve(__dirname, "../packages");
	const packages = fs.readdirSync(packagesDir);

	return packages
		.map(name => {
			const packagePath = path.resolve(packagesDir, name);
			const pkgPath = path.resolve(packagePath, "package.json");

			if (!fileExistsSync(pkgPath)) {
				return null;
			}

			const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());

			return { name, path: packagePath, pkgPath, pkg };
		})
		.filter((pkg): pkg is NonNullable<typeof pkg> => pkg !== null);
}

/** @deprecated Use getPackages */
export const getContainers = getPackages;
