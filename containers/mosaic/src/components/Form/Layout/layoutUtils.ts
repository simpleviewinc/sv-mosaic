import { nanoid } from "nanoid";

import type { SectionDef } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";

export const generateLayout = ({ sections, fields }: { sections?: SectionDef[]; fields: FieldDef[] }): SectionDef[] => {
	if (!sections) {
		return [{
			id: nanoid(),
			fields: fields.map(field => [[field.name]]),
		}];
	}

	return sections.map(section => {
		/**
		 * Filters out rows that have all-empty columns
		 */
		const rows = section.fields.filter(row => {
			const columnsWithFields = row.filter(column => Array.isArray(column) ? column.length : column.names.length);
			return columnsWithFields.length;
		});

		return {
			...section,
			id: section.id ?? nanoid(),
			fields: rows,
		};
	});
};
