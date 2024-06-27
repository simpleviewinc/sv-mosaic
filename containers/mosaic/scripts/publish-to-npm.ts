import { execSync } from "child_process";
import { writeFileSync } from "fs";

import pkg from "../package.json";

const {
	CIRCLE_BRANCH,
	CIRCLE_SHA1,
	NPM_TOKEN,
} = process.env;

if (!CIRCLE_BRANCH || !CIRCLE_SHA1) {
	throw new Error("Must set CIRCLE_BRANCH AND CIRCLE_SHA");
}

execSync(`npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: "inherit" });

const raw = execSync("npm view @simpleview/sv-mosaic versions --json --quiet");
const versions = JSON.parse(raw.toString());

if (CIRCLE_BRANCH === "master") {
	/**
	 * When on master we publish to the main semver
	 */
	if (!versions.includes(pkg.version)) {
		// execSync("npm publish --access public", { stdio: "inherit" });
	} else {
		console.log("Version published...");
	}
} else {
	/**
	 * When not on master we prepublish a beta version
	 * Creates a version like 1.0.0-qa-abcdef
	 */
	pkg.version = `${pkg.version}-${CIRCLE_BRANCH}-${CIRCLE_SHA1.slice(0, 6)}`;

	console.log(`Publishing @simpleview/sv-mosaic@${pkg.version}`);

	writeFileSync(`${__dirname}/../package.json`, JSON.stringify(pkg, null, "\t"));

	execSync(`npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: "inherit" });
	execSync("npm publish --access public --tag beta", { stdio: "inherit" });
}
