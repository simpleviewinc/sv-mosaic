import fs from "fs";
import { version } from "../package.json";
import { getContainers } from "./utils";

getContainers().forEach(({ pkg, pkgPath, name }) => {
	try {
		if (!pkg.version) {
			throw new Error(`${name} package.json has no version.`);
		}

		if (pkg.version === version) {
			throw new Error(`${name} package.json is already ${version}`);
		}

		pkg.version = version;

		const newPkgContents = JSON.stringify(pkg, undefined, "\t") + "\n";

		fs.writeFileSync(pkgPath, newPkgContents);

		console.log(`Wrote ${name} package.json with new version (${version})`);
	} catch (err) {
		console.error(err instanceof Error ? err.message : err);
	}
});
