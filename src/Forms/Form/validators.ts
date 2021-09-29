export function validateEmail(str: string) {
	if (!str) {
		return;
	}

	return str.match(/.+@.+\.com/) === null
		? "The value is not a valid e-mail"
		: undefined;
}

export function validateSlow(str: string) {
	if (!str) {
		return;
	}

	return new Promise<void | string>(function (resolve) {
		setTimeout(function () {
			if (str.includes("test")) {
				return resolve("String cannot include 'test'");
			} else {
				return resolve();
			}
		}, 5000);
	});
}
