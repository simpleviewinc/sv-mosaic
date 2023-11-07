import { FieldDef, SectionDef } from "../FormTypes";

export const generateLayout = ({ sections, fields }: { sections?: SectionDef[], fields: FieldDef[] }): SectionDef[] => {
	if (!sections) {
		return [{ fields: fields.map(field => [[field.name]]) }];
	}

	return sections;
};
