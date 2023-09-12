import { joinAnd } from "../string";

class FileExtensions {
	private extensions: string[];

	static getExtension(path: string): string {
		// https://stackoverflow.com/a/12900504
		return path.slice((Math.max(0, path.lastIndexOf(".")) || Infinity) + 1);
	}

	constructor(extensions: string[] | undefined = []) {
		this.extensions = extensions.map(ext => ext.toLowerCase());
	}

	isValidFileName(fileName: string) {
		if (!this.extensions.length) {
			return true;
		}

		const ext = FileExtensions.getExtension(fileName).toLowerCase();

		return this.extensions.includes(ext);
	}

	toCSV() {
		return this.extensions.join(",");
	}

	toString() {
		return joinAnd(this.extensions.map(ext => `"${ext}"`));
	}
}

export default FileExtensions;
