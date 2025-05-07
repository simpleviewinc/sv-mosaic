import fs from "fs";
import path from "path";

export function fileExistsSync(path: string): boolean {
	try {
		fs.accessSync(path, fs.constants.F_OK);
		return true;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		return false;
	}
}

export async function fileExists(path: string): Promise<boolean> {
	try {
		await fs.promises.access(path, fs.constants.F_OK);
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		const isYarn = fileExistsSync(path.resolve(containerPath, "yarn.lock"));

		return { name, path: containerPath, pkgPath, pkg, isYarn };
	});
}

/**
 * Escape special characters in a regular expression string.
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

export function escapeRegexp(str: string) {
	if (!str || !reHasRegExpChar.test(str)) {
		return str;
	}

	return str.replace(reRegExpChar, "\\$&");
}

/**
 * Escape special characters in the given string of text.
 */

const escapeCharacters = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#039;",
	"|": "&vert;",
};

export function escapeHtml(input: string) {
	const entries = Object.entries(escapeCharacters);

	for (const [character, entity] of entries) {
		input = input.replace(new RegExp(escapeRegexp(character), "g"), entity);
	}

	return input;
}
