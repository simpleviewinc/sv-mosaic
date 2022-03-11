/**
 * Validates an email address using a regular expression taken from:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
export function validateEmail(str: string): string {
	if (!str) {
		return;
	}

	return str
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		) === null
		? 'The value is not a valid e-mail'
		: undefined;
}

export function validateSlow(str: string): Promise<void | string> {
	if (!str) {
		return;
	}

	return new Promise<void | string>(function (resolve) {
		setTimeout(function () {
			if (str.includes('test')) {
				return resolve("String cannot include 'test'");
			} else {
				return resolve();
			}
		}, 1000);
	});
}

/**
 * Validates a required field.
 */
export function required(str: string | string[]): string | undefined {
	if (!str
		|| !!str === false
		|| (typeof str === 'string' && str?.trim().length === 0)
		|| str.length === 0
	) {
		return 'This field is required, please fill it';
	}

	return;
}

/**
 * Validates if the field value is a number.
 * @param value field value
 * @returns an error message string
 */
export function validateNumber(value: string): string | undefined {
	if (!value) {
		return;
	}

	if (!(!isNaN(Number(value)) && !isNaN(parseFloat(value)))) {
		return 'The value is not a number';
	}
}

/**
 * Validate if a string is a URL. Regex taken from:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @param str to validate
 * @returns an error message string
 */
export function validateURL(str: string): string | undefined {
	if (!str) {
		return;
	}

	const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

	if (!pattern.test(str)) {
		return 'The value is not a valid URL';
	}
}
