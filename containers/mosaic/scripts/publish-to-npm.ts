/* eslint-disable no-console */
import { execSync } from "child_process";
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const {
	CIRCLE_BRANCH,
	CIRCLE_SHA1,
	NPM_TOKEN,
} = process.env;

if (!CIRCLE_BRANCH || !CIRCLE_SHA1) {
	throw new Error("Must set CIRCLE_BRANCH AND CIRCLE_SHA");
}

execSync(`npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: "inherit" });

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

if (CIRCLE_BRANCH === "master") {
	/**
	 * When on master we publish to the main semver
	 */
	if (!versions.includes(packages.main.version)) {
		execSync("npm publish --access public", { stdio: "inherit" });
	} else {
		console.log("Version published...");
	}
} else {
	/**
	 * When not on master we prepublish a beta version
	 * Creates a version like 1.0.0-qa-abcdef
	 */
	const version = `${packages.main.version}-${CIRCLE_BRANCH}-${CIRCLE_SHA1.slice(0, 6)}`;

	console.log(`Publishing @simpleview/sv-mosaic@${version} and @simpleview/sv-mosaic-types@${version}.`);

	packages.main.version = version;
	packages.types.version = version;

	writeFileSync(mainPackagePath, JSON.stringify(packages.main, null, "\t"));
	writeFileSync(typesPackagePath, JSON.stringify(packages.types, null, "\t"));

	execSync("npm publish --access public --tag beta", { stdio: "inherit" });
	execSync("cd mosaic-types && npm publish --access public --tag beta", { stdio: "inherit" });
}
