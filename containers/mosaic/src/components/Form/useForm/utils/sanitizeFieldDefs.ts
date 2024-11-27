import type { FieldDef, FieldDefSanitized } from "@root/components/Field";
import getAddressFields from "@root/components/Field/FormFieldAddress/utils/getAddressFields";

function sanitizeFieldDefs(fields: FieldDef[]): FieldDefSanitized[] {
	return fields.map((field) => {
		if (field.type === "addressSingle") {
			const {
				inputSettings: {
					getOptionsCountries,
					getOptionsStates,
					googleMapsApiKey,
					subFields,
				},
				required,
			} = field;

			return {
				...field,
				type: "group",
				inputSettings: {
					fields: getAddressFields({
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey,
						required,
						include: subFields,
					}),
				},
			};
		}

		return field;
	});
}

export default sanitizeFieldDefs;
