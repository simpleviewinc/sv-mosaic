import { FieldDef, FieldDefCustom } from "../FormTypes";
import { FieldConfig } from "@root/components/Field";

import FormFieldText from "@root/components/Field/FormFieldText";
import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox";
import FormFieldChipSingleSelect from "@root/components/Field/FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "@root/components/Field/FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "@root/components/Field/FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "@root/components/Field/FormFieldRadio";
import FormFieldRaw from "@root/components/Field/FormFieldRaw";
import FormFieldToggleSwitch from "@root/components/Field/FormFieldToggleSwitch";
import FormFieldImageVideoLinkDocumentBrowsing from "@root/components/Field/FormFieldImageVideoLinkDocumentBrowsing";
import FormFieldColorPicker from "@root/components/Field/FormFieldColorPicker";
import FormFieldDate, { DateData, FieldDefDate } from "@root/components/Field/FormFieldDate/DateField";
import FormFieldTime, { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import FormFieldAddress from "@root/components/Field/FormFieldAddress";
import FormFieldTextEditor from "@root/components/Field/FormFieldTextEditor";
import FormFieldAdvancedSelection from "@root/components/Field/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "@root/components/Field/FormFieldMapCoordinates";
import FormFieldImageUpload from "@root/components/Field/FormFieldImageUpload";
import FormFieldMatrix from "@root/components/Field/FormFieldMatrix";
import FormFieldUpload from "@root/components/Field/FormFieldUpload";
import FormFieldNumberTable from "@root/components/Field/FormFieldNumberTable";
import { matchTime } from "@root/utils/date";

export function defaultResolver(value: any) {
	return { internalValue: value, value };
}

const fieldConfigMap: Partial<Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, FieldConfig>> = {
	text: {
		Component: FormFieldText,
		validate: "onBlurAmend",
		getResolvedValue: defaultResolver
	},
	checkbox: {
		Component: FormFieldCheckbox,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	chip: {
		Component: FormFieldChipSingleSelect,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	dropdown: {
		Component: FormFieldDropdownSingleSelection,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	phone: {
		Component: FormFieldPhoneSelectionDropdown,
		validate: "onBlurAmend",
		getResolvedValue: defaultResolver
	},
	radio: {
		Component: FormFieldRadio,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	toggleSwitch: {
		Component: FormFieldToggleSwitch,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	imageVideoDocumentLink: {
		Component: FormFieldImageVideoLinkDocumentBrowsing,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	color: {
		Component: FormFieldColorPicker,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	date: {
		Component: FormFieldDate,
		validate: "onBlurChange",
		getResolvedValue: (
			value: DateData | Date | undefined,
			fieldDef: FieldDefDate
		): {
			internalValue: DateData | undefined,
			value: Date | undefined
		} => {
			if (value instanceof Date ) {
				return {
					internalValue: { date: value, validDate: true, time: value, validTime: true },
					value
				}
			} else {
				const fixedTime = fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0];

				if (!value) {
					return {
						internalValue: undefined,
						value: undefined
					};
				}

				if (!value.validDate) {
					return { internalValue: value, value: undefined };
				}

				if (!fieldDef?.inputSettings?.showTime) {
					return { internalValue: value, value: matchTime(value.date, fixedTime) };
				}

				if (!value.validTime) {
					return { internalValue: value, value: undefined };
				}

				return { internalValue: value , value: matchTime(value.date, value.time) };
			}
		}
	},
	time: {
		Component: FormFieldTime,
		validate: "onBlur",
		getResolvedValue: (
			value: TimeData | string | undefined
		): {
			internalValue: TimeData | undefined,
			value: string | undefined
		} => {
			if (typeof value === "string") {
				const date = new Date();
				const [hrs, mins] = value.split(":");

				date.setHours(Number(hrs));
				date.setMinutes(Number(mins));

				return {
					internalValue: { time: date, validTime: true },
					value
				}
			} else {
				if (!value) {
					return {
						internalValue: undefined,
						value: undefined
					};
				}

				if (!value.validTime) {
					return { internalValue: value, value: undefined };
				}

				const time = `${
					String(value.time.getHours()).padStart(2, "0")
				}:${
					String(value.time.getMinutes()).padStart(2, "0")
				}`;

				return { internalValue: value , value: time };
			}
		}
	},
	address: {
		Component: FormFieldAddress,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	textEditor: {
		Component: FormFieldTextEditor,
		validate: "onBlurAmend",
		getResolvedValue: defaultResolver
	},
	advancedSelection: {
		Component: FormFieldAdvancedSelection,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	mapCoordinates: {
		Component: FormFieldMapCoordinates,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	imageUpload: {
		Component: FormFieldImageUpload,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	matrix: {
		Component: FormFieldMatrix,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	upload: {
		Component: FormFieldUpload,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	numberTable: {
		Component: FormFieldNumberTable,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	raw: {
		Component: FormFieldRaw,
		validate: "onChange",
		getResolvedValue: defaultResolver
	}
};

export function getFieldConfig(type: FieldDef["type"]): FieldConfig {
	if (typeof type !== "string") {
		return {
			Component: type,
			validate: "onBlur",
			getResolvedValue: defaultResolver
		};
	}

	if (!fieldConfigMap[type]) {
		return {
			Component: null,
			validate: "onBlur",
			getResolvedValue: defaultResolver
		};
	}

	return fieldConfigMap[type];
}

export default fieldConfigMap;
