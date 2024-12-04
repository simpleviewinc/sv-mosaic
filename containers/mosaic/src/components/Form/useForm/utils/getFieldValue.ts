import get from "lodash/get";

import type { FieldPath, FormStable } from "../types";

import getField from "./getField";

interface GetFieldValue {
	target: FieldPath;
	fieldName?: string;
	path?: FieldPath;
	depth?: number;
	value: any;
	currentValues: {
		values: FormStable["data"];
		internalValues: FormStable["internalData"];
	};
	stable: FormStable;
}

function getFieldValue({
	target,
	fieldName = target[0],
	path = [],
	value,
	currentValues,
	stable,
	depth = 0,
}: GetFieldValue) {
	const field = getField({
		name: fieldName,
		path,
		stable,
	});

	if (field.type === "group") {
		const result = Object.keys(field.fields).reduce<{ value: any; internalValue: any }>((acc, subField) => {
			const child = getFieldValue({
				target,
				fieldName: subField,
				path: [...path, fieldName],
				value,
				currentValues: {
					values: currentValues?.values?.[fieldName] || {},
					internalValues: currentValues?.internalValues?.[fieldName] || {},
				},
				stable,
				depth: depth + 1,
			});

			return {
				internalValue: {
					...acc.internalValue,
					[subField]: child.internalValue,
				},
				value: {
					...acc.value,
					[subField]: child.value,
				},
			};
		}, {
			internalValue: currentValues.internalValues[fieldName],
			value: currentValues.values[fieldName],
		});

		return {
			internalValue: result.internalValue,
			value: field.getResolvedValue(result.value).value,
		};
	}

	const isTarget = target.join(".") === [...path, fieldName].join(".");
	return field.getResolvedValue(
		isTarget ?
			(typeof value === "function" ? value(get(stable.internalData, [...path, fieldName])) : value) :
			currentValues.internalValues[fieldName]);
}

export default getFieldValue;
