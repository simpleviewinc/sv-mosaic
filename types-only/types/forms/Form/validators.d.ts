export declare const VALIDATE_EMAIL_TYPE = "validateEmail";
export declare const VALIDATE_SLOW_TYPE = "validateSlow";
export declare const REQUIRED_TYPE = "required";
export declare const VALIDATE_NUMBER_TYPE = "validateNumber";
export declare const VALIDATE_URL = "validateURL";
export declare const VALIDATE_DATE_RANGE = "validateDateRange";
/**
 * Validates an email address using a regular expression taken from:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
export declare function validateEmail(str: string): string | undefined;
export declare function validateSlow(str: string): Promise<void | string>;
/**
 * Validates a required field.
 */
export declare function required(str: string | string[]): string | undefined;
/**
 * Validates if the field value is a number.
 * @param value field value
 * @returns an error message string
 */
export declare function validateNumber(value: string): string | undefined;
/**
 * Validate if a string is a URL. Regex taken from:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @param str to validate
 * @returns an error message string
 */
export declare function validateURL(str: string): string | undefined;
/**
 * Validates that a given range of dates i.e. the
 * start date should always happens before the end date
 * @param value
 * @param data
 * @param options
 * @returns the error message in case of any
 */
export declare function validateDateRange(value: string, data: any, options: {
    [key: string]: any;
}): string | undefined;
export declare type Validator = {
    fn: any;
    options: any;
};
/**
 * Creates an object from a given validator that contains
 * a fn property that could be a string a function or another
 * object and an options property..
 * @param validators
 * @returns
 */
export declare function mapsValidators(validators: any): Validator[];
