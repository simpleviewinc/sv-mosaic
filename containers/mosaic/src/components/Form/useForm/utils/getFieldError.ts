import get from "lodash/get";

import type { FieldPath, FormError, FormStable, Validator } from "../types";

import { mapsValidators, runValidators } from "../utils";
import getField from "./getField";
import getFieldErrors from "./getFieldErrors";
import fieldIsActive from "./fieldIsActive";

interface GetFieldErrorParams {
	name: string;
	/**
	 * Get error for only the validators specified
	 */
	include?: Validator["fn"][];
	path?: FieldPath;
	deep?: boolean;
	stable: FormStable;
}

async function getFieldError({
	name,
	include,
	path = [],
	deep,
	stable,
}: GetFieldErrorParams): Promise<string | FormError | undefined> {
	const { data, internalData } = stable;
	const field = getField({ name, path, stable });

	if (deep && "fields" in field && field.fields) {
		const fullPath = [...path, name];

		const names = Object.keys(field.fields)
			.filter(subFieldName => fieldIsActive({
				name: subFieldName,
				stable,
				path: fullPath,
			}));

		const { errors, count } = await getFieldErrors({
			names,
			path: fullPath,
			deep,
			stable,
		});

		if (!count) {
			return undefined;
		}

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

	if (field.type === "date") {
		validators.push({ fn: "validateDate", options: {} });
	}

	if (field.type === "time") {
		validators.push({ fn: "validateTime", options: {} });
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

	const validatorsMap = mapsValidators(validators)
		.filter(validator => !include || include.includes(validator.fn));

	const result = await runValidators(
		validatorsMap,
		get(data, [...path, name]),
		path.length ? get(data, path) : data,
		get(internalData, [...path, name]),
		path.length ? get(internalData, path) : internalData,
		field,
	);

	if (!result) {
		return undefined;
	}

	return result.errorMessage;
}

export default getFieldError;
