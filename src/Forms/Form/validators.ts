export type ValidatorsReturn = {
	errorMessage?: string;
	type: string;
};

export const VALIDATE_EMAIL_TYPE = "validateEmail";
export const VALIDATE_SLOW_TYPE = "validateSlow";
export const REQUIRED_TYPE = "required";
export const VALIDATE_NUMBER_TYPE = "validateNumber";
export const VALIDATE_URL = "validateURL";
export const VALIDATE_DATE_RANGE = "validateDateRange";

/**
 * Validates an email address using a regular expression taken from:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
export function validateEmail(str: string): ValidatorsReturn | undefined {
	if (!str) {
		return;
	}

	const isValidEmail = str
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (isValidEmail) return;

	return { type: VALIDATE_EMAIL_TYPE, errorMessage: "The value is not a valid e-mail" };
}

export function validateSlow(str: string): Promise<void | ValidatorsReturn> {
	if (!str) {
		return;
	}

	return new Promise<void | ValidatorsReturn>(function (resolve) {
		setTimeout(function () {
			if (str.includes("test")) {
				return resolve({ type: VALIDATE_SLOW_TYPE, errorMessage: "String cannot include test" });
			} else {
				return resolve();
			}
		}, 5000);
	});
}

/**
 * Validates a required field.
 */
export function required(str: string | string[]): ValidatorsReturn | undefined {
	if (!str
		|| !!str === false
		|| (typeof str === "string" && str?.trim().length === 0)
		|| str.length === 0
	) {
		return { type: REQUIRED_TYPE, errorMessage: "This field is required, please fill it" };
	}

	return;
}

/**
 * Validates if the field value is a number.
 * @param value field value
 * @returns an error message string
 */
export function validateNumber(value: string): ValidatorsReturn | undefined {
	if (!value) {
		return;
	}

	if (!(!isNaN(Number(value)) && !isNaN(parseFloat(value)))) {
		return { type: VALIDATE_NUMBER_TYPE, errorMessage: "The value is not a number" };
	}
}

/**
 * Validate if a string is a URL. Regex taken from:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @param str to validate
 * @returns an error message string
 */
export function validateURL(str: string): ValidatorsReturn | undefined {
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
		return { type: VALIDATE_URL, errorMessage: "The value is not a valid URL" };
	}
}

/**
 * Validates that a given range of dates i.e. the
 * start date should always happens before the end date
 * @param value 
 * @param data 
 * @param options 
 * @returns the error message in case of any
 */
export function validateDateRange(value, data, options): string | undefined {
	if (!value || !data || !options || !data[options.pairedFields[0]]) {
		return;
	}

	let startDate = new Date(value);
	let endDate = new Date(data[options.pairedFields[0]]);

	// if (options.startDateName) {
	// 	startDate = new Date(data[options.startDateName]);
	// 	endDate = new Date(value);
	// }

	if (startDate.getTime() > endDate.getTime()) {
		return "Start date should happen before the end date";
	}

	return undefined;
}
// export function validateDateRange(value, data, options): ValidatorsReturn {
// 	if (!value || !data || !options) {
// 		return;
// 	}

// 	let startDate = new Date(value);
// 	let endDate = new Date(data[options.endDateName]);

// 	if (options.startDateName) {
// 		startDate = new Date(data[options.startDateName]);
// 		endDate = new Date(value);
// 	}

// 	if (startDate.getTime() >= endDate.getTime()) {
// 		return { type: VALIDATE_DATE_RANGE, errorMessage: "Start date should happen before the end date" };
// 	}

// 	return { type: VALIDATE_DATE_RANGE, errorMessage: undefined };
// }

export type Validator = { fn: any, options: any };
/**
 * Creates an object from a given validator that contains
 * a fn property that could be a string a function or another
 * object and an options property..
 * @param validators 
 * @returns
 */
export function mapsValidators(validators): Validator[] {
	const validatorsMap = {
		required: required,
		validateDateRange: validateDateRange,
		validateEmail: validateEmail,
		validateNumber: validateNumber,
		validateSlow: validateSlow,
		validateURL: validateURL,
	}

	return validators.map(validator => {
		if (typeof validator === "string") return { fn: validatorsMap[validator], options: {} };
		else if (typeof validator === "function") return { fn: validator, options: {} };
		else return { fn: validatorsMap[validator.fn], options: validator.options };
	})
}
