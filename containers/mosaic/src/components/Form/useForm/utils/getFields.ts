import type { FieldObj } from "@root/components/Field";
import type { FieldPath, FormStable } from "../types";

interface GetFieldsParams {
	stable: FormStable;
	path?: FieldPath;
}

function getFields({ stable, path = [] }: GetFieldsParams): Record<string, FieldObj> {
	let result = stable.fields;

	for (const item of path) {
		result = result[item].fields;
	}

	return result;
}

export default getFields;
