import { execSync } from "child_process";
import { writeFileSync } from "fs";

import pkg from "../package.json";

const {
	CIRCLE_BRANCH,
	CIRCLE_SHA1,
	NPM_TOKEN
} = process.env;

if (!CIRCLE_BRANCH || !CIRCLE_SHA1) {
	throw new Error("Must set CIRCLE_BRANCH AND CIRCLE_SHA");
}

// Creates a version like 1.0.0-qa-abcdef
pkg.version = `${pkg.version}-${CIRCLE_BRANCH}-${CIRCLE_SHA1.slice(0, 6)}`;

writeFileSync(`${__dirname}/../package.json`, JSON.stringify(pkg, null, "\t"));

execSync(`yarn run build`);
execSync(`npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`);
execSync(`npm publish --access public --tag beta`);
