import type { FieldObj } from "@root/components/Field";
import type { FormStable, FormState, Validator } from "./types";

import {
	validateLatitude,
	validateLongitude,
	required,
	validateCharacterCount,
	validateDateRange,
	validateEmail,
	validateMinDate,
	validateNumber,
	validatePhoneNumber,
	validateSlow,
	validateURL,
	validatePostcode,
	validateNumberRange,
	validateDate,
	validateTime,
} from "@root/utils/form/validators";

export function stateFromStable({
	internalData,
	data,
	errors,
	disabled,
	touched,
	submitWarning,
	waits,
	skeleton,
}: FormStable): FormState {
	return {
		internalData,
		data,
		errors,
		disabled,
		touched,
		submitWarning,
		waits,
		skeleton,
	};
}

export async function runValidators(
	validators: Validator[],
	value: unknown,
	data: unknown,
	internalValue: unknown,
	internalData: unknown,
	fieldDef: FieldObj,
): Promise<{ errorMessage?: string | undefined; validator: Validator }> {
	for (const validator of validators) {
		const result = await validator.fn(
			value,
			data,
			validator.options,
			internalValue,
			internalData,
			fieldDef,
		);
		if (result) {
			return {
				errorMessage: result,
				validator,
			};
		}
	}

	return;
}

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
		validateLatitude: validateLatitude,
		validateLongitude: validateLongitude,
		validateDateRange: validateDateRange,
		validateMinDate: validateMinDate,
		validateDate: validateDate,
		validateTime: validateTime,
		validateNumberRange: validateNumberRange,
		validateCharacterCount: validateCharacterCount,
		validateEmail: validateEmail,
		validateNumber: validateNumber,
		validateSlow: validateSlow,
		validateURL: validateURL,
		validatePhoneNumber: validatePhoneNumber,
		validatePostcode: validatePostcode,
	};

	return validators.map(validator => {
		if (typeof validator === "string") return { fn: validatorsMap[validator], options: {} };
		else if (typeof validator === "function") return { fn: validator, options: {} };
		else return { fn: validatorsMap[validator.fn], options: validator.options };
	});
}
