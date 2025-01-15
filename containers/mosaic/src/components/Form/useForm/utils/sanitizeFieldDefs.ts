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
							size: Sizes.full,
							required: field.required,
							disabled: field.disabled,
							inputSettings: {
								...inputSettings,
								minDate,
								maxDate,
								showTime: false,
							},
						},
						{
							name: "time",
							type: "time",
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
