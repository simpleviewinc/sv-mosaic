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
		const externalToInternalValue = field.externalToInternalValue || fieldConfig.externalToInternalValue;
		const internalToExternalValue = field.internalToExternalValue || fieldConfig.internalToExternalValue;

		const result: FieldObj = {
			...field,
			validateOn: field.validateOn || fieldConfig.validate,
			externalToInternalValue: (value) => externalToInternalValue(value, field),
			internalToExternalValue: (value) => internalToExternalValue(value, field),
			hasValue: field.hasValue || fieldConfig.hasValue,
			order: (fieldsBySection ? fieldsBySection.indexOf(field.name) : index) + 1,
			fields: field.type === "group" ? createFieldStore({ fields: field.inputSettings.fields, stable }) : undefined,
			required: typeof field.required === "object" ?
				field.required :
				field.required ?
					{ validator: true, asterisk: true } :
					undefined,
		};

		return {
			...prev,
			[field.name]: result,
		};
	}, {});
}

export default createFieldStore;
