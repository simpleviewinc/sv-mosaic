import type { GetField, FormStable } from "../types";
import type { FieldDefSanitized } from "../../../Field";

const getField: GetField = ({ stable, name, path }) => {
	let parent: FormStable | FieldDefSanitized = stable;

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
};

export default getField;
