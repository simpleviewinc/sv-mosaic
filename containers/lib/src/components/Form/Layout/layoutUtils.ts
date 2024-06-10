import { FieldDef, SectionDef } from "../FormTypes";

export const generateLayout = ({ sections, fields }: { sections?: SectionDef[]; fields: FieldDef[] }): SectionDef[] => {
	if (!sections) {
		return [{ fields: fields.map(field => [[field.name]]) }];
	}

	return sections.map(section => {
		/**
		 * Filters out rows that have all-empty columns
		 */
		const rows = section.fields.filter(row => {
			const columnsWithFields = row.filter(column => column.length);
			return columnsWithFields.length;
		});

		return {
			...section,
			fields: rows,
		};
	});
};
