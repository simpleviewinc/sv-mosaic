const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

export function escapeRegexp(str: string) {
	if (!str || !reHasRegExpChar.test(str)) {
		return str;
	}

	return str.replace(reRegExpChar, "\\$&");
}
