import get from "lodash/get";

import type { GetFieldError } from "../types";

import { mapsValidators, runValidators } from "../utils";
import getField from "./getField";
import getFieldErrors from "./getFieldErrors";

const getFieldError: GetFieldError = async ({
	name,
	include,
	path = [],
	deep,
	stable,
}) => {
	const { data, internalValidators } = stable;
	const field = getField({ name, path, stable });

	if (deep && "fields" in field && field.fields) {
		const { errors } = await getFieldErrors({
			names: Object.keys(field.fields),
			path: [...path, name],
			deep,
			stable,
		});

		return errors;
	}

	const requiredFlag = field.required;
	const validators = field.validators || [];

	if (requiredFlag) {
		validators.unshift({ fn: "required", options: {} });
	}

	if (field.type === "phone") {
		validators.push({ fn: "validatePhoneNumber", options: {} });
	}

	if (field.inputSettings?.maxCharacters > 0) {
		validators.push({
			fn: "validateCharacterCount",
			options: {
				max: field.inputSettings.maxCharacters,
				ignoreHTML: field.type === "textEditor",
			},
		});
	}

	if (field.inputSettings?.minDate || field.inputSettings?.maxDate) {
		validators.push({
			fn: "validateMinDate",
			options: {
				min: field.inputSettings?.minDate,
				max: field.inputSettings?.maxDate,
			},
		});
	}

	const validatorsMap = mapsValidators([
		...(internalValidators[name] || []),
		...validators,
	]).filter(validator => !include || include.includes(validator.fn));

	const result = await runValidators(
		validatorsMap,
		get(data, [...path, name]),
		path.length ? get(data, path) : data,
	);

	if (!result) {
		return undefined;
	}

	return result.errorMessage;
};

export default getFieldError;
