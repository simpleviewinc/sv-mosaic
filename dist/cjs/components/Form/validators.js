"use strict";
exports.__esModule = true;
exports.mapsValidators = exports.validateDateRange = exports.validateURL = exports.validateNumber = exports.required = exports.validateSlow = exports.validateEmail = exports.VALIDATE_DATE_RANGE = exports.VALIDATE_URL = exports.VALIDATE_NUMBER_TYPE = exports.REQUIRED_TYPE = exports.VALIDATE_SLOW_TYPE = exports.VALIDATE_EMAIL_TYPE = void 0;
exports.VALIDATE_EMAIL_TYPE = "validateEmail";
exports.VALIDATE_SLOW_TYPE = "validateSlow";
exports.REQUIRED_TYPE = "required";
exports.VALIDATE_NUMBER_TYPE = "validateNumber";
exports.VALIDATE_URL = "validateURL";
exports.VALIDATE_DATE_RANGE = "validateDateRange";
/**
 * Validates an email address using a regular expression taken from:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
function validateEmail(str) {
    if (!str) {
        return;
    }
    var isValidEmail = str
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (isValidEmail)
        return;
    return "The value is not a valid e-mail";
}
exports.validateEmail = validateEmail;
function validateSlow(str) {
    if (!str) {
        return;
    }
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (str.includes("test")) {
                return resolve("String cannot include test");
            }
            else {
                return resolve();
            }
        }, 1000);
    });
}
exports.validateSlow = validateSlow;
/**
 * Validates a required field.
 */
function required(str) {
    if (!str
        || !!str === false
        || (typeof str === "string" && (str === null || str === void 0 ? void 0 : str.trim().length) === 0)
        || str.length === 0) {
        return "This field is required, please fill it";
    }
    return;
}
exports.required = required;
/**
 * Validates if the field value is a number.
 * @param value field value
 * @returns an error message string
 */
function validateNumber(value) {
    if (!value) {
        return;
    }
    if (!(!isNaN(Number(value)) && !isNaN(parseFloat(value)))) {
        return "The value is not a number";
    }
}
exports.validateNumber = validateNumber;
/**
 * Validate if a string is a URL. Regex taken from:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @param str to validate
 * @returns an error message string
 */
function validateURL(str) {
    if (!str) {
        return;
    }
    var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    if (!pattern.test(str)) {
        return "The value is not a valid URL";
    }
}
exports.validateURL = validateURL;
/**
 * Validates that a given range of dates i.e. the
 * start date should always happens before the end date
 * @param value
 * @param data
 * @param options
 * @returns the error message in case of any
 */
function validateDateRange(value, data, options) {
    var startDateStr = data[options.startDateName] ? data[options.startDateName] : value;
    var endDateStr = data[options.endDateName] ? data[options.endDateName] : value;
    if (!startDateStr || !endDateStr)
        return;
    var startDate = new Date(startDateStr);
    var endDate = new Date(endDateStr);
    if (startDate.getTime() > endDate.getTime()) {
        return "Start date should happen before the end date";
    }
    return undefined;
}
exports.validateDateRange = validateDateRange;
/**
 * Creates an object from a given validator that contains
 * a fn property that could be a string a function or another
 * object and an options property..
 * @param validators
 * @returns
 */
function mapsValidators(validators) {
    var validatorsMap = {
        required: required,
        validateDateRange: validateDateRange,
        validateEmail: validateEmail,
        validateNumber: validateNumber,
        validateSlow: validateSlow,
        validateURL: validateURL
    };
    return validators.map(function (validator) {
        if (typeof validator === "string")
            return { fn: validatorsMap[validator], options: {} };
        else if (typeof validator === "function")
            return { fn: validator, options: {} };
        else
            return { fn: validatorsMap[validator.fn], options: validator.options };
    });
}
exports.mapsValidators = mapsValidators;
