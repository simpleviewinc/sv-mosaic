import type { FormStable } from "../types";
import type { FieldDef, FieldObj } from "../../../Field";

import getFieldConfig from "@root/utils/form/getFieldConfig";
import type { SectionDef } from "../../FormTypes";

interface CreateFieldStoreParams {
	fields: FieldDef[];
	sections?: SectionDef[];
	stable: FormStable;
}

function createFieldStore({
	fields,
	sections,
	stable,
}: CreateFieldStoreParams): Record<string, FieldObj> {
	const fieldsBySection = sections && sections.map(({ fields }) => fields).flat(3);

	return fields.reduce((prev, field, index) => {
		const fieldConfig = getFieldConfig(field.type);
		const valueResolver = field.getResolvedValue || fieldConfig.getResolvedValue;

		const result: FieldObj = {
			...field,
			validateOn: field.validateOn || fieldConfig.validate,
			getResolvedValue: (value) => valueResolver(value, field),
			order: (fieldsBySection ? fieldsBySection.indexOf(field.name) : index) + 1,
			fields: field.type === "group" ? createFieldStore({ fields: field.inputSettings.fields, stable }) : undefined,
		};

		return {
			...prev,
			[field.name]: result,
		};
	}, {});
}

export default createFieldStore;