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
export function validateEmail(str: string): string | undefined {
	if (!str) {
		return;
	}

	const isValidEmail = str
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (isValidEmail) return;

	return "The value is not a valid e-mail";
}

export function validateSlow(str: string): Promise<void | string> {
	if (!str) {
		return;
	}

	return new Promise<void | string>(function (resolve) {
		setTimeout(function () {
			if (str.includes("test")) {
				return resolve("String cannot include test");
			} else {
				return resolve();
			}
		}, 1000);
	});
}

/**
 * Validates a latitude
 * @param lat latitude value
 * @returns error message
 */
export function isLatitude(lat: number): string | undefined {
	const isValidLatitude = isFinite(lat) && Math.abs(lat) <= 90;

	if (!isValidLatitude) {
		return "Latitude should be between -90 and 90";
	}

	return;
}

/**
 * Validates a longitude
 * @param lng longitude value
 * @returns error message
 */
export function isLongitude(lng: number): string | undefined {
	const isValidLongitude = isFinite(lng) && Math.abs(lng) <= 180;

	if (!isValidLongitude) {
		return "Longitude should be between -180 and 180";
	}

	return;
}

/**
 * Validates a required field.
 */
export function required(str: string | string[]): string | undefined {
	if (str === undefined
		|| (typeof str === "string" && str?.trim().length === 0)
		|| str?.length === 0
	) {
		return "This field is required, please fill it";
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
		return "The value is not a number";
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

	const pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$", "i"); // fragment locator

	if (!pattern.test(str)) {
		return "The value is not a valid URL";
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
export function validateDateRange(value: string, data: any, options: { [key: string]: any }): string | undefined {
	const startDateStr = data[options.startDateName] ? data[options.startDateName] : value;
	const endDateStr = data[options.endDateName] ? data[options.endDateName] : value;

	if (!startDateStr || !endDateStr)
		return;

	const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	if (startDate.getTime() > endDate.getTime()) {
		return "Start date should happen before the end date";
	}

	return undefined;
}

/**
 * Validate that the value is a correctly formed phone number
 * it only supports US (+1) phone numbers. Numbers for other countries
 * are always considered valid
 * @param value The value that has been entered by the user
 *
 */
export function validatePhoneNumber(value: string) {
	if (!value || value[0] !== "1" || value.length === 11) {
		return;
	}

	return "Phone number must be exactly 10 numbers excluding the country code";
}

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
		isLatitude: isLatitude,
		isLongitude: isLongitude,
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
