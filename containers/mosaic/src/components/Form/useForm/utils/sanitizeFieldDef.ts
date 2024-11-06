import type { SanitizeFieldDefs } from "../types";
import type { FieldDefSanitized } from "../../../Field";

import getFieldConfig from "@root/utils/form/getFieldConfig";

const sanitizeFieldDefs: SanitizeFieldDefs = ({
	fields,
	sections,
	stable,
}) => {
	const fieldsBySection = sections && sections.map(({ fields }) => fields).flat(3);

	return fields.reduce((prev, field, index) => {
		const fieldConfig = getFieldConfig(field.type);
		const valueResolver = field.getResolvedValue || fieldConfig.getResolvedValue;

		const result: FieldDefSanitized = {
			...field,
			validateOn: field.validateOn || fieldConfig.validate,
			getResolvedValue: (value) => valueResolver(value, field),
			order: (fieldsBySection ? fieldsBySection.indexOf(field.name) : index) + 1,
			fields: field.type === "group" ? sanitizeFieldDefs({ fields: field.inputSettings.fields, stable }) : undefined,
		};

		return {
			...prev,
			[field.name]: result,
		};
	}, {});
};

export default sanitizeFieldDefs;
