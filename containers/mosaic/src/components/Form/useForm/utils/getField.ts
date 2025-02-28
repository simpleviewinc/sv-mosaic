import type { FormStable, FieldPath } from "../types";
import type { FieldObj } from "../../../Field";

interface GetFieldParams {
	name: string;
	stable: FormStable;
	path?: FieldPath;
}

function getField({ stable, name, path }: GetFieldParams): FieldObj {
	let parent: FormStable | FieldObj = stable;

	if (path) {
		for (const item of path) {
			parent = parent.fields[item];

			if (!parent || !parent.fields) {
				throw new Error(`Field \`${name}\` is not registered with this form at path ${JSON.stringify(path)}.`);
			}
		}
	}

	if (!parent.fields[name]) {
		throw new Error(`Field \`${name}\` is not registered with this form.`);
	}

	return parent.fields[name];
}

export default getField;
