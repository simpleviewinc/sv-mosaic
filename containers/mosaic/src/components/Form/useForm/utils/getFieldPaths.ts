import type { FieldObj } from "@root/components/Field";
import type { FieldPath } from "../types";

function getFieldPaths(fields: Record<string, FieldObj>, leading: FieldPath = []): FieldPath[] {
	const entries = Object.entries(fields).toSorted(([, { order: a }], [, { order: b }]) => a - b);
	const paths: FieldPath[] = [];

	for (const [, field] of entries) {
		const fullPath = [...leading, field.name];

		if (field.type === "group") {
			paths.push(
				fullPath,
				...getFieldPaths(field.fields, fullPath),
			);
			continue;
		}

		paths.push(fullPath);
	}

	return paths;
}

export default getFieldPaths;
