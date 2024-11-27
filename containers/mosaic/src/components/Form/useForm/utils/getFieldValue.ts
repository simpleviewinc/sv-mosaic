import type { FieldPath, FormStable } from "../types";

import getField from "./getField";

interface GetFieldValue {
	fields: FieldPath;
	path?: FieldPath;
	value: any;
	stable: FormStable;
	current: {
		values: FormStable["data"];
		internalValues: FormStable["internalData"];
	};
}

function getFieldValue({ fields, path = [], value, current, stable }: GetFieldValue) {
	const [name, ...descendents] = fields;
	const field = getField({ name, path, stable });

	if (typeof value === "function") {
		value = value(current.internalValues[name]);
	}

	if (descendents.length) {
		const child = getFieldValue({
			fields: descendents,
			path: [...path, name],
			value,
			stable,
			current: {
				values: current.values[name],
				internalValues: current.internalValues[name],
			},
		});

		return {
			internalValue: {
				...current.internalValues[name],
				[descendents[0]]: child.internalValue,
			},
			value: field.getResolvedValue({
				...current.values[name],
				[descendents[0]]: child.value,
			}).value,
		};
	}

	return field.getResolvedValue(value);
}

export default getFieldValue;
