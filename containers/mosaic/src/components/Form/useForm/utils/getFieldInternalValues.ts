import type { FormStable } from "../types";

function getFieldInternalValues(values: FormStable["data"], fields: FormStable["fields"]): FormStable["internalData"] {
	const entries = Object.entries(fields);
	const result: FormStable["internalData"] = {};

	for (const [name, field] of entries) {
		if (!values) {
			continue;
		}

		if ("fields" in field && field.fields) {
			result[name] = getFieldInternalValues(field.externalToInternalValue(values[name]), field.fields);
		} else {
			result[name] = field.externalToInternalValue(values[name]);
		}
	}

	return result;
}

export default getFieldInternalValues;
