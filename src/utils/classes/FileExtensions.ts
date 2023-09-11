class FileExtensions {
	private extensions: string[];

	private extensionsDotted: string[];

	static getExtension(path: string): string {
		// https://stackoverflow.com/a/12900504
		return path.slice((Math.max(0, path.lastIndexOf(".")) || Infinity) + 1);
	}

	constructor(extensions: string[] | undefined = []) {
		this.extensions = extensions.map(ext => ext.toLowerCase());
		this.extensionsDotted = this.extensions.map(ext => `.${ext}`);
	}

	isValidFileName(fileName: string) {
		if (!this.extensions.length) {
			return true;
		}

		const ext = FileExtensions.getExtension(fileName).toLowerCase();

		return this.extensions.includes(ext);
	}

	toString() {
		return this.extensionsDotted.join(", ");
	}
}

export default FileExtensions;
