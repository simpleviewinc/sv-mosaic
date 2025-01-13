import type { FieldObj } from "@root/components/Field";
import type { FieldPath } from "../types";

function getFieldPaths(fields: Record<string, FieldObj>, leading: FieldPath = []): FieldPath[] {
	const entries = Object.entries(fields);
	const paths: FieldPath[] = [];

	entries.sort(([, { order: a }], [, { order: b }]) => a - b);

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
