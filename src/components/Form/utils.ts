import { Validator } from "./validators";
import {
	FormStable,
	FormState,
} from "./state/types";

export const cleanValue = (value: unknown) => {
	if (value === "" || (Array.isArray(value) && value.length === 0)) {
		return undefined;
	}

	return value;
};

export function stateFromStable({
	internalData,
	data,
	errors,
	disabled,
	touched,
	busyFields,
	submitWarning,
	waits,
}: FormStable): FormState {
	return {
		internalData,
		data,
		errors,
		disabled,
		touched,
		busyFields,
		submitWarning,
		waits,
	};
}

export async function runValidators(
	validators: Validator[],
	value: unknown,
	data: unknown,
): Promise<{
		errorMessage?: string | undefined;
		validator: Validator;
	}> {
	for (const validator of validators) {
		const result = await validator.fn(value, data, validator.options);
		if (result) {
			return {
				errorMessage: result,
				validator,
			};
		}
	}

	return;
}
