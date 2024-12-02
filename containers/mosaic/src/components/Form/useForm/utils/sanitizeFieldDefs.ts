import type { FieldDef, FieldDefSanitized } from "@root/components/Field";
import getAddressFields from "@root/components/Field/FormFieldAddress/utils/getAddressFields";
import { Sizes } from "@root/theme";
import { matchTime } from "@root/utils/date";

function sanitizeFieldDefs(fields: FieldDef[]): FieldDefSanitized[] {
	return fields.map((field) => {
		if (field.type === "addressSingle") {
			const {
				inputSettings: {
					getOptionsCountries,
					getOptionsStates,
					googleMapsApiKey,
					subFields,
				} = {},
				required,
				disabled,
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
						disabled,
						include: subFields,
					}),
				},
			};
		}

		if (field.type === "date" && field.inputSettings?.showTime) {
			const { inputSettings = {} } = field;

			return {
				...field,
				type: "group",
				size: field.size || "md",
				inputSettings: {
					fields: [
						{
							name: "date",
							type: "date",
							size: Sizes.full,
							inputSettings: {
								...inputSettings,
								showTime: false,
							},
						},
						{
							name: "time",
							type: "time",
							size: Sizes.full,
							inputSettings: {
								defaultTime: inputSettings.defaultTime,
							},
						},
					],
					layout: [[["date"], ["time"]]],
				},
				getResolvedValue: (value) => {
					if (!value || !value.date || !value.time) {
						return { internalValue: value, value: undefined };
					}

					return { internalValue: value, value: matchTime(value.date, value.time) };
				},
			};
		}

		return field;
	});
}

export default sanitizeFieldDefs;
