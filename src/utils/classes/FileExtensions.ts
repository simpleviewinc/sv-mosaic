import { joinAnd } from "../string";

class FileExtensions {
	public extensions: string[];

	public acceptAttr: string;

	public human: string;

	static getExtension(path: string): string {
		// https://stackoverflow.com/a/12900504
		return path.slice((Math.max(0, path.lastIndexOf(".")) || Infinity) + 1);
	}

	constructor(extensions: string[] | undefined = []) {
		this.extensions = extensions.map(ext => ext.toLowerCase());
		this.acceptAttr = this.extensions.map(ext => `.${ext}`).join(",");
		this.human = joinAnd(this.extensions.map(ext => `"${ext}"`));
	}

	isValidFileName(fileName: string) {
		if (!this.extensions.length) {
			return true;
		}

		const ext = FileExtensions.getExtension(fileName).toLowerCase();

		return this.extensions.includes(ext);
	}
}

export default FileExtensions;
