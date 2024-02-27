import { Validator } from "./validators";

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
