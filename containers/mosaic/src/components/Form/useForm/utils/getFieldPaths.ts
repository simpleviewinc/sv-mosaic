import type { FieldObj } from "@root/components/Field";
import type { FieldPath } from "../types";

function getFieldPaths(fields: Record<string, FieldObj>, leading: FieldPath = []): FieldPath[] {
	const entries = Object.entries(fields);
	const paths: FieldPath[] = [];

	for (const [, field] of entries) {
		if (field.type === "group") {
			paths.push(...getFieldPaths(field.fields, [...leading, field.name]));
			continue;
		}

		paths.push([...leading, field.name]);
	}

	return paths;
}

export default getFieldPaths;
