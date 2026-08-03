/* eslint-disable no-console */
import { execSync } from "child_process";
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const {
	GITHUB_REF_NAME,
	GITHUB_SHA,
	NPM_TOKEN,
} = process.env;

if (!GITHUB_REF_NAME || !GITHUB_SHA) {
	throw new Error("Must set GITHUB_REF_NAME and GITHUB_SHA");
}

if (!NPM_TOKEN) {
	throw new Error("Must set NPM_TOKEN");
}

execSync(`npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: "inherit" });

/**
 * First we create a new directory inside /app and copy
 * package.types.json and the built types in there. That'll
 * serve to publish to @simpleview/sv-mosaic-types
 */
execSync([
	"mkdir types-package",
	"cp package.types.json types-package/package.json",
	"cp -r dist/types/ types-package/",
].join(" && "), { stdio: "inherit" });

const mainPackagePath = resolve(__dirname, "../package.json");
const typesPackagePath = resolve(__dirname, "../types-package/package.json");

const packages = {
	main: JSON.parse(readFileSync(mainPackagePath, "utf8")),
	types: JSON.parse(readFileSync(typesPackagePath, "utf8")),
};

const raw = execSync("npm view @simpleview/sv-mosaic versions --json --quiet");
const versions = JSON.parse(raw.toString());

if (GITHUB_REF_NAME === "master") {
	/**
	 * When on master we publish to the main semver
	 */
	if (!versions.includes(packages.main.version)) {
		execSync("npm publish --access public", { stdio: "inherit" });

		packages.types.version = packages.main.version;
		writeFileSync(typesPackagePath, JSON.stringify(packages.types, null, "\t"));

		execSync("cd types-package && npm publish --access public", { stdio: "inherit" });
	} else {
		console.log("Version published...");
	}
} else {
	/**
	 * When not on master we prepublish a beta version
	 * Creates a version like 1.0.0-staging-abcdef
	 */
	const version = `${packages.main.version}-${GITHUB_REF_NAME}-${GITHUB_SHA.slice(0, 6)}`;

	console.log(`Publishing @simpleview/sv-mosaic@${version} and @simpleview/sv-mosaic-types@${version}.`);

	packages.main.version = version;
	packages.types.version = version;

	writeFileSync(mainPackagePath, JSON.stringify(packages.main, null, "\t"));
	writeFileSync(typesPackagePath, JSON.stringify(packages.types, null, "\t"));

	execSync("npm publish --access public --tag beta", { stdio: "inherit" });
	execSync("cd types-package && npm publish --access public --tag beta", { stdio: "inherit" });
}
