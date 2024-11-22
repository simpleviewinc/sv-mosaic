import format from "date-fns/format";
import { postcodeValidator, postcodeValidatorExistsForCountry } from "postcode-validator";

import type { MosaicLabelValue } from "@root/types";

import { DATE_FORMAT_FULL } from "@root/constants";
import { isLabelValue } from "@root/types";
import { getHtmlCharacterCount } from "@root/utils/dom/getHtmlCharacterCount";
import { getTextLength } from "@root/utils/string";

export const VALIDATE_EMAIL_TYPE = "validateEmail";
export const VALIDATE_SLOW_TYPE = "validateSlow";
export const REQUIRED_TYPE = "required";
export const VALIDATE_NUMBER_TYPE = "validateNumber";
export const VALIDATE_URL = "validateURL";
export const VALIDATE_DATE_RANGE = "validateDateRange";
export const VALIDATE_NUMBER_RANGE = "validateNumberRange";

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
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);

	if (isValidEmail) return;

	return "The value is not a valid email";
}

export function validateSlow(str: string): Promise<undefined | string> {
	if (!str) {
		return;
	}

	return new Promise<undefined | string>(function (resolve) {
		setTimeout(function () {
			if (str.includes("test")) {
				return resolve("String cannot include test");
			} else {
				return resolve(undefined);
			}
		}, 1000);
	});
}

/**
 * Validates a latitude
 * @param lat latitude value
 * @returns error message
 */
export function validateLatitude(lat: number): string | undefined {
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
export function validateLongitude(lng: number): string | undefined {
	const isValidLongitude = isFinite(lng) && Math.abs(lng) <= 180;

	if (!isValidLongitude) {
		return "Longitude should be between -180 and 180";
	}

	return;
}

/**
 * Validates a required field.
 */
export function required(value: any): string | undefined {
	if (
		value === undefined ||
		(typeof value === "string" && !value.trim().length) ||
		(Array.isArray(value) && !value.length) ||
		value === false
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
export async function validateDateRange(value: string, data: any, options: Record<string, any>): Promise<string | undefined> {
	const startDateStr = data[options.startDateName] ? data[options.startDateName] : value;
	const endDateStr = data[options.endDateName] ? data[options.endDateName] : value;

	if (!startDateStr || !endDateStr)
		return;

	const message = startDateStr === value ?
		"Start date should happen before the end date" :
		"End date should happen after the start date";

	const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	if (startDate.getTime() > endDate.getTime()) {
		return message;
	}

	return undefined;
}

export function validateNumberRange(value: string, data: any, { minName, maxName }: { minName?: number; maxName?: number }): string | undefined {
	if (value === undefined) {
		return;
	}

	const min = minName && data[minName];
	const max = maxName && data[maxName];

	const numberValue = Number(value);
	if (Number.isNaN(numberValue) || !Number.isFinite(numberValue)) {
		return;
	}

	if (min && !max && numberValue < min) {
		return `Number must be greater than or equal to ${min}`;
	}

	if (!min && max && numberValue > max) {
		return `Number must be less than or equal to ${max}`;
	}

	if (min && max && (numberValue < min || numberValue > max)) {
		return `Number must be between ${min} and ${max}`;
	}
}

export function validateMinDate(value: any, _: any, { min, max }: { min?: Date; max?: Date }): string | undefined {
	if (!(value instanceof Date)) {
		return;
	}

	if (min && !max && value < min) {
		return `Date must come on or after ${format(min, DATE_FORMAT_FULL)}`;
	}

	if (!min && max && value > max) {
		return `Date must come on or before ${format(max, DATE_FORMAT_FULL)}`;
	}

	if (min && max && (value < min || value > max)) {
		return `Date must come between ${format(min, DATE_FORMAT_FULL)} and ${format(max, DATE_FORMAT_FULL)}`;
	}
}

export function validateCharacterCount(value: string, _: any, options: { max?: number; ignoreHTML?: boolean }): string | undefined {
	if (!options.max) {
		return;
	}

	if (typeof value !== "string") {
		return;
	}

	const message = "You have exceeded the maximum number of characters";

	if (
		(options.ignoreHTML && getHtmlCharacterCount(value) > options.max) ||
		(!options.ignoreHTML && getTextLength(value) > options.max)
	) {
		return message;
	}
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

/**
 * Validate that the postcode is a valid postcode according to
 * the country in the same form data. If a country is not supported then
 * validation passes regardless.
 */
export async function validatePostcode(value: string, data: any, { countryField }: { countryField: string }): Promise<string | undefined> {
	if (!value) {
		return;
	}

	const countryValue: MosaicLabelValue | string = data[countryField];

	if (!countryValue) {
		return;
	}

	const country = isLabelValue(countryValue) ? countryValue.value : countryValue;

	if (!country || !postcodeValidatorExistsForCountry(country)) {
		return;
	}

	if (!postcodeValidator(value, country)) {
		return "This is not a valid postal code in the selected country";
	}

	return;
}
