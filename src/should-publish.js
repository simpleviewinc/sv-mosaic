const child_process = require("child_process");

const packageJson = require("../package.json");
const raw = child_process.execSync("npm view @simpleview/sv-mosaic versions --json --quiet");
const publishedVersions = JSON.parse(raw.toString());

if (publishedVersions.includes(packageJson.version)) {
	console.log(false);
} else {
	console.log(true);
}