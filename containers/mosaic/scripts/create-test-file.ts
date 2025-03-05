import fs from "fs";
import path from "path";
import escapeRegExp from "lodash/escapeRegExp";
import { exec } from "child_process";

const [, , sourcePath] = process.argv;

if (!sourcePath) {
	throw new Error("You must provide a source path, i.e. the path to the code that you intend to test.");
}

const resolved = path.resolve(sourcePath);
const fileStat = fs.lstatSync(sourcePath);

if (!fileStat.isFile()) {
	throw new Error("The path provided does not refer to a file.");
}

const srcDir = path.resolve(__dirname, "../src");
const testDir = path.resolve(srcDir, "__tests__");

const target = path.join(testDir, resolved.replace(new RegExp(`^${escapeRegExp(srcDir)}`), ""));
const parsed = path.parse(target);

const newFilePath = `${parsed.dir}${path.sep}${parsed.name}.test${parsed.ext}`;

try {
	fs.accessSync(newFilePath);
	throw new Error("EXISTS");
} catch (err) {
	if (err instanceof Error && err.message === "EXISTS") {
		throw new Error(`A file already exists at  ${newFilePath}`);
	}

	// This is what we want, do nothing..
	(() => err)();
}

fs.mkdirSync(parsed.dir, { recursive: true });
fs.writeFileSync(newFilePath, "");
exec(`code ${newFilePath}`);
