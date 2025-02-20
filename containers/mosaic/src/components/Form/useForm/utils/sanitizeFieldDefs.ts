import type { FieldDef, FieldDefSanitized } from "@root/components/Field";
import getAddressFields, { defaultAddressFields } from "@root/components/Field/FormFieldAddress/utils/getAddressFields";
import { Sizes } from "@root/theme";
import { matchTime } from "@root/utils/date";
import type { SectionDef } from "../../FormTypes";

// TODO Factor this out to the same place at which we create the sanitized field object store
function sanitizeFieldDefs(fields: FieldDef[], sections?: SectionDef[]): FieldDefSanitized[] {
	if (sections) {
		const fieldNames = fields.map(({ name }) => name);
		const sectionFieldNames = sections.map(({ fields }) => fields).flat(3);
		for (const sectionFieldName of sectionFieldNames ) {
			if (!fieldNames.includes(sectionFieldName)) {
				throw new Error(`Section references field \`${sectionFieldName}\`, which does not exist in list of field definitions.`);
			}
		}
	}

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
						include: (subFields || defaultAddressFields).map(subField => {
							// Labels "Address Line 1" field and hides it by default
							if (typeof subField === "string" && subField === "address1") {
								return {
									name: "address1",
									label: "Address Line 1",
									hideLabel: true,
								};
							}

							return subField;
						}),
					}),
				},
			};
		}

		if (field.type === "date") {
			const { inputSettings = {} } = field;
			const {
				minDate = new Date(1400, 0, 1),
				maxDate = new Date(3000, 11, 31),
			} = inputSettings;

			if (!field.inputSettings?.showTime) {
				return {
					...field,
					inputSettings: {
						...inputSettings,
						minDate,
						maxDate,
					},
				};
			}

			return {
				...field,
				type: "group",
				size: field.size || "md",
				required: Boolean(field.required) && {
					asterisk: true,
					validator: false,
				},
				inputSettings: {
					fields: [
						{
							name: "date",
							type: "date",
							label: `${field.label} Date`,
							hideLabel: true,
							size: Sizes.full,
							required: field.required,
							disabled: field.disabled,
							inputSettings: {
								...inputSettings,
								minDate,
								maxDate,
								showTime: false,
							},
							validates: ["time"],
						},
						{
							name: "time",
							type: "time",
							label: `${field.label} Time`,
							hideLabel: true,
							size: Sizes.full,
							required: field.required,
							disabled: field.disabled,
							inputSettings: {
								defaultTime: inputSettings.defaultTime,
							},
						},
					],
					layout: [[["date"], ["time"]]],
				},
				getResolvedValue: (value) => {
					if (value instanceof Date) {
						return {
							internalValue: {
								date: { date: value, keyboardInputValue: undefined },
								time: { time: value, keyboardInputValue: undefined, usingDefaultTime: false },
							},
							value,
						};
					}

					if (!value || !value.date || !value.time) {
						return { internalValue: value, value: undefined };
					}

					return {
						internalValue: value,
						value: matchTime(value.date, value.time),
					};
				},
			};
		}

		return field;
	});
}

export default sanitizeFieldDefs;
